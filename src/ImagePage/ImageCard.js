import React from 'react';
import './ImageCard.css';


const ImageCard = (props) =>{


return(
    <div className="image-card" key={props.id}>
    <img className="infoImg" src={props.url} alt=""/>
    <div className="img-dsc">
        <span>{props.title}</span>
        <span>{props.date}</span>
        <span>{props.copyrights}</span>
        <p>{props.explanation}</p>

    </div>
    </div>   
    );
}

export default ImageCard;