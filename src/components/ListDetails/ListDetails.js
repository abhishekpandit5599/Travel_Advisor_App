import React from 'react';
import './ListDetails.css';

export default function ListDetails({place}){
  return <div className='card-container'>
          <img src = {place.photo ? place.photo.images.large.url : "https://media-cdn.tripadvisor.com/media/photo-w/0e/e3/e2/1c/taj-view-point.jpg"} alt=''/>
          <div className='info-container'>
            <h4>{place.name}</h4>
            <div className='level'><span>Price</span> <p>{place.price_level? place.price_level : "## "}</p></div>
            <div className='level'><span>Rating</span> <p>{place.rating? place.rating : "## "}</p></div>
            <div className='level'><span>Ranking</span> <p>{place.ranking?place.ranking:"## "}</p></div>
            <div className='level'><span><i class="placeicon fas fa-phone-alt"></i></span> <p>{place.phone?place.phone:"## "}</p></div>
            <div className='level'><span><i class="placeicon fas fa-map-marker-alt"></i></span> <p>{place.address?place.address:"## "}</p></div>
            <button onClick={() => window.open(place.web_url,"_blank")}>Trip Advisor</button>
            <button onClick={() => window.open(place.website,"_blank")}>Website</button>
      </div>
  </div>;
}

