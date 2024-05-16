import React, { useEffect, useState } from 'react'
import "./admin.scss"

function Admin() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    getAllProducts()
  }, [])
  async function getAllProducts(){
    const res=await fetch("http://localhost:3000/menu/")
    const data=await res.json()
    setProducts(data)
  }
  async function deleteProduct(id){
    const res=await fetch("http://localhost:3000/menu/"+id,{method:"delete"})
    const data=await res.json()
    await getAllProducts()
    
  }
  
  return (
    <div style={{minHeight:"100vh",backgroundColor:"black"}} className='tablecontent'>

      <table >
        <thead>
  <tr>
    <th>Name</th>
    <th>Title</th>
    <th>Price</th>
    <th>Options</th>
  </tr>
  </thead>
  <tbody>
  {products.map((x=>(
    <tr>
    <td>{x.name}</td>
    <td>{x.title}</td>
    <td>{x.price}</td>
    <td><button onClick={()=>deleteProduct(x._id)}>delete</button>
    <button>update</button></td>
  </tr>
  )))}
  </tbody>
  </table>
      </div>

  )
}

export default Admin