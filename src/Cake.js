import React from "react"

export const Cake = ({ name, image, id }) => {
  console.log(name, image, id)
  return (
    <div className="cake">
      <li>{name}</li>
      <img src={image} />
    </div>
  )
}
