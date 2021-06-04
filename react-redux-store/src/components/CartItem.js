import React from 'react'
import { useDispatch } from "react-redux"
import { selectProduct } from "../actions/single-product-actions"
import { Link } from "react-router-dom"

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
            <Link to="/products/:id">
                <button
                    className="details-button"
                    onClick={() => {
                        selectProduct(dispatch, props.product)
                    }}
                >Product Details</button>
            </Link>
        </div>
    )
}
