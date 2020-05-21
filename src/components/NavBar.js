import React, { useState } from "react"
import black from "../images/black.png"

export const NavBar = (props) => {
  // console.log(props)
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log("1st submit")
    props.handleSubmit(searchTerm)
    setSearchTerm("")
  }

  return (
    <div className="navbar">
      <img src={black} alt="black lightning 50/50" style={{ height: "2rem" }} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search free hi-resolution photos"
        />
      </form>
      <p>Home</p>
      <p>Collections</p>
      <p>About</p>
    </div>
  )
}
