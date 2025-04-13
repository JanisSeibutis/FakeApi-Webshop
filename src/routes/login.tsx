import { createFileRoute } from "@tanstack/react-router"
import { LoginPage } from "../pages/log-in-page"
import React from "react"
import { UserProvider } from "../providers/user-provider"

export const Route = createFileRoute("/login")({
  component: () => {
    return <LoginPage />
  },
})
