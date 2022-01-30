import React from "react";
import GoogleMapReact from "google-map-react";
import './SimpleMap.css';

const SimpleMap = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  

  return (
    <div className="map-container" style={{ height: "94vh", width: "70vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDDGdErz7Jdy2fJ-JSVehmCJpbz8Bw35tQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((places, i) => (
          <div
            lat={Number(places.latitude)}
            lng={Number(places.longitude)}
            key={i}
          >
            {
              false? (
              <i class="placeicon fa-2x fas fa-map-marker-alt"></i>
            ) : (
              <>
              <div className="map-card-container">
              <h4>{places.name}</h4>
                <img
                  src={
                    places.photo
                      ? places.photo.images.large.url
                      : "https://media-cdn.tripadvisor.com/media/photo-w/0e/e3/e2/1c/taj-view-point.jpg"
                  }
                  alt=""
                />
              </div>
              </>
            )}
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
