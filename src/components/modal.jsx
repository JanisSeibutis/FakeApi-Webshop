import "../styles/modal.css"
// import "../styles/add-to-cart.css"
import { useProductsContext } from "../contexts/products-context"
import { AddToCart } from "./add-to-cart"

export const Modal = ({ product, closeModal }) => {
  const { products } = useProductsContext()

  if (!products || products.length === 0) {
    return null
  }

  return (
    <>
      <div className="backdrop" onClick={closeModal}></div>
      <div className="modal">
        <img className="selected-product-img" src={product.image} alt="" />
        <button className="close-modal-btn" onClick={closeModal}>
          x
        </button>
        <AddToCart product={product} />

        <p className="selected-product-description">{product.description}</p>
        <p className="selected-item-price"> {product.price} €</p>
      </div>
    </>
  )
}
