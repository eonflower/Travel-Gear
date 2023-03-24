import React, { useContext } from 'react';
import WishlistButton from './WishlistButton';
import { WishlistContext } from './WishlistContext';

export default function WishlistCard() {
    const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext)

    // const removeFromWishlist = (item) => {
    //     // TODO: Implement adding item to wishlist functionality
    //     console.log('Removed from wishlist ', item);
    // };
    return (
        <>
        {wishlist.map((item) => (
        <div className="gear-page-item" key={item._id}>
            <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
            <h2 className="item-brand">{item.brand}</h2>
            <h3 className="item-name">{item.name}</h3>
            <h3 className="item-type">
            ${item.price}
            </h3>
            <WishlistButton 
                item={item}
                buttonText="remove"
                toggle={removeFromWishlist}/>
            </div>
        ))}
        </>
    );
}
