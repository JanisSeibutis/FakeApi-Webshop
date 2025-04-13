// @ts-nocheck

import { useState } from "react"
import { useProductsContext } from "../contexts/products-context"
import { Modal } from "./modal"
import { AddToCart } from "./add-to-cart"
import "../styles/products.css"

export const Products = () => {
  const { filterArray, products } = useProductsContext()
  // const cachedProducts = localStorage.getItem("cachedProducts")
  // const parsedFromStorage = JSON.parse(cachedProducts)

  const [isModalOpen, setisModalOpen] = useState(false)
  const [selectedProduct, setselectedProduct] = useState(null)

  const openModal = (product) => {
    setselectedProduct(product)
    setisModalOpen(true)
  }

  const closeModal = () => {
    setisModalOpen(false)
    setselectedProduct(null)
  }

  const displayProducts = filterArray.length > 0 ? filterArray : products

  if (!products) {
    return <p>Loading...</p>
  }

  return (
    <div className="product-container">
      {displayProducts.map((product) => (
        <div key={product.id} className="product-div">
          <img
            className="product-img"
            src={product.image}
            alt={product.title}
            onClick={() => openModal(product)}
          />
          <AddToCart product={product} />
          <p className="product-title">{product.title} </p>

          <p className="product-title">{product.price} €</p>
        </div>
      ))}
      {isModalOpen && (
        <Modal product={selectedProduct} closeModal={closeModal} />
      )}
    </div>
  )
}
