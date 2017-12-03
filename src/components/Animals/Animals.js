import React from 'react';
import './Animals.css';

const Animals = (props) => (
  <div className="row justify-content-center images-row col-10" >
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[0]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[0]}
      onClick={props.click} alt="image1"/>
    </div>
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[1]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[1]}
      onClick={props.click} alt="image2"/>
    </div>
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[2]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[2]}
      onClick={props.click} alt="image3"/>
    </div>
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[3]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[3]}
      onClick={props.click} alt="image4"/>
    </div>
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[4]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[4]}
      onClick={props.click} alt="image5"/>
    </div>
    <div className="col-4 image-div">
      <img src={process.env.PUBLIC_URL+"/images/"+props.animalsArr[5]+".jpg"}
      className="img-fluid animalImg" data-id={props.animalsArr[5]}
      onClick={props.click} alt="image6"/>
    </div>
  </div>
)

export default Animals;
