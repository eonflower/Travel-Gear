import React, {useContext, useState} from 'react'
import WishlistButton from '../WishlistButton';
import {PhotographyContext} from "../PhotographyContext"
import { WishlistContext } from '../WishlistContext';

export default function PhotoCard() {
    const { photoGear } = useContext(PhotographyContext);
    // const { wishlist, addToWishlist } = useContext(WishlistContext)
    // console.log(photoGear)

    const addToWishlist = (newWishlistItem) => {
        axios.post("api/wishlist", newWishlistItem)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };


    return (
    <>
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
            <WishlistButton 
                item={item}
                buttonText="add to wishlist"
                toggle={addToWishlist}/>
            </div>
        ))}
        </>
    )
}
