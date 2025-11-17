import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import * as turf from "@turf/turf";

import { auth, db } from "./firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

let mapInstance;
let mapLoaded = false;
const userMarkerId = "userLocationPoint";
const userRadiusId = "userLocationRadius";

async function saveUserLocation(userId, username, coords) {
  try {
    const userDocRef = doc(db, "userIDs", userId);
    const userSnap = await getDoc(userDocRef);

    const data = {
      username,
      location: { lat: coords.latitude, lng: coords.longitude },
      timestamp: new Date(),
    };

    if (userSnap.exists()) {
      await setDoc(userDocRef, data, { merge: true });
    } else {
      await setDoc(userDocRef, { ...data, friends: [] });
    }

    console.log("User location saved/updated in Firebase");
  } catch (error) {
    console.error("Error saving location:", error);
  }
}

function showMap() {
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  if (!navigator.geolocation) {
    console.error("Geolocation not supported");
    return;
  }

  navigator.geolocation.watchPosition(
    async (pos) => await initOrUpdateMap(pos),
    (err) => initMapFallback(err),
    { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
  );
}

async function initOrUpdateMap(position) {
  const userLocation = [position.coords.longitude, position.coords.latitude];

  const currentUserId = auth.currentUser?.uid;
  const currentUsername = auth.currentUser?.displayName || "You";

  if (!currentUserId) return;

  await saveUserLocation(currentUserId, currentUsername, position.coords);

  if (!mapInstance) {
    mapInstance = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/standard",
      center: userLocation,
      zoom: 14,
      pitch: 0,
    });

    mapInstance.on("load", async () => {
      mapLoaded = true;
      addControls(mapInstance);
      updateUserPin(mapInstance, userLocation);
      await addFriendsToMap(mapInstance, currentUserId);
    });
  } else if (mapLoaded) {
    updateUserPin(mapInstance, userLocation);
  }
}

function updateUserPin(map, userLocation) {
  if (!mapLoaded) return;

  const pointFeature = {
    type: "Feature",
    geometry: { type: "Point", coordinates: userLocation },
  };

  if (map.getSource(userMarkerId)) {
    map.getSource(userMarkerId).setData(pointFeature);
  } else {
    map.addSource(userMarkerId, { type: "geojson", data: pointFeature });
    map.addLayer({
      id: "userLocationInner",
      type: "circle",
      source: userMarkerId,
      paint: {
        "circle-color": "rgba(0,191,255,1)",
        "circle-radius": 8,
        "circle-stroke-width": 2,
        "circle-stroke-color": "white",
      },
    });
  }

  const radiusPoly = turf.circle(userLocation, 750 / 1000, {
    steps: 64,
    units: "kilometers",
  });

  if (map.getSource(userRadiusId)) {
    map.getSource(userRadiusId).setData(radiusPoly);
  } else {
    map.addSource(userRadiusId, { type: "geojson", data: radiusPoly });
    map.addLayer({
      id: "userLocationRadiusFill",
      type: "fill",
      source: userRadiusId,
      paint: {
        "fill-color": "rgba(0, 191, 255, 0.15)",
        "fill-outline-color": "rgba(0, 191, 255, 0.3)",
      },
    });
    map.addLayer({
      id: "userLocationRadiusLine",
      type: "line",
      source: userRadiusId,
      paint: { "line-color": "rgba(0,191,255,0.35)", "line-width": 2 },
    });
  }
}

function addControls(map) {}

function initMapFallback(err) {
  console.warn("Geolocation failed:", err.message);
  const fallbackCenter = [-123.0016, 49.25324];

  mapInstance = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: fallbackCenter,
    zoom: 14,
  });

  mapInstance.on("load", () => {
    mapLoaded = true;
    addControls(mapInstance);
  });
}

