import "../styles/aside.css"

import { useProductsContext } from "../contexts/products-context"

export const Aside = () => {
  const { setFilterArray, products } = useProductsContext()

  const handleFilter = (category) => {
    const filteredProducts = products.filter(
      (product) => product.category === category
    )
    setFilterArray(filteredProducts)
  }

  return (
    <aside>
      <ul className="aside-list">
        <li onClick={() => setFilterArray(products)}>All Products</li>
        <li onClick={() => handleFilter("men's clothing")}>Mens Clothing</li>
        <li onClick={() => handleFilter("women's clothing")}>
          Womens Clothing
        </li>
        <li onClick={() => handleFilter("jewelery")}>Jewelry</li>
        <li onClick={() => handleFilter("electronics")}>Electronic items</li>
      </ul>
    </aside>
  )
}
