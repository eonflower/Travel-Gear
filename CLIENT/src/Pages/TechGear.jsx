import React, { useContext } from "react";
import { TechGearContext } from "../Components/TechGearContext";


function TechGear() {
  const { techGear } = useContext(TechGearContext);
  console.log(techGear);
 

  return (
    <div className='techgear'>
      {techGear.map((item) => (
        <div key={item._id}>
          <h2>{item.brand}</h2>
          <h3>{item.name}</h3>
          <h3>
            Type: {item.style} | ${item.price}
          </h3>
          <p>Capacity: {item.capacity}L</p>
          <p>{item.description}</p>
          <img src={item.imgURL} alt={item.title} id='tech-gear-img' />
          <button className="add-to-wishlist" onClick={() => addToWishlist(item)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default TechGear;
