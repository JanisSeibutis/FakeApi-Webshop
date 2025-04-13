import { createLazyFileRoute } from "@tanstack/react-router"
import React from "react"
import "../styles/App.css"
import { Products } from "../components/products"
import { Navbar } from "../components/navbar"
import { Aside } from "../components/aside"
import { ProductsProvider } from "../providers/products-provider"

export const Route = createLazyFileRoute("/")({
  component: Index,
})

function Index() {
  return (
    <div>
      <main className="container">
        <ProductsProvider>
          <Aside />
          <Products />
        </ProductsProvider>
      </main>
    </div>
  )
}
