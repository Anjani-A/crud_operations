import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useLocation} from 'react-router-dom'
function Home() {
  const [data, setData] = useState([])
  const location = useLocation();
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])
  const handleDelete = (id) => {
    const confirm = window.confirm("would you like to Delete?");
    if(confirm) {
      axios.delete('https://jsonplaceholder.typicode.com/users/'+id)
      .then(res => {
        location.reload();
      }).catch(err => console.log(err));

    }
  }
  return (
    <div className = 'd-flex flex-column justify-content-center align-items-center bg-light vh-75'>
      <h1>List of Users</h1>
      <div className = 'w-100 rounded bg-white p-3'>
        <div className = 'd-flex justify-content-end'>
          <Link to = "/create" className='btn btn-success m-2'>Add +</Link>
        </div>
         <table className = 'table table-striped'>
          <thead>
            <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th> 
            <th>City</th>
            <th>Zipcode</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i)=>(
              <tr key = {i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.address.street}</td>
                <td>{d.address.city}</td>
                <td>{d.address.zipcode}</td>
                <td>{d.phone}</td>
                <td>{d.website}</td>
                <td>{d.company.name}</td>
                
                <td>
  
                  <Link to ={`/read/${d.id}`} className ='btn btn-sm btn-info me-2'>Read</Link>
                  <Link to = {`/update/${d.id}`} className ='btn btn-sm btn-primary me-2'>Edit</Link>
                  <button onClick = {e => handleDelete(d.id)} className ='btn btn-sm btn-danger m-2'>Delete</button>
                </td>
              
              </tr>
            ))}
          </tbody>
         </table>

    </div>
    </div>
  )

}

export default Home