import React from 'react'
import { useDispatch } from "react-redux"
import { selectProduct } from "../actions/single-product-actions"
import { Link } from "react-router-dom"
import { removeFromCart } from "../actions/cart-actions"

export default function CartItem(props) {
    const dispatch = useDispatch()
    return (
        <div className="cart-item-card">
            <img
                src={props.product.image}
                className="cart-image"
                alt={props.product.title}
                ></img>
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
            <button
                className="remove-button"
                onClick={() => 
                    removeFromCart(dispatch, props.product.id)
                }
            >Remove Item from Cart</button>
        </div>
    )
}
