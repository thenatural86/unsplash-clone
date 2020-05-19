import React, { useState } from "react"
// import axios from "axios"
// import Modal from "./Modal"
import black from "../images/black.png"

export const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(searchTerm)
    setSearchTerm("")
  }

  return (
    <div className="navbar">
      <img src={black} style={{ height: "2rem" }} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search free hi-resolution photos"
        />
        {/* <input type="submit" value="submit" /> */}
      </form>
      <p>Home</p>
      <p>Collections</p>
      <p>About</p>
    </div>
  )
}
