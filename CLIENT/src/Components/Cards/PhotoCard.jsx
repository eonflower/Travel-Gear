import React, { useContext, useState } from 'react';
import { PhotographyContext } from '../PhotographyContext';

export default function PhotoCard() {
    const { photoGear, handleAddToWishlist, setMessage } = useContext(PhotographyContext);
    const [liked, setLiked] = useState(false)
    const outlinedHeart = <i class="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i class="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    const [wishlist, setWishlist] = useState([]);

    const handleWishlist = (techGear) => {
        setMessage(`${techGear.name} added to your favorites!`);
        handleAddToWishlist(techGear);
        setWishlist((prevWishlist) => [...prevWishlist, techGear]);
    };

    const isItemInWishlist = (itemId) => {
        return wishlist.some((item) => item._id === itemId);
    };
    return (
        <>
        {photoGear.map((item) => (
            <div className='gear-page-item' key={item._id}>
            <img className='gear-img' src={item.imgURL} alt={item.title} id='photo-gear-img' />
            <h2 className='item-brand'>{item.brand}</h2>
            <h3 className='item-name'>{item.name}</h3>
            <h3 className='item-type'>
                Type: {item.style} | ${item.price}
            </h3>
            <h4 className='item-size'>Capacity: {item.capacity}L</h4>
            <p>{item.description}</p>
            <button className='add-to-wishlist' onClick={() => handleWishlist(item)}>
                {isItemInWishlist(item._id) ? filledHeart : outlinedHeart}
            </button>
            </div>
        ))}
        </>
    );
}