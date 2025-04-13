import { useContext, createContext } from "react"

export const UserContext = createContext({
  memberData: {},
  setMemberData: () => {},
  isLoggedIn: false,
  setisLoggedIn: () => {},
})

export const useUserContext = () => useContext(UserContext)
