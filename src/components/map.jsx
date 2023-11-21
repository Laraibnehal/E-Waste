import React, { useState, useEffect } from "react";
import ReactMapboxGl from "react-mapbox-gl";
// import GeolocateControl from "react-mapbox-gl/lib/components/geolocate-control";
// import "mapbox-gl/dist/mapbox-gl.css";
import { locations } from "../data/location";

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const markerStyle = {
    backgroundColor: "#1976d2",
    borderRadius: "50%",
    width: "12px",
    height: "12px",
    border: "2px solid #fff",
  };
  useEffect(() => {
    // Fetch user's location here using navigator.geolocation
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, []);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <ReactMapboxGl
        accessToken={accessToken}
        center={userLocation || [DEFAULT_LNG, DEFAULT_LAT]}
        zoom={[12]}
        style="mapbox://styles/mapbox/streets-v11"
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        {locations.map((location, index) => {
          <Marker
            key={index}
            coordinates={[location.lng, location.lat]}
            anchor="bottom"
          >
            <div className="marker" style={markerStyle}>
              Marker
            </div>
          </Marker>;
        })}
      </ReactMapboxGl>
    </div>
  );
};

export default Map;
