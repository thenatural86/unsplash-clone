import React, { useState } from "react"
import { ImageList } from "./ImageList"
import { NavBar } from "./NavBar"
import { Banner } from "./Banner"

// import SearchPage from "./SearchPage"

function LandingPage(props) {
  console.log(props)
  return (
    <div className="App">
      <Banner />
      <ImageList />
    </div>
  )
}

export default LandingPage
