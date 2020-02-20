
import React, {useState, useEffect} from 'react';
import ImageCard from "./ImageCard";
import axios from "axios";

export default function ImageList() {
let [info, setInfos] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data);
    setInfos(response.data); 
  })
  .catch(error => {
    console.log("the data was not returned", error);
  });

}, []);

return (
  <div className="information">
     
      <ImageCard 
      key={info.url}
      title={info.title}
      date={info.date}
      explanation={info.explanation}
      url={info.url}
       
      /> 
      
  
  </div>
);

    
};


