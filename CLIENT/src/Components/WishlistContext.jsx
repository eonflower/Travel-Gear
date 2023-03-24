import React, {useState, useEffect} from "react";
import axios from "axios";

const WishlistContext = React.createContext();

function WishlistContextProvider(props) {
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        axios.get('/api/wishlist')
        .then(res => setWishlist(res.data))
        .catch(err => console.log(err))
    }, []);


    const addToWishlist = (newWishlistItem) => {
        axios.post("api/wishlist", newWishlistItem)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    const removeFromWishlist = (wishlistItem) => {
        axios.delete(`/api/wishlist/${wishlistItem}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <WishlistContext.Provider value={{ wishlist, setWishlist }}>
        {props.children}
        </WishlistContext.Provider>
    )
}

export { WishlistContext, WishlistContextProvider}