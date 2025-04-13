// @ts-nocheck

import { useContext, useState } from "react"
import { UserContext } from "../contexts/user-context"

export const UserProvider = ({ children }) => {
  const [memberData, setMemberData] = useState({})
  const [isLoggedIn, setisLoggedIn] = useState(() => {})

  return (
    <UserContext.Provider
      value={{ memberData, setMemberData, isLoggedIn, setisLoggedIn }}
    >
      {children}
    </UserContext.Provider>
  )
}
