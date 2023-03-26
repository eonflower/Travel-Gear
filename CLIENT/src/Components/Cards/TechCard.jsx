import React, { useContext, useState } from 'react';
import axios from "axios"
import { TechGearContext } from '../TechGearContext';

export default function TechCard() {
    const { techGear, setTechGear, handleAddToWishlist, setLiked, liked} = useContext(TechGearContext);
    const outlinedHeart = <i class="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i class="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    const [wishlist, setWishlist] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);

    const handleWishlist = (techGear) => {
        handleAddToWishlist(techGear);
        setWishlist((prevWishlist) => [...prevWishlist, techGear]);
    };

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
        {techGear.map((item) => (
            <div className='gear-page-item' key={item._id}>
            <img className='gear-img' src={item.imgURL} alt={item.title} id='tech-gear-img' />
            <h2 className='item-brand'>{item.brand}</h2>
            <h3 className='item-name'>{item.name}</h3>
            <h3 className='item-type'>
                Type: {item.style} | ${item.price}
            </h3>
            <h4 className='item-size'>Capacity: {item.capacity}L</h4>
            <p className='item-description'>
                    {isItemExpanded(item._id)
                    ? item.description
                    : item.description.slice(0, 150) }
                    {item.description.length > 150 && (
                        <>...
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