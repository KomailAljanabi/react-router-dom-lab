import React from 'react'
import axios from 'axios'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

function ProductDetails() {
    const {productId} = useParams()
    const [product, SetProduct] = useState({})
    async function getProduct(){
    const productCall = await axios.get(`${import.meta.env.VITE_API_URL}/products/${productId}`)
    SetProduct(productCall.data)
        console.log(productCall.data)
    }

    useEffect(() => {getProduct()} ,[])

  return (
    <div>
      <h1>Product Details</h1>
      <p>Title: {product.title}</p>
      <p>Description: {product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <br />
      <Link to='/products'>Return</Link>
    </div>
  )
}

export default ProductDetails