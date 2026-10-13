// src/App.jsx
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './pages/Homepage/Homepage'
import CreateProduct from './pages/CreateProduct/CreateProduct'
import ProductList from './pages/ProductList/ProductList'
import ProductDetails from './pages/ProductDetails/ProductDetails'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1>Hello world!</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/new-product" element={<CreateProduct />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
