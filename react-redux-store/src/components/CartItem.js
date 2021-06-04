import React from 'react'

export default function CartItem(props) {
    console.log(props)
    return (
        <div>
            <img
                src={props.product.image}
                className="cart-image"
                alt={props.product.title}
                ></img>
        </div>
    )
}
