import React, { useState, useContext } from 'react';
import { TechGearContext } from './TechGearContext';
import { PhotographyContext} from "./PhotographyContext"

export default function WishlistButton(props) {
    const { techGear, addTechToWishlist, setTechMessage, techMessage } = useContext(TechGearContext);
    const { photoGear, addPhotoToWishlist, setPhotoMessage, photoMessage } = useContext(PhotographyContext);
    const [liked, setLiked] = useState(false)
    const outlinedHeart = <i class="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i class="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>

    const handleTechWishlist = (techGear) => {
        addTechToWishlist(techGear);
        setTechMessage(`${techGear.brand} ${techGear.name} added to your wishlist!`)
        alert(techMessage);
    };

    const handlePhotoWishlist = (photoGear) => {
        addPhotoToWishlist(photoGear);
        setPhotoMessage(`${photoGear.brand} ${photoGear.name} added to your wishlist!`);
        alert(photoMessage);
    };


    const handleClick = () => {
        props.toggle(props.item); // call toggle function with item as parameter
        setLiked(!liked); // toggle liked state
    }
    
    return (
        <div>
        <button className='add-to-wishlist' onClick={() => {handleClick, handleTechWishlist(props.item), handlePhotoWishlist(props.item)}}>
            {liked ? filledHeart : outlinedHeart}
        </button>
        </div>
    );
}

