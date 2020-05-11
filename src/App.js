import React from "react"

import PhotoContextProvider from "./contexts/PhotoContext"
import { PhotoList } from "./components/PhotoList"
function App() {
  return (
    <div className="App">
      nothing
      <PhotoContextProvider>
        <PhotoList />
      </PhotoContextProvider>
    </div>
  )
}

export default App
