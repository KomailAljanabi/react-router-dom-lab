import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
function CreateProduct() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        price: '',
        quantity: ''
    })
    const navigate = useNavigate()

    function handleChange(event) {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/products`, formData)

        navigate('/products')
    }
    return (
        <div>
            <h1>Create Product</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.title}
                    name="title"
                    id="title"
                />
                <br />
                <label htmlFor="description">Description: </label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.description}
                    name="description"
                    id="description"
                />
                <br />
                <label htmlFor="category">Category:</label>
                <input
                    type="text"
                    onChange={handleChange}
                    value={formData.category}
                    name="category"
                    id="category"
                />
                <br />
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    onChange={handleChange}
                    value={formData.price}
                    name="price"
                    id="price"
                />
                <br />
                <label htmlFor="quantity">Quantity: </label>
                <input
                    type="number"
                    onChange={handleChange}
                    value={formData.quantity}
                    name="quantity"
                    id="quantity"
                />
                <br />
                <button>Create Product</button>
            </form>
        </div>
    )
}
export default CreateProduct
