import React,{useState} from 'react';
import ListDetails from '../ListDetails/ListDetails';
import './List.css';

export default function List({places, childClicked,setRating,setType,type,rating}) {
    


  


  return <div className='left-container'>
      <h3 className='heading'>Restaurants,Hotels & Attractions around you</h3>
      <div className='selection'>
        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="restaurants">Restaurants</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
        </select>

        <label>Rating</label>
        <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
        </select>
      </div>
      
      <div className='listDetails-container'>
          {places?.map((place,i) => (
              <div className='indiviual-places'>
                <ListDetails place={place} key={i}/>
              </div>
          ))}
      </div>
  </div>;
}
