import React, {useContext} from 'react'
import axios from "axios"
import WishlistButton from '../WishlistButton';
import { TechGearContext } from "../TechGearContext";
import { WishlistContext } from '../WishlistContext';

export default function TechCard() {
    const { techGear } = useContext(TechGearContext);
    const { addToWishlist } = useContext(WishlistContext)
    // console.log(techGear);

    // const addToWishlist = (newWishlistItem) => {
    //     axios.post("api/wishlist", newWishlistItem)
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    // };

    return (
    <>
    {techGear.map((item) => (
        <div className="gear-page-item" key={item._id}>
            <img className="gear-img" src={item.imgURL} alt={item.title} id='tech-gear-img' />
            <h2 className="item-brand">{item.brand}</h2>
            <h3 className="item-name">{item.name}</h3>
            <h3 className="item-type">
                Type: {item.style} | ${item.price}
            </h3>
            <h4 className="item-size">Capacity: {item.capacity}L</h4>
            <p>{item.description}</p>
            <WishlistButton 
                item={item}
                toggle={addToWishlist}/>
            </div>
        ))}
        </>
    )
    }
