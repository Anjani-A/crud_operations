import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Link } from 'react-router-dom'
function Read() {
    const [data, setData] = useState([])
    const { id } = useParams();
  
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [id]);
  return (
    <div className = 'd-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className = 'w-50 border bg-white shadow px-5 pt-3 pb -5 rounded'>
        <h3>Details of User</h3>
        <div className = 'mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Username: {data.username}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Address: {data.address?.street}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>City: {data.address?.city}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Zipcode: {data.address?.zipcode}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Phone: {data.phone}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>Website: {data.website}</strong>
        </div>
        <div className = 'mb-2'>
          <strong>CompanyName: {data.company?.name}</strong>
        </div>
  
        <Link to ={`/update/${id}`} className ='btn btn-success m-3'>Edit</Link>
        <Link to ="/" className = 'btn btn-primary m-3'>Back</Link>
      
    </div>
    </div>
  );
}

export default Read
