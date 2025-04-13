import { useEffect, useState } from "react"
import "../styles/cart.css"
import { Link } from "@tanstack/react-router"

export const Cartpage = () => {
  const [cartCount, setcartCount] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })

  const addToCart = (item) => {
    const updatedCart = cartCount.map((cartItem) => {
      if (cartItem.id === item.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        }
      }

      return cartItem
    })

    setcartCount(updatedCart)
  }

  const subtractFromCart = (item) => {
    const updatedCart = cartCount.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity !== 0) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      }

      return cartItem
    })

    setcartCount(updatedCart)
  }

  const removeItem = (item) => {
    const updatedCart = cartCount.filter(
      (itemToBeRemoved) => itemToBeRemoved !== item
    )
    setcartCount(updatedCart)
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCount))
    const storageChangeEvent = new Event("cartCountChanged")
    window.dispatchEvent(storageChangeEvent)
  }, [cartCount])

  return (
    <div className="cart-wrap">
      <Link to="/checkout" className="link">
        <button>Checkout</button>
      </Link>
      {cartCount.map((item) => (
        <div key={item.id}>
          <div className="cart-item">
            <h3 className="item-title">{item.title}</h3>
            <img className="cart-img" src={item.image} alt="" />
            <h4 className="item-quantity"> X {item.quantity}</h4>
            <h4 className="item-total-price">
              Total price: {(item.price * item.quantity).toFixed(2)} €
            </h4>
            <div className="btn-div">
              <button
                className="decrease-cart-btn"
                onClick={() => subtractFromCart(item)}
              >
                -
              </button>
              <button
                className="increase-cart-btn"
                onClick={() => addToCart(item)}
              >
                +
              </button>
              <button
                className="remove-from-cart"
                onClick={() => removeItem(item)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
      <h2>
        {`Total: ${cartCount.reduce((acc, curr) => acc + curr.price * curr.quantity, 0).toFixed(2)} €`}
      </h2>
    </div>
  )
}
