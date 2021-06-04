import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { addToCart } from "../actions/cart-actions"

export default function SingleProduct() {
    const selectedProduct = useSelector(state => state.singleProduct)
    const dispatch = useDispatch()
    return (
        <div className="single-product-card">
            <img
                src={selectedProduct.image} className="single-product-image"
                alt={selectedProduct.title}
                ></img>
            <p>{selectedProduct.title}</p>
            <p>${selectedProduct.price}</p>
            <p className="single-product-info">{selectedProduct.description}</p>
            <button
                className="add-button"
                onClick={() =>
                    addToCart(dispatch, selectedProduct)
                }
            >Add to Cart</button>
        </div>
    )
}
