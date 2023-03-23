import React, { useContext } from "react";
import { TechGearContext } from "../Components/TechGearContext";


function TechGear() {
  const { techGear } = useContext(TechGearContext);
  console.log(techGear);
 

  return (
    <>
    <div className="tech">
    <h2 className="tech-text">Gear that works as hard as you do - built to last, ready for anything</h2>
    </div>
    <div className='techgear'>
      {techGear.map((item) => (
        <div className="gear-page-item" key={item._id}>
          <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
          <h2 className="item-brand">{item.brand}</h2>
          <h3 className="item-name">{item.name}</h3>
          <h3 className="item-type">
            Type: {item.style} | ${item.price}
          </h3>
          <h4 className="item-size">Capacity: {item.capacity}L</h4>
          <p>{item.description}</p>
          <button className="add-to-wishlist" onClick={() => addToWishlist(item)}>Add</button>
        </div>
      ))}
    </div>
    </>
  );
}

export default TechGear;
