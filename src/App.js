import React from "react"
import { PhotoContextProvider } from "./contexts/PhotoContext"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { PhotoList } from "./components/PhotoList"
function App() {
  return (
    <div className="App">
      <PhotoContextProvider>
        <NavBar />
        <Banner />
        <PhotoList />
      </PhotoContextProvider>
    </div>
  )
}

export default App
