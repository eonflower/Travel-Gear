import React, { useContext } from 'react';
import axios from "axios"
// import WishlistButton from './WishlistButton';
import { WishlistContext } from '../WishlistContext';
import { TechGearContext } from '../TechGearContext';
import { PhotographyContext } from '../PhotographyContext';

export default function WishlistCard() {
    const { techWishlist } = useContext(TechGearContext);
    const { photoWishlist } = useContext(PhotographyContext);

    const trash = <i class="fa-solid fa-trash"></i>

    // const isTechItemInWishlist = (itemId) => {
    //     return techWishlist.some((item) => item._id === itemId);
    // };

    // const isPhotoItemInWishlist = (itemId) => {
    //     return techWishlist.some((item) => item._id === itemId);
    // };

    const deleteTechItem = (itemId) => {
        const techIndex = techWishlist.findIndex((item) => item._id === itemId);
        techWishlist.splice(techIndex, 1)
    };

    const deletePhotoItem = (itemId) => {
        const photoIndex = photoWishlist.findIndex((item) => item._id === itemId);
        photoWishlist.splice(photoIndex, 1)
    };

    return (
        <>
        {techWishlist.map((item) => (
    <div className="wishlist-item" key={item._id}>
    <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
    <h2 className="item-brand">{item.brand}</h2>
    <h3 className="item-name">{item.name}</h3>
    <h3 className="item-type">
    ${item.price}
    </h3>
    <button className='remove-from-wishlist' onClick={() => deleteTechItem(item)}>
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
    <button className='remove-from-wishlist' onClick={() => deletePhotoItem(item)}>
    {trash}
    </button>
    </div>
))}
        </>
    );
}





{/* <WishlistContext.Consumer>
            {(context) =>
            context.wishlist.length ? (
                {context.wishlist.map((item) => (
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
                            toggle={context.handleWishlistDelete(item._id)}/>
                        </div>
                    ))}
            ) : (
                <p>You have no wishlist</p>
            )}
        </WishlistContext.Consumer> */}