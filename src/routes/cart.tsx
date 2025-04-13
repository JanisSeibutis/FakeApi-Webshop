import { createFileRoute } from "@tanstack/react-router"
import { Cartpage } from "../pages/cart-page"
import React from "react"

export const Route = createFileRoute("/cart")({
  component: Cart,
})

function Cart() {
  return <Cartpage />
}
