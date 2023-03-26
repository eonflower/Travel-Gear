import React, { useContext, useEffect, useState } from 'react';
import axios from "axios"
// import WishlistButton from './WishlistButton';
import { WishlistContext } from '../WishlistContext';
import { TechGearContext } from '../TechGearContext';
import { PhotographyContext } from '../PhotographyContext';

export default function WishlistCard() {
    const { techWishlist , setTechWishlist} = useContext(TechGearContext);
    const { photoWishlist, setPhotoWishlist } = useContext(PhotographyContext);

    const trash = <i className="fa-solid fa-trash"></i>

    const deleteTechItem = (itemId) => {
        axios.delete(`/api/wishlist/${itemId}`)
        .then(res => setTechWishlist(prevList => prevList.filter(item => item._id !== itemId)))
        .catch(err => console.log(err))
    }

    const deletePhotoItem = (itemId) => {
        axios.delete(`/api/wishlist/${itemId}`)
        .then(res => setPhotoWishlist(prevList => prevList.filter(item => item._id !== itemId)))
        .catch(err => console.log(err))
    }

    return (
        <>
          {techWishlist.length === 0 && photoWishlist.length === 0 && (
                <div className="no-items">Currently no items added to Wishlist</div>
            )}

        {techWishlist.map((item) => (
    <div className="wishlist-item" key={item._id}>
    <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
    <h2 className="item-brand">{item.brand}</h2>
    <h3 className="item-name">{item.name}</h3>
    <h3 className="item-type">
    ${item.price}
    </h3>
    <button className='remove-from-wishlist' onClick={() => deleteTechItem(item._id)}>
    {trash}
    </button>
    </div>
))}

{photoWishlist.map((item) => (
    <div className="wishlist-item" key={item._id}>
    <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
    <h2 className="item-brand">{item.brand}</h2>
    <h3 className="item-name">{item.name}</h3>
    <h3 className="item-type">
    ${item.price}
    </h3>
    <button className='remove-from-wishlist' onClick={() => deletePhotoItem(item._id)}>
    {trash}
    </button>
    </div>
))}
        </>
    );
}

