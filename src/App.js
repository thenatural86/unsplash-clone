import React from "react"

import { PhotoContextProvider } from "./contexts/PhotoContext"
// import { PhotoForm } from "./components/PhotoForm"
// import { ExampleApi } from "./components/ExampleApi"
import { NavBar } from "./components/NavBar"
function App() {
  return (
    <div className="App">
      <PhotoContextProvider>
        {/* <PhotoForm /> */}
        {/* <ExampleApi /> */}
        <NavBar />
      </PhotoContextProvider>
    </div>
  )
}

export default App
