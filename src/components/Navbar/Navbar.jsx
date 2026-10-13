import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to='/'>Home</Link> &nbsp;
      <Link to='/products'>Product List</Link> &nbsp;
      <Link to='/new-product'>Create a Product</Link>
    </div> 
  )
}

export default Navbar
