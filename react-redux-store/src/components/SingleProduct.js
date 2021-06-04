import React from 'react'
import { useSelector } from "react-redux"
export default function SingleProduct() {
    const selectedProduct = useSelector(state => state.singleProduct)
    return (
        <div>
            <h1>Individual Product</h1>
            <p>{selectedProduct.name}</p>
            <p>{selectedProduct.description}</p>
        </div>
    )
}
