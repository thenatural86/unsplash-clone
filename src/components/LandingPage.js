import React from "react"
import { ImageList } from "./ImageList"
import { Banner } from "./Banner"

function LandingPage(props) {
  return (
    <div className="App">
      <Banner />
      <ImageList
        toggleLike={props.toggleLike}
        liked={props.liked}
        favHandler={props.favHandler}
      />
    </div>
  )
}

export default LandingPage
