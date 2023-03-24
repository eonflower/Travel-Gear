import React, {useContext} from "react";
import PhotoCard from "../Components/Cards/PhotoCard";

function PhotoGear() {

  return (
    <>
    <div className="camera">
    <h2 className="camera-text-top">Capture the moment. </h2>
    <h2 className="camera-text-bottom">Elevate your art with premium camera gear.</h2>
    </div>
    <div className='photogear'>
      <PhotoCard />
    </div>
  </>
  )
}

export default PhotoGear;