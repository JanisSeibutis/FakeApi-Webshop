// @ts-nocheck

import { useEffect, useState } from "react"
import { ProductContext } from "../contexts/products-context"
import { useFetchProducts } from "../hooks/use-fetch-products"

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [filterArray, setFilterArray] = useState([])

  const fetchedProducts = useFetchProducts()

  useEffect(() => {
    setProducts(fetchedProducts), setFilterArray(products)
  }, [])

  return (
    <ProductContext.Provider
      value={{ products, setProducts, filterArray, setFilterArray }}
    >
      {children}
    </ProductContext.Provider>
  )
}
