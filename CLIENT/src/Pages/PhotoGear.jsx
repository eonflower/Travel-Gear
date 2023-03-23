import React, {useContext} from "react";
import { PhotographyContext } from "../Components/PhotographyContext";

function PhotoGear() {
  const { photoGear } = useContext(PhotographyContext);
  console.log(photoGear)

  return (
    <>
    <div className="camera">
    <h2 className="camera-text-top">Capture the moment. </h2>
    <h2 className="camera-text-bottom">Elevate your art with premium camera gear.</h2>
    </div>
    <div className='photogear'>
      
    {photoGear.map((item) => (
      <div className="gear-page-item" key={item._id}>
        <img className="gear-img" src={item.imgURL} alt={item.title} id='photo-gear-img' />
        <h2 className="item-brand">{item.brand}</h2>
        <h3 className="item-name">{item.name}</h3>
        <h3 className="item-type">
        {item.style} | ${item.price}
        </h3>
        <h4 className="item-size">{item.size}</h4>
        <p>{item.description}</p>
        <button className="add-to-wishlist" onClick={() => addToWishlist(item)}>Add</button>
      </div>
    ))}
  </div>
  </>
  )
}

export default PhotoGear;