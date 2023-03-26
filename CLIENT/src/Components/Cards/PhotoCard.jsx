

import React, { useContext, useState } from 'react';
import { PhotographyContext } from '../PhotographyContext';
import axios from "axios"

export default function PhotoCard() {
    const { photoGear, photoWishlist, setPhotoWishlist, handleAddToWishlist} = useContext(PhotographyContext);
    const outlinedHeart = <i class="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i class="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    const [wishlist, setWishlist] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);
    const [likedItem, setLikedItem] = useState([])
    const [liked, setLiked] = useState(false)

    const handleWishlist = (photoGear) => {
        handleAddToWishlist(photoGear);
        setWishlist((prevWishlist) => [...prevWishlist, photoGear])
    };

    // const deletePhotoItem = (itemId) => {
    //     axios.delete(`/api/wishlist/${itemId}`)
    //     .then(res => setPhotoWishlist(prevList => prevList.filter(item => item._id !== itemId)))
    //     .catch(err => console.log(err))
    // }

    const isItemInWishlist = (itemId) => {
        return wishlist.some((item) => item._id === itemId);
    };

    

    const toggleExpandedItem = (itemId) => {
        if (expandedItems.includes(itemId)) {
        setExpandedItems((prev) => prev.filter((id) => id !== itemId));
        } else {
        setExpandedItems((prev) => [...prev, itemId]);
        }
    };

    const isItemExpanded = (itemId) => {
        return expandedItems.includes(itemId);
    };

    return (
        <>
            {photoGear.map((item) => (
                <div className='gear-page-item' key={item._id}>
                    <img className='gear-img' src={item.imgURL} alt={item.title} id='photo-gear-img' />
                    <h2 className='item-brand'>{item.brand}</h2>
                    <h3 className='item-name'>{item.name}</h3>
                    <h3 className='item-type'>
                    {item.style} | ${item.price}
                    </h3>
                    <h4 className='item-size'>{item.size}</h4>
                    <p className='item-description'>
                    {isItemExpanded(item._id)
                    ? item.description
                    : item.description.slice(0, 150)}
                    {item.description.length > 150 && (
                        <>{isItemExpanded(item._id) ? "" : "..."}
                        <br />
                    <button
                        className="read-more"
                        onClick={() => toggleExpandedItem(item._id)}
                    >
                        {isItemExpanded(item._id) ? 'read less' : 'read more'}
                    </button></>
                    )}
                    </p>
                    <button className='add-to-wishlist' onClick={() => {handleWishlist(item)}}>
                        {isItemInWishlist(item._id) ? filledHeart : outlinedHeart}
                    </button>
                </div>
            ))}
        </>
    ); 
}

