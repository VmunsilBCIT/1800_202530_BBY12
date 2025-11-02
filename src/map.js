import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function showMap() {
  //--------------------------------------------------------------
  // Initialize the Mapbox map
  //--------------------------------------------------------------
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v11", // 
    center: [-73.935242, 40.73061], // 
    zoom: 11,
  });

  //--------------------------------------------------------------
  // Add default controls (zoom, rotate)
  //--------------------------------------------------------------
  map.addControl(new mapboxgl.NavigationControl(), "top-right");

  //--------------------------------------------------------------
  // Add user's location pin + range circle
  //--------------------------------------------------------------
  map.once("load", () => {
    addUserPin(map);
  });

  //--------------------------------------------------------------
  // Ping button click event
  //--------------------------------------------------------------
  const pingBtn = document.getElementById("pingBtn");
  if (pingBtn) {
    pingBtn.addEventListener("click", () => {
      alert("📍 Pinging nearby friends...");
    });
  }
}

//--------------------------------------------------------------
// Add user pin (marker + circle range)
//--------------------------------------------------------------
function addUserPin(map) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const userLocation = [
        position.coords.longitude,
        position.coords.latitude,
      ];
      console.log("User location:", userLocation);


      map.addSource("userLocation", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: userLocation,
              },
              properties: {},
            },
          ],
        },
      });

  
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


      map.addLayer({
        id: "userPin",
        type: "circle",
        source: "userLocation",
        paint: {
          "circle-color": "#000000",
          "circle-radius": 10,
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 3,
        },
      });

      
      map.flyTo({
        center: userLocation,
        zoom: 12,
        speed: 1.2,
        curve: 1.4,
      });
    },
    (err) => {
      console.error("Failed to get location:", err);
    }
  );
}

showMap();
