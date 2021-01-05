import React from 'react'
import { GoogleMap, useLoadScript,Marker} from '@react-google-maps/api';
import { v4 as uuidv4 } from 'uuid';
const containerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 31.485149619977385,
  lng:  74.32581133884138
  
};

function Location() {
  
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  })

  const markers = [
    {lat: 31.485149619977385, lng:  74.32581133884138 },
    {lat:31.498086635352834, lng:    73.1411100033264 },
    {lat: 33.710855907977816, lng:   73.02345998996441 },
    {lat:30.21740795600365 ,    lng:    71.51148456567498 }
  ]

 if(loadError){return "Error Loading Maps"};
 if(!isLoaded){return "is Loading"}


  return (
    <div style={{backgroundColor:'honeydew'}}>
    <h1 className="text-center p-2">Dine in With Us</h1>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {markers.map((marker,i)=> <Marker  key={uuidv4()} position={{lat:marker.lat , lng:marker.lng}}></Marker>)}
      </GoogleMap>
    </div>
  )
} 

export default Location