async function addFriendsToMap(map, currentUserId) {
  if (!mapLoaded) return;

  try {
    const userDocRef = doc(db, "userIDs", currentUserId);
    const userSnap = await getDoc(userDocRef);
    if (!userSnap.exists()) return;

    const friendsArray = userSnap.data().friends || [];

    for (const friendId of friendsArray) {
      if (!friendId) continue;

      const friendDoc = await getDoc(doc(db, "userIDs", friendId));
      if (!friendDoc.exists()) continue;

      const friendData = friendDoc.data();
      if (!friendData.location) continue;

      const coords = [friendData.location.lng, friendData.location.lat];

      const markerContainer = document.createElement("div");
      markerContainer.style.display = "flex";
      markerContainer.style.flexDirection = "column";
      markerContainer.style.alignItems = "center";

      const label = document.createElement("div");
      label.textContent = friendData.username || "Friend";
      label.style.backgroundColor = "white";
      label.style.color = "black";
      label.style.padding = "2px 6px";
      label.style.borderRadius = "4px";
      label.style.fontSize = "12px";
      label.style.fontWeight = "bold";
      label.style.marginBottom = "4px";
      label.style.whiteSpace = "nowrap";
      label.style.boxShadow = "0 0 2px rgba(0,0,0,0.5)";

      const marker = document.createElement("div");
      marker.style.width = "20px";
      marker.style.height = "20px";
      marker.style.borderRadius = "50%";
      marker.style.border = "2px solid white";
      marker.style.backgroundColor = "#FF69B4";

      markerContainer.appendChild(label);
      markerContainer.appendChild(marker);

      new mapboxgl.Marker(markerContainer).setLngLat(coords).addTo(map);
    }
  } catch (error) {
    console.error("Error loading friends:", error);
  }
}

const PING_RADIUS_METERS = 750;

function showPingBox() {
  if (document.getElementById("pingBox")) return;

  const container = document.createElement("div");
  container.id = "pingBox";
  container.style.position = "fixed";
  container.style.bottom = "100px";
  container.style.left = "50%";
  container.style.transform = "translateX(-50%)";
  container.style.background = "white";
  container.style.border = "1px solid #ccc";
  container.style.borderRadius = "8px";
  container.style.padding = "10px";
  container.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
  container.style.zIndex = 9999;
  container.style.display = "flex";
  container.style.alignItems = "center";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Type your message...";
  input.id = "pingMessage";
  input.style.width = "300px";
  input.style.padding = "5px";
  input.style.marginRight = "5px";

  const sendBtn = document.createElement("button");
  sendBtn.textContent = "Send";
  sendBtn.className = "btn btn-primary btn-sm";

  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Cancel";
  cancelBtn.className = "btn btn-secondary btn-sm";
  cancelBtn.style.marginLeft = "5px";

  container.appendChild(input);
  container.appendChild(sendBtn);
  container.appendChild(cancelBtn);
  document.body.appendChild(container);

  sendBtn.addEventListener("click", async () => {
    const msg = input.value.trim();
    if (!msg) return alert("Please enter a message.");
    await pingNearbyFriends(msg);
    container.remove();
  });

  cancelBtn.addEventListener("click", () => container.remove());
}

async function pingNearbyFriends(message) {
  if (!mapInstance || !auth.currentUser) return;

  const currentUserId = auth.currentUser.uid;
  const userDocRef = doc(db, "userIDs", currentUserId);
  const userSnap = await getDoc(userDocRef);
  if (!userSnap.exists() || !userSnap.data().location) return;

  const userLoc = userSnap.data().location;
  const friendsArray = userSnap.data().friends || [];
  let notifiedFriends = [];

  for (const friendId of friendsArray) {
    if (!friendId) continue;

    const friendDocRef = doc(db, "userIDs", friendId);
    const friendDoc = await getDoc(friendDocRef);
    if (!friendDoc.exists() || !friendDoc.data().location) continue;

    const friendLoc = friendDoc.data().location;

    const from = turf.point([userLoc.lng, userLoc.lat]);
    const to = turf.point([friendLoc.lng, friendLoc.lat]);
    const distance = turf.distance(from, to, { units: "meters" });

    if (distance <= PING_RADIUS_METERS) {
      notifiedFriends.push(friendDoc.data().username || "Friend");

      await setDoc(
        friendDocRef,
        {
          notifications: [
            ...(friendDoc.data().notifications || []),
            {
              from: currentUserId,
              message,
              timestamp: new Date(),
            },
          ],
        },
        { merge: true }
      );
    }
  }

  if (notifiedFriends.length > 0) {
    alert(`Message sent to:\n${notifiedFriends.join("\n")}`);
  } else {
    alert("No friends are within your 750m radius.");
  }
}

const pingBtn = document.getElementById("pingBtn");
if (pingBtn) {
  pingBtn.addEventListener("click", () => {
    showPingBox();
  });
}

showMap();
