import { createContext, useContext } from "react"

export const ProductContext = createContext({
  products: [],
  setProducts: () => {},
  filterArray: [],
  setFilterArray: () => {},
})

export const useProductsContext = () => useContext(ProductContext) // just a hook to simplify useContext, not needed thou.
