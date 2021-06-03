import React from 'react'
import { useDispatch } from "react-redux"
import { addToCart } from "../actions/cart-actions"

export default function Products(props) {
    const dispatch = useDispatch()

    return (
        <div className="product-card">
            <img src={props.product.image} className="product-image"></img>
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
            <p>{props.product.description}</p>
            <button
                onClick={() =>
                    addToCart(dispatch, props.product)
                }
            >Add to Cart</button>
        </div>
    )
}
