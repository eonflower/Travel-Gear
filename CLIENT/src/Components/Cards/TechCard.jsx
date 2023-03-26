import React, { useContext, useState } from "react";
import axios from "axios";
import { TechGearContext } from "../TechGearContext";

export default function TechCard() {
  const { techGear, setTechGear, handleAddToWishlist, setLiked, liked } =
    useContext(TechGearContext);
  const outlinedHeart = (
    <i class='fa-regular fa-heart' style={{ color: "#7E8BBA" }}></i>
  );
  const filledHeart = (
    <i class='fa-solid fa-heart' style={{ color: "#7E8BBA" }}></i>
  );
  const [wishlist, setWishlist] = useState([]);
  const [expandedItems, setExpandedItems] = useState([]);
  const [searchTechGear, setSearchTechGear] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios;
    axios
      .get(`https://techGear/search?type=${searchTechGear}`)
      .then((response) => {
        setTechGear(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleInputChange = (event) => {
    const capitalizedSearchTerm = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1).toLowerCase();
    setSearchTechGear(capitalizedSearchTerm);
  };
  
  const filteredTechGear = searchTechGear
  ? techGear.filter(
      (item) =>
        item.name
          ?.toString()
          .toLowerCase()
          .includes(searchTechGear.toLowerCase()) ||
        item.type
          ?.toString()
          .toLowerCase()
          .includes(searchTechGear.toLowerCase())
    )
  : techGear;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='Search tech gear'
          value={searchTechGear}
          onChange={handleInputChange}
        />
        <button type='submit'>Search</button>
      </form>
      {filteredTechGear.map((item) => (
        <div className='gear-page-item' key={item._id}>
          <img
            className='gear-img'
            src={item.imgURL}
            alt={item.title}
            id='tech-gear-img'
          />
          <h2 className='item-brand'>{item.brand}</h2>
          <h3 className='item-name'>{item.name}</h3>
          <h3 className='item-type'>
            Type: {item.style} | ${item.price}
          </h3>
          <h4 className='item-size'>Capacity: {item.capacity}L</h4>
          <p className='item-description'>
            {isItemExpanded(item._id)
              ? item.description
              : item.description.slice(0, 150)}
            {item.description.length > 150 && (
              <>
                {isItemExpanded(item._id) ? "" : "..."}
                <br />
                <button
                  className='read-more'
                  onClick={() => toggleExpandedItem(item._id)}
                >
                  {isItemExpanded(item._id) ? "read less" : "read more"}
                </button>
              </>
            )}
          </p>
          <button
            className='add-to-wishlist'
            onClick={() => {
              handleWishlist(item);
            }}
          >
            {isItemInWishlist(item._id) ? filledHeart : outlinedHeart}
          </button>
        </div>
      ))}
    </>
  );
}
