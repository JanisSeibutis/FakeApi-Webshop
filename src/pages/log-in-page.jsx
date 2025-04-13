import { useState } from "react"
import "../styles/login.css"
import { useUserContext } from "../contexts/user-context"

export const LoginPage = () => {
  const [username, setusername] = useState("")
  const [password, setPassword] = useState("")

  const { memberData, setMemberData, isLoggedIn, setisLoggedIn } =
    useUserContext()

  const submit = (event) => {
    event.preventDefault()

    if (username === "Janka" && password === "Laika") {
      fetch("https://fakestoreapi.com/users/1")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok!" + res.statusText)
          }
          return res.json()
        })
        .then((json) => {
          const userData = json

          setMemberData(userData)
          setisLoggedIn(true)

          return userData
        })
        .catch((error) => {
          console.log("Error fetching user data:" + error)
        })
    }
    setusername("")
    setPassword("")
  }
  // console.log(memberData)
  // console.log(isLoggedIn)

  const logOut = () => {
    setMemberData({})
    setisLoggedIn(false)
  }

  // console.log(isLoggedIn)
  return (
    <div>
      {!isLoggedIn && (
        <div className="login-wrap">
          <div>Login</div>
          <form onSubmit={submit}>
            <div className="login">
              <label htmlFor="username">Username </label>
              <input
                className="username"
                id="username"
                type="text"
                autoComplete="off"
                value={username}
                onChange={(event) => setusername(event.target.value)}
              />
              <label htmlFor="password">Your password</label>
              <input
                autoComplete="off"
                className="password"
                id="password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <button className="login-submit-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <h3>
            Logged in as: {memberData.name.firstname} {memberData.name.lastname}
          </h3>
          <button onClick={() => logOut()}>Log Out</button>
        </div>
      )}
    </div>
  )
}
