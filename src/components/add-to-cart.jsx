import { useState } from "react"
import "../styles/add-to-cart.css"

export const AddToCart = ({ product }) => {
  const [cartCount, setCartCount] = useState(0)

  const decreaseCartCount = () => {
    if (cartCount === 0) {
      return
    }
    setCartCount(cartCount - 1)
  }

  const sendToCart = () => {
    if (cartCount === 0) {
      return
    }
    const updatedProduct = { ...product, quantity: cartCount }
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    let existingProduct = cart.findIndex(
      (item) => item.id === updatedProduct.id
    )
    if (existingProduct >= 0) {
      cart[existingProduct].quantity += cartCount
    } else {
      cart.push(updatedProduct)
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    window.dispatchEvent(new Event("storage"))
    setCartCount(0)
  }

  return (
    <div className="change-amount">
      <button className="decrease-btn" onClick={() => decreaseCartCount()}>
        -
      </button>
      <p className="cart-count">{cartCount}</p>
      <button
        className="increase-btn"
        onClick={() => setCartCount(cartCount + 1)}
      >
        +
      </button>
      <button className="add-to-cart" onClick={() => sendToCart()}>
        Add to Cart
      </button>
    </div>
  )
}
