import React from "react"
import { ImageList } from "./components/ImageList"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImageList />
    </div>
  )
}

export default App
