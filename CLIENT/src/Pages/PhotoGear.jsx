import React, {useContext} from "react";
import { PhotographyContext } from "../Components/PhotographyContext";

function PhotoGear() {
  const { photoGear } = useContext(PhotographyContext);
  console.log(photoGear)

  return (
    <div className='photogear'>
    {photoGear.map((item) => (
      <div key={item._id}>
        <h2>{item.brand}</h2>
        <h3>{item.name}</h3>
        <h3>
          Type: {item.style} | ${item.price}
        </h3>
        <p>Capacity: {item.capacity}L</p>
        <p>{item.description}</p>
        <img src={item.imgURL} alt={item.title} id='photo-gear-img' />
        <button className="add-to-wishlist" onClick={() => addToWishlist(item)}>Add</button>
      </div>
    ))}
  </div>
  )
}

export default PhotoGear;