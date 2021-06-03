import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function ShoppingCart() {
    const cart = useSelector((state) => state.Cart)
    return (
        <div>
            <h1>Shopping Cart</h1>
            <p>{cart}</p>
        </div>
    )
}
