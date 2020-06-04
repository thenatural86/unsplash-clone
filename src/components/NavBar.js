import React, { useState } from "react"
import black from "../images/black.png"
import { Link, useHistory } from "react-router-dom"
import GoogleLogin from "react-google-login"

export const NavBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("")
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit(searchTerm)
    setSearchTerm("")
    history.push("/search")
  }

  const responseGoogle = (response) => {
    console.log("Response:", response)
    console.log("Profile:", response.profileObj)
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
      <Link to="/">
        <p>My Lightning</p>
      </Link>
      <p>
        <GoogleLogin
          clientId="129970575780-3l324bbqjvrnmq7nhq7clho2grfmi6ut.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </p>
      {/* <p>Login</p> */}
    </div>
  )
}
