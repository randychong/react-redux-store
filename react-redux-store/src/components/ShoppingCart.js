import React from 'react'
import { useSelector } from "react-redux"
import CartItem from "../components/CartItem"

export default function ShoppingCart() {
    const cart = useSelector((state) => state.Cart)
    return (
        <div>
            <h1 className="cart-header">Your Cart</h1>
            <div className="shopping-cart">
                {cart.map((product) => (
                    <CartItem product={product} key={product.id}/>
                ))}
            </div>
        </div>
    )
}
