import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function TechGearDetails()  {
  const {id} = useParams()
  console.log(id)
  const getData = () => {
    axios.get(`/api/techGear/${id}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
    
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>{id}
   
    </div>
  )
}
export default TechGearDetails;