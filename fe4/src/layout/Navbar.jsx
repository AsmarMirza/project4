import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.scss"
function Navbar() {
  return (
    <div className="navbarBox">
        <h1>Pulse.</h1>
        <ul className='navUl'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/admin"}>Admin</Link></li>
            <li><Link to={"/basket"}>Basket</Link></li>
            <li><Link to={"/add"}>Add</Link></li>
            <li>Contact</li>
        </ul>
        <div><i className="fa-solid fa-bars"></i></div>
      
        <div className='navRight'>
            <p>Reservations</p>
            <p > <i className="fa-solid fa-phone"></i> 652-345 3222 11</p>
        </div>
    </div>
  )
}

export default Navbar