import React, { useState } from 'react';

export default function WishlistButton(props) {

    // const [liked, setLiked] = useState(false)
    const outlinedHeart = <i class="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    // const filledHeart = <i class="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    
    return (
        <div>
        <button className='add-to-wishlist' onClick={() => props.toggle}>{outlinedHeart}</button>
        </div>
    );
}