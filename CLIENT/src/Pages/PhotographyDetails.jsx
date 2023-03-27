import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PhotographyDetails()  {
  const {id} = useParams()
  console.log(id)
  const getData = () => {
    axios.get(`/api/photography/${id}`)
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
export default PhotographyDetails;