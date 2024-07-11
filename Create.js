import React from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Create() {
  const [values, setValues] = useState({
    name : '',
    username: '',
    email: '',
    address: '',
    city: '',
    zipcode: '',
    phone: '',
    website: '',
    companyname: ''

  })
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/users', values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
  }
  return (
    <div className = 'd-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className = 'w-50 border bg-white shadow px-5 pt-3 pb -5 rounded'>
         <h1>Add a User</h1>
         <form onSubmit = {handleSubmit}>
          <div className = 'mb-2'>
            <label htmlFor = "name">Name:</label>
            <input type = "text" name = 'name' className = 'form-control' placeholder = 'Enter Name'
            onChange = {e => setValues({...values, name: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Username:</label>
            <input type = "text" name = 'username' className = 'form-control' placeholder = 'Enter Username'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Email:</label>
            <input type = "email" name = 'email' className = 'form-control' placeholder = 'Enter Email'
            onChange = {e => setValues({...values, email: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Address:</label>
            <input type = "text" name = 'address' className = 'form-control' placeholder = 'Enter address'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">City:</label>
            <input type = "text" name = 'city' className = 'form-control' placeholder = 'Enter city'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Zipcode:</label>
            <input type = "text" name = 'zipcode' className = 'form-control' placeholder = 'Enter zipcode'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Phone:</label>
            <input type = "tel" name = 'phone' className = 'form-control' placeholder = 'Enter phone'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Website:</label>
            <input type = "text" name = 'website' className = 'form-control' placeholder = 'Enter website'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">ComapanyName:</label>
            <input type = "text" name = 'Companyname' className = 'form-control' placeholder = 'Enter companyname'
            onChange = {e => setValues({...values, phone: e.target.values})}/>
          </div>
          <button className='btn btn-success m-2'>Submit</button>
          <Link to="/" className = 'btn btn-primary m-2'>Back</Link>
         </form>
      </div>
      
    </div>
  )
}

export default Create
