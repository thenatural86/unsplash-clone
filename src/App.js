import React from "react"
// context
import { PhotoContextProvider } from "./contexts/PhotoContext"
// components
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"
import { PhotoList } from "./components/PhotoList"
import { Loader } from "./components/Loader"
// styled components

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <div className="App">
      <PhotoContextProvider>
        <NavBar />
        <Banner />
        <GlobalStyle />
        <PhotoList />
        <Loader />
      </PhotoContextProvider>
    </div>
  )
}

export default App
