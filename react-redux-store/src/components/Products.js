import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Products() {
    const product = useSelector((state) => state.Products)

    return (
        <div>
            <h1>Products</h1>
            <p>{product}</p>
        </div>
    )
}
