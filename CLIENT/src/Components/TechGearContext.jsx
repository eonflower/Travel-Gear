import React, { useState, useEffect } from "react";
import axios from "axios";

const TechGearContext = React.createContext();

function TechGearContextProvider(props) {
  const [techGear, setTechGear] = useState([]);
  const [techWishlist, setTechWishlist] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/techGear')
      .then(res => setTechGear(res.data))
      .catch(err => console.log(err))
  }, []);

  const handleAddToWishlist = (item) => {
    setTechWishlist([...techWishlist, item]);
  };

  return (
    <TechGearContext.Provider value={{ techGear, techWishlist, handleAddToWishlist, message, setMessage }}>
      {props.children}
    </TechGearContext.Provider>
  );
}

export { TechGearContext, TechGearContextProvider };