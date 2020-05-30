import React, { useState } from "react"
import black from "../images/black.png"
import { useHistory } from "react-router-dom"

export const NavBar = (props) => {
  console.log(props)
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
      <p>My Lightning</p>
      <p>Login</p>
    </div>
  )
}
