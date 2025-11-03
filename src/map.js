import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function showMap() {
  // 1️⃣ Initialize the Mapbox map
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11", // Dark map style
    center: [-73.935242, 40.73061], // Default center (New York)
    zoom: 11,
  });

  // 2️⃣ Add zoom and rotation controls
  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  // 3️⃣ Add user pin when map is fully loaded
  map.once("load", () => {
    addUserPin(map);
  });

  // 4️⃣ "Ping nearby Friends" button event
  const pingBtn = document.getElementById("pingBtn");
  if (pingBtn) {
    pingBtn.addEventListener("click", () => {
      alert("📍 Pinging nearby friends...");
    });
  }
}

// 🧭 Add user location pin and range circle
function addUserPin(map) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLocation = [
        position.coords.longitude,
        position.coords.latitude,
      ];

      // Add user location source
      map.addSource("userLocation", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: { type: "Point", coordinates: userLocation },
            },
          ],
        },
      });

      // Add transparent radius circle (~5 km)
      map.addLayer({
        id: "userRadius",
        type: "circle",
        source: "userLocation",
        paint: {
          "circle-radius": {
            stops: [
              [0, 0],
              [20, 5000 / 2],
            ],
            base: 2,
          },
          "circle-color": "rgba(255,255,255,0.15)",
          "circle-stroke-color": "rgba(255,255,255,0.4)",
          "circle-stroke-width": 2,
        },
      });

      // Add user pin (black circle with white border)
      map.addLayer({
        id: "userPin",
        type: "circle",
        source: "userLocation",
        paint: {
          "circle-color": "#000",
          "circle-radius": 10,
          "circle-stroke-color": "#fff",
          "circle-stroke-width": 3,
        },
      });

      // Smooth fly to user's location
      map.flyTo({
        center: userLocation,
        zoom: 12,
        speed: 1.2,
        curve: 1.4,
      });
    },
    (error) => {
      console.error("Failed to get user location:", error);
    }
  );
}

showMap();
