import React, { useContext } from "react"
import { CakeContext } from "../contexts/CakeContext"
import { Cake } from "./Cake"

export const CakeList = () => {
  const { cakes } = useContext(CakeContext)
  console.log(cakes)

  return cakes.length ? (
    <div className="cake-list">
      <h1>Cake List</h1>
      <ul>
        {cakes.map((cake) => {
          return <Cake key={cake.id} {...cake} />
        })}
      </ul>
    </div>
  ) : (
    <div className="empty">Fresh out!</div>
  )
}
