import React, { useState } from "react"
// import axios from "axios"
// import Modal from "./Modal"

export const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(searchTerm)
    setSearchTerm("")
  }

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search free hi-resolution images"
        />
        {/* <input type="submit" value="submit" /> */}
      </form>
      <p>Home</p>
      <p>Collections</p>
      <p>About</p>
    </div>
  )
}
