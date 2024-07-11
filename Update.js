import React from 'react'
import axios from 'axios'
import { useState , useEffect } from 'react'
import { Link , useNavigate, useParams} from 'react-router-dom'


function Update() {
  // const [data, setData] = useState([])
  const { id } = useParams()
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
  
  useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => {
        const userData = res.data
        setValues({
          name: userData.name,
          username: userData.username,
          email: userData.email,
          address: userData.address.street + ', ' + userData.address.suite,
          city: userData.address.city,
          zipcode: userData.address.zipcode,
          phone: userData.phone,
          website: userData.website,
          companyname: userData.company.name
        })

      })
      .catch(err => console.log(err))
  }, [id])
  const handleUpdate = (event) => {
    event.preventDefault();
    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, values)
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err))
  
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }


  return (
    
<div className = 'd-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className = 'w-50 border bg-white shadow px-5 pt-3 pb -5 rounded'>
         <h1>Update User</h1>
         <form onSubmit ={handleUpdate}>
          <div className = 'mb-2'>
            <label htmlFor = "name">Name:</label>
            <input type = "text" name = 'name' className = 'form-control' placeholder = 'Enter Name'
             value={values.name}  onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Username:</label>
            <input type = "text" name = 'username' className = 'form-control' placeholder = 'Enter Username'
            value={values.username}  onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Email:</label>
            <input type = "email" name = 'email' className = 'form-control' placeholder = 'Enter Email'
            value={values.email}  onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Address:</label>
            <input type = "text" name = 'address' className = 'form-control' placeholder = 'Enter address'
           value={values.address} onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">City:</label>
            <input type = "text" name = 'city' className = 'form-control' placeholder = 'Enter city'
           value={values.city} onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Zipcode:</label>
            <input type = "text" name = 'zipcode' className = 'form-control' placeholder = 'Enter zipcode'
           value={values.zipcode} onChange={handleChange}/>
          </div>
          <div className = 'mb-3'>
            <label htmlFor = "email">Phone:</label>
            <input type = "tel" name = 'phone' className = 'form-control' placeholder = 'Enter Phone'
           value={values.phone}  onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Website:</label>
            <input type = "text" name = 'website' className = 'form-control' placeholder = 'Enter website'
            value={values.website} onChange={handleChange}/>
          </div>
          <div className = 'mb-2'>
            <label htmlFor = "email">Comapany Name:</label>
            <input type = "text" name = 'Companyname' className = 'form-control' placeholder = 'Enter companyname'
            value = {values.companyname}onChange={handleChange}/>
          </div>
          <button className='btn btn-success m-2'>Update</button>
          <Link to="/" className = 'btn btn-primary m-2'>Back</Link>
         </form>
      </div>
      
    </div>
  )
}

export default Update
