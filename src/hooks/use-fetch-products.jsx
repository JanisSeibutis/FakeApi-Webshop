// @ts-nocheck

import { useEffect, useState } from "react"

export const useFetchProducts = () => {
  const productUrl = "https://fakestoreapi.com/products"

  const [products, setProducts] = useState(() => {
    const cachedProducts = localStorage.getItem("cachedProducts")
    return cachedProducts ? JSON.parse(cachedProducts) : []
  })

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(productUrl)
        if (!response.ok) {
          throw new Error("Failed to fetch products")
        } else {
          const productsData = await response.json()
          setProducts(productsData)
          localStorage.setItem("cachedProducts", JSON.stringify(productsData))
        }
      } catch (error) {
        console.error("Something went wrong", error)
      }
    }

    if (products.length === 0) {
      fetchProducts()
    }
  }, [productUrl, products.length])

  return products
}
