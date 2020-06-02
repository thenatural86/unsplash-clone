import React from "react"
import { ImageList } from "./ImageList"
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
