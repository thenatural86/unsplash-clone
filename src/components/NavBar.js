import React, { useState } from "react"
import black from "../images/black.png"
import { Link, useHistory } from "react-router-dom"

export const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(searchTerm)
    setSearchTerm("")
    history.push("/search")
  }

  return (
    <div className="navbar">
      <Link to="/">
        <img
          src={black}
          alt="black lightning 50/50"
          style={{ height: "2rem" }}
        />
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search free hi-resolution photos"
        />
      </form>
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <p>Home</p>
      </Link>
      <p>My Lightning</p>
      <p>Login</p>
    </div>
  )
}
