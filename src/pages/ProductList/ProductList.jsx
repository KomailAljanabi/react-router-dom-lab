import React from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'


function ProductList() {
    const [Products, SetProducts] = useState([])

    async function getProducts(){
    const productsCall = await axios.get(`${import.meta.env.VITE_API_URL}/products`)
    console.log(productsCall)
    SetProducts(productsCall.data)
    }

    useEffect(() => {getProducts()} ,[])

  return (
    <div>
      {Products.map(P =>
        <div key={P._id}>
            <h3>Title: {P.title}</h3>
            <Link to={`/products/${P._id}`}>Check Details</Link>
        </div>
      )}
    </div>
  )
}

export default ProductList
