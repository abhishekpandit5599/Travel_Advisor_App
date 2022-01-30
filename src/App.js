import "./App.css";
import SimpleMap from "./components/Map/SimpleMap";
import Navbar from "./components/Navbar/Navbar";
import List from "./components/List/List";
import { getPlacesData } from "./api/index";
import { useEffect, useState } from "react";


function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({ sw: 0, ne: 0 });
  const [childClicked, setChildClicked] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(0);
  const [filterPlaces, setFilterPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() =>{
    const filterPlaces = places ? places.filter((places) => Number(places.rating) >= rating) : '';
    setFilterPlaces(filterPlaces);
  },[rating,places]);

  useEffect(() => {
    getPlacesData(type,bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [type,coordinates, bounds]);

  return (
    <>
      <Navbar setCoordinates={setCoordinates}/>
      <div className="partition">
        <List 
          places={filterPlaces.length?filterPlaces:places} 
          childClicked={childClicked} 
          setRating={setRating}
          setType={setType}
          type={type}
          rating={rating}
          />
        <SimpleMap
          setCoordinates={setCoordinates}
          setBounds={setBounds}
          coordinates={coordinates}
          places={filterPlaces.length?filterPlaces:places}
          setChildClicked={setChildClicked}
        />
      </div>
    </>
  );
}

export default App;
