// @ts-nocheck

import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import React from "react"
import { Navbar } from "../components/navbar"
import { UserProvider } from "../providers/user-provider"

export const Route = createRootRoute({
  component: () => (
    <>
      <UserProvider>
        <header style={{ position: "relative", marginBottom: "100px" }}>
          <Navbar />
        </header>
        <Outlet />
        <TanStackRouterDevtools />
      </UserProvider>
    </>
  ),
})
