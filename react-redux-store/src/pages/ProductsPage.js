import React, { useEffect, useState } from 'react'
import Products from "../components/Products"
import ShoppingCart from "../components/ShoppingCart"

export default function ProductsPage() {
    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const json = await response.json()
        console.log(json)
    }
    return (
        <div>
            <h1>Products Page</h1>
            <Products />
            <ShoppingCart />
        </div>
    )
}
