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
    const url = `https://api.unsplash.com/search/photos?page=10&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
      setLoading(false)
      setModal(!modal)
    })
    setSearchTerm(searchTerm)
  }

  const toggleModalState = (image) => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <NavBar handleSubmit={handleSubmit} />
      <Banner />
      {loading && null}
      {!loading && (
        <SearchModal
          // key={image.id}
          toggleModalState={toggleModalState}
          modal={modal}
          images={results}
          searchTerm={searchTerm}
        />
      )}
      <ImageList />
    </div>
  )
}

export default App
