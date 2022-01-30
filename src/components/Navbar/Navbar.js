import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import './Navbar.css';

export default function Navbar({setCoordinates}) {
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (autoC) => setAutoComplete(autoC);
  const onPlaceChanged = () =>{
    const lat = autoComplete.getPlace().geometry.location.lat();
    const lng = autoComplete.getPlace().geometry.location.lng();
    setCoordinates({lat, lng});
  }

  return <div>
      <div className='navbar'>
          <div className='logo-brand'>
              <h4>Travel Advisor</h4>
          </div>
          <div className='search-box-div'>
              <h5>Explore new places</h5>
              <Autocomplete
                className="input"
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
              >
                <input type="text" placeholder='Search...'/>
              </Autocomplete>
            </div>
      </div>
  </div>;
}
