import React, {useState, useEffect} from "react";
import axios from "axios";

const TechGearContext = React.createContext();

function TechGearContextProvider(props) {
  const [techGear, setTechGear] = useState([]);

  useEffect(() => {
    axios.get('/api/techGear')
      .then(res => setTechGear(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <TechGearContext.Provider value={{ techGear }}>
      {props.children}
    </TechGearContext.Provider>
  )
}

export { TechGearContext, TechGearContextProvider}