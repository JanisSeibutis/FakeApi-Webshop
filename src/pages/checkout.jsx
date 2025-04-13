import { useState } from "react"
import { useUserContext } from "../contexts/user-context"
import "../styles/checkout.css"

export const Checkout = () => {
  const { memberData, isLoggedIn } = useUserContext()

  const [firstname, setfirstname] = useState(
    isLoggedIn ? memberData.name.firstname : ""
  )

  const [lastname, setlastname] = useState(
    isLoggedIn ? memberData.name.lastname : ""
  )

  const [street, setstreet] = useState(
    isLoggedIn
      ? `${memberData.address.street} ${memberData.address.number}`
      : ""
  )

  const [city, setcity] = useState(isLoggedIn ? memberData.address.city : "")

  const [zipcode, setzipcode] = useState(
    isLoggedIn ? memberData.address.zipcode : ""
  )

  const [country, setcountry] = useState(isLoggedIn ? "USA" : "")

  const [phone, setphone] = useState(isLoggedIn ? memberData.phone : "")

  const [cartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || []
  })

  const totalCartPrice = cartItems
    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    .toFixed(2)

  const handleChange = (setFunc) => (e) => {
    setFunc(e.target.value)
  }

  const streetWithNumber = `${street}`
  const shippingcost = 10

  return (
    <div className="checkout">
      <aside className="order-summary">
        <h2>Order Summary</h2>
        <h3>Merchandise: {totalCartPrice} €</h3>
        <h3>Shipping: {shippingcost} €</h3>
        <h2 style={{ fontWeight: "bold" }}>
          Order Total: {parseFloat(totalCartPrice) + shippingcost} €
        </h2>
      </aside>

      <div className="user-field">
        <div>
          <input
            type="text"
            placeholder="First Name"
            name="name"
            id="name"
            value={firstname}
            onChange={handleChange(setfirstname)}
          />
          <label htmlFor="name"></label>

          <input
            type="text"
            placeholder="Last Name"
            name="lastname"
            id="lastname"
            value={lastname}
            onChange={handleChange(setlastname)}
          />
          <label htmlFor="lastname"></label>
        </div>

        <input
          type="text"
          placeholder="Street"
          name="street"
          id="street"
          value={streetWithNumber}
          onChange={handleChange(setstreet)}
        />
        <label htmlFor="street"></label>

        <input
          type="text"
          name="city"
          id="city"
          placeholder="City"
          value={city}
          onChange={handleChange(setcity)}
        />
        <label htmlFor="city"></label>

        <input
          type="text"
          placeholder="Zip Code"
          name="zipcode"
          id="zipcode"
          value={zipcode}
          onChange={handleChange(setzipcode)}
        />
        <label htmlFor="zipcode"></label>

        <input
          type="text"
          placeholder="Country"
          name="country"
          id="country"
          value={country}
          onChange={handleChange(setcountry)}
        />
        <label htmlFor="country"></label>

        <input
          type="text"
          placeholder="Phone"
          name="phone"
          id="phone"
          value={phone}
          onChange={handleChange(setphone)}
        />
        <label htmlFor="phone"></label>
      </div>
    </div>
  )
}
