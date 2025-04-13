import { Link } from "@tanstack/react-router"
import "../styles/navbar.css"
import { Cart } from "./cart-count"
import { Login } from "./login"

export const Navbar = () => {
  return (
    <div className="header-container">
      <ul className="navbar">
        <Link to="/" className="link">
          <li className="home">FakeStore</li>
        </Link>
      </ul>
      <Link to="/cart" className="link">
        <Cart />
      </Link>
      <Link to="/login" className="link">
        <Login />
      </Link>
    </div>
  )
}
