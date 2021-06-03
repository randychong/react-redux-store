import React from 'react'
import { useDispatch } from "react-redux"

export default function Products(props) {
    console.log(props)

    return (
        <div>
            <img src={props.product.image} className="product-image"></img>
            <p>{props.product.title}</p>
            <p>${props.product.price}</p>
            <p>{props.product.description}</p>
        </div>
    )
}
