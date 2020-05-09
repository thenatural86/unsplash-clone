import React, { useState, useContext } from "react"
import { PhotoContext } from "../contexts/PhotoContext"

export const NavBar = () => {
  const { data } = useContext(PhotoContext)
  console.log(data)

  const [photo, setPhoto] = useState("")
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <form>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Search for an image"
        />
        <input type="submit" value="submit" />
      </form>
      <h1>Home</h1>
      <h1>Collections</h1>
      <h1>About</h1>
    </div>
  )
}
