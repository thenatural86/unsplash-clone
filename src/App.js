import React, { useState } from "react"
import { ImageList } from "./components/ImageList"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"

import axios from "axios"
import SearchModal from "./components/SearchModal"

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(false)
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const [loading, setLoading] = useState(true)

  const handleSubmit = (searchTerm) => {
    console.log(searchTerm)
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      console.log(resp.data)
      setResults(resp.data.results)
      setClientId()
      setLoading(false)
      setModal(!modal)
    })
    setSearchTerm(searchTerm)
    // console.log("2nd submit")
  }

  const toggleModalState = (image) => {
    setModal(!modal)
    console.log("toggling modal state", image, modal)
  }
  console.log("loading:", loading, "modal:", modal, "results:", results)
  return (
    <div className="App">
      <NavBar handleSubmit={handleSubmit} />
      <Banner />
      {loading && null}
      {!loading &&
        results.map((image) => {
          return (
            <SearchModal
              toggleModalState={toggleModalState}
              modal={modal}
              image={image}
              searchTerm={searchTerm}
            />
          )
        })}
      <ImageList />
    </div>
  )
}

export default App
