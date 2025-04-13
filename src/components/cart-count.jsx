import { useEffect, useState } from "react"

export const Cart = () => {
  const [cartCount, setcartCount] = useState(0)

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || []
      if (cart) {
        let totalQuantity = cart.reduce(
          (acc, product) => acc + product.quantity,
          0
        )
        setcartCount(totalQuantity)
      }
    }

    updateCartCount()

    window.addEventListener("storage", updateCartCount)
    window.addEventListener("cartCountChanged", updateCartCount)

    return () => {
      window.removeEventListener("storage", updateCartCount)
      window.removeEventListener("cartCountChanged", updateCartCount)
    }
  }, [])

  return <p className="cart">🛒 Cart : {cartCount}</p>
}
