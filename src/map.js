import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

function showMap() {
  //--------------------------------------------------------------
  // Initialize the Mapbox map
  // With your access token from .env and initial settings
  //--------------------------------------------------------------
  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/standard",
    center: [-123.00163752324765, 49.25324576104826],
    zoom: 10,
  });

  //------------------------------------------------------------------------
  // Add controls to the map here, and keep things organized
  // You can call additional controls/setup functions from here.
  //------------------------------------------------------------------------
  addControls();
  function addControls() {
    // Add zoom and rotation controls to the map.
    map.addControl(new mapboxgl.NavigationControl());

    // Add other controls here as needed
    //addGeolocationControl(map);
    //addGeoCoderControl(map);
  }

  //--------------------------------------------------------------
  // Add layers, sources, etc. to the map, and keep things organized.
  // You can call additional layers/setup functions from here.
  // Run setupMap() once when the style loads.
  //--------------------------------------------------------------
  map.once("load", () => setupMap(map)); // run once for the initial style
  function setupMap(map) {
    addUserPin(map);
    //add other layers and stuff here
    //addCustomLayer1(map);
    //addCustomLayer2(map);
    //addCustomLayer3(map);
  }
}

//-----------------------------------------------------
// Add pin for showing where the user is.
// This is a separate function so that we can use a different
// looking pin for the user.
// This version uses a pin that is just a circle.
//------------------------------------------------------
function addUserPin(map) {
  // Adds user's current location as a source to the map
  navigator.geolocation.getCurrentPosition((position) => {
    const userLocation = [position.coords.longitude, position.coords.latitude];
    console.log(userLocation);
    if (userLocation) {
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
              properties: {
                description: "Your location",
              },
            },
          ],
        },
      });

      // Creates a layer above the map displaying the pins
      // Add a layer showing the places.
      map.addLayer({
        id: "userLocation",
        type: "circle",
        source: "userLocation",
        paint: {
          // customize colour and size
          "circle-color": "blue",
          "circle-radius": 9,
          "circle-stroke-width": 6,
          "circle-stroke-color": "#ffffff",
        },
      });
    }
  });
}

showMap();
