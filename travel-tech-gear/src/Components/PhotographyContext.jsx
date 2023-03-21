import React, {useState, useEffect} from "react";
import axios from "axios";

const PhotographyContext = React.createContext();

function PhotographyContextProvider(props) {
  const [photoGear, setPhotoGear] = useState([]);

  useEffect(() => {
    axios.get('/api/photography')
      .then(res => setPhotoGear(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
   <PhotographyContext.Provider value={{ photoGear}}>
    {props.children}
   </PhotographyContext.Provider>
  )
}

export { PhotographyContext, PhotographyContextProvider}