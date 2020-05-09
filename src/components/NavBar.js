import React, { useState, useContext } from "react"
import { PhotoContext } from "../contexts/PhotoContext"

export const NavBar = () => {
  const { data } = useContext(PhotoContext)
  // console.log(data)

  const [photo, setPhoto] = useState("")
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <form>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="Search free hi-resolution photos"
        />
        <input type="submit" value="submit" />
      </form>
      <p>Home</p>
      <p>Collections</p>
      <p>About</p>
    </div>
  )
}
