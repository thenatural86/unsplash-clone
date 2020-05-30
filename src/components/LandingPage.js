import React, { useState } from "react"
import { ImageList } from "./ImageList"
import { NavBar } from "./NavBar"
import { Banner } from "./Banner"

import axios from "axios"
// import SearchPage from "./SearchPage"
import { useHistory } from "react-router-dom"

function LandingPage(props) {
  console.log(props)
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const [modal, setModal] = useState(false)
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const [loading, setLoading] = useState(true)
  const history = useHistory()

  // const handleSubmit = (searchTerm) => {
  //   const url = `https://api.unsplash.com/search/photos?page=10&query=${searchTerm}&client_id=${clientId}`
  //   axios.get(url).then((resp) => {
  //     setResults(resp.data.results)
  //     setClientId()
  //     // setLoading(false)
  //     // setModal(!modal)
  //   })
  //   setSearchTerm(searchTerm)
  //   console.log(history)
  //   history.push("/search")
  // }

  const toggleModalState = (image) => {
    setModal(!modal)
  }

  return (
    <div className="App">
      <NavBar handleSubmit={props.handleSubmit} />
      <Banner />
      {/* <SearchPage
          // key={image.id}
          toggleModalState={toggleModalState}
          modal={modal}
          images={results}
          searchTerm={searchTerm}
        /> */}

      <ImageList />
    </div>
  )
}

export default LandingPage
