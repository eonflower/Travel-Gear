import React, {useState, useEffect} from "react";
import axios from "axios";

const PhotographyContext = React.createContext();

function PhotographyContextProvider(props) {
  const [photoGear, setPhotoGear] = useState([]);
  const [photoWishlist, setPhotoWishlist] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/photography')
      .then(res => setPhotoGear(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleAddToWishlist = (item) => {
    setPhotoWishlist([...photoWishlist, item]);
  };


  return (
    <PhotographyContext.Provider value={{ photoGear, photoWishlist, handleAddToWishlist, message, setMessage}}>
      {props.children}
    </PhotographyContext.Provider>
  )
}

export { PhotographyContext, PhotographyContextProvider}