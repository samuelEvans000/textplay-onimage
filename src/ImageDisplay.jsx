/* eslint-disable react/prop-types */

import  { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"

const ImageDisplay = ({ apiKey }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    
    axios.get(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
      .then((response) => {
        setImage(response.data.urls.regular);
      })
      .catch((error) => {
        console.error('Error fetching image:', error);
      });
  }, [apiKey]);

  return (
    <div className="image" >
   
      {image && <img src={image}  alt= "fetched"/>}
    </div>
  );
};

export default ImageDisplay;
