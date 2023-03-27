import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PhotographyDetails()  {
  const {id} = useParams()
  const [item, setItem] = useState(null);

  const getData = () => {
    axios.get(`/api/photography/${id}`)
    .then((res) => setItem(res.data))
    .catch(err => console.log(err))
  }
    
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      {item ? (
        <>
          <h2>{item.brand}</h2>
          <h2>{item.name}</h2>
          <img src={item.imgURL} alt={item.title} />
          <p>{item.description}</p>
          <p>{item.capacity}</p>
          <p>{item.price}</p>
         {/* add more item properties as needed you have a TON on your API 👏 */}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default PhotographyDetails;