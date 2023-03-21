
import React, { useState, useContext } from "react";
import { TechGearContext } from "../Components/TechGearContext";
import { PhotographyContext  } from "../Components/PhotographyContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomePage() {
  const { techGear } = useContext(TechGearContext);
  const { photoGear } = useContext(PhotographyContext);
 
  return (
  <div className="homepage">
    <h1>HomePage</h1>
    <hr></hr>
    <div className="techGear-slider">
      <h1>Tech Gear</h1>
    <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
  {techGear.map((item) => (
    <div key={item._id}>
      <h1>{item.brand}</h1>
      <h2>{item.name}</h2>
      <h3>
        Type: {item.style} | ${item.price}
      </h3>
      <p>Capacity: {item.capacity}L</p>
      <p>{item.description}</p>
      <img src={item.imgURL} alt={item.title} id='tech-gear-img' />
    </div>
  ))}
  </Slider>
  <h1>Photography Gear</h1>
  <div className="photoGear-slider">
    <Slider dots={true} infinite={true} speed={500} slidesToShow={3} slidesToScroll={1}>
  {photoGear.map((item) => (
    <div key={item._id}>
      <h1>{item.brand}</h1>
      <h2>{item.name}</h2>
      <h3>
        Type: {item.style} | ${item.price}
      </h3>
      <p>Capacity: {item.capacity}L</p>
      <p>{item.description}</p>
      <img src={item.imgURL} alt={item.title} id='tech-gear-img' />
    </div>
  ))}
</Slider>
</div>
</div>

  </div>
  )  
}


export default HomePage;