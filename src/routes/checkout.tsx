import { createFileRoute } from "@tanstack/react-router"
import { Checkout } from "../pages/checkout"
import React from "react"

export const Route = createFileRoute("/checkout")({
  component: () => {
    return <Checkout />
  },
})
