import React from "react"
import { ImageList } from "./components/ImageList"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import Modal from "./components/Modal"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <ImageList />
      <Modal />
    </div>
  )
}

export default App
