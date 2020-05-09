import React from "react"

export const Photo = ({ urls }) => {
  console.log(urls.small)
  const photo = urls.small
  return (
    <div className="photo">
      <img src={photo} alt="photo" />
    </div>
  )
}
