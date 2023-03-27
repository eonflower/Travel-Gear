import React, { useContext, useState } from 'react';
import { PhotographyContext } from '../PhotographyContext';
import axios from "axios"
import {Link} from "react-router-dom"

export default function PhotoCard() {
    const { photoGear, setPhotoGear, photoWishlist, setPhotoWishlist, handleAddToWishlist} = useContext(PhotographyContext);
    const outlinedHeart = <i className="fa-regular fa-heart" style={{color: "#7E8BBA"}}></i>
    const filledHeart = <i className="fa-solid fa-heart" style={{color: "#7E8BBA"}}></i>
    const [wishlist, setWishlist] = useState([]);
    const [expandedItems, setExpandedItems] = useState([]);
    const [likedItem, setLikedItem] = useState([])
    const [liked, setLiked] = useState(false)
    const [searchPhotoGear, setSearchPhotoGear] = useState("");

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

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .get(`https://photography/search?type=${searchPhotoGear}`)
          .then((response) => {
            setPhotoGear(response.data.data);
          })
          .catch((error) => console.log(error));
      };
      
      const handleInputChange = (event) => {
        setSearchPhotoGear(event.target.value);
      };
      
      const filteredPhotoGear = searchPhotoGear
        ? photoGear.filter(
            (item) =>
              item.name
                ?.toString()
                .toLowerCase()
                .includes(searchPhotoGear.toLowerCase())
          )
        : photoGear;
    

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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <select
          name='search'
          placeholder='Search photo gear'
          value={searchPhotoGear}
          onChange={handleInputChange}>
            <option value=''>-- Choose Type of Photography Gear--</option>
            <option value=''>Get All Photography Gear</option>
            <option value='Camera'>Camera</option>
            <option value='Digital Camera'>Digital Camera</option>
            <option value='Mirrorless Camera with 12-60mm Lens'>Mirrorless Camera with 12-60mm Lens</option>
            <option value='Shoulder Bag'>Shoulder Bag</option>
            <option value='Mirrorless Mover 20'>Mirrorless Mover 20</option>
            <option value='Hard Utility Case'>Hard Utility Case</option>
            <option value='Sling Bag'>Sling Bag</option>
            <option value='Rolling Bag'>Rolling Bag</option>
            <option value='Contemporary Lens for Sony E'>Contemporary Lens for Sony E</option>
            <option value='Lens for Sony E'>Lens for Sony E</option>
            <option value='Canon EF-M'>Canon EF-M</option>
            <option value='Memory Card'>Memory Card</option>
            <option value='Memory Card Case'>Memory Card Case</option>
            <option value='Filter Kit'>Filter Kit</option>
            <option value='Wireless Remote Control'>Wireless Remote Control</option>
          </select>
        <button type='submit'>Search</button>
      </form>
      </div>
            {filteredPhotoGear.map((item) => (
                <div className='gear-page-item' key={item._id}>
                    <Link to={`/photography/${item._id}`}>
                    <img className='gear-img' src={item.imgURL} alt={item.title} id='photo-gear-img' />
                    </Link>
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

