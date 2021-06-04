import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../actions/product-actions"
import ProductCard from "../components/ProductCard"
import ShoppingCart from "../components/ShoppingCart"
import SingleProduct from "../components/SingleProduct"

export default function ProductsPage() {
    const dispatch = useDispatch()
    const products = useSelector(state => state.Products)

    useEffect(() => {
        getProducts(dispatch)
    }, [])

    return (
        <div>
            <SingleProduct />
            <ShoppingCart />
            <h1>Products</h1>
            <div>{products.map((product) => (
                <ProductCard product={product} />
            ))}</div>
        </div>
    )
}
