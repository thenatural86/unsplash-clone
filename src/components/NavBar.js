import React, { useState } from "react"
import axios from "axios"
// import Modal from "./Modal"
import SearchModal from "./SearchModal"

export const NavBar = () => {
  const [image, setImage] = useState("")
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const [results, setResults] = useState([])
  const [modal, setModal] = useState(false)

  const handleSubmit = (e) => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=${clientId}`
    e.preventDefault()
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
      setModal(!modal)
    })
    setImage("")
  }

  const toggleModalState = (image) => {
    setModal(!modal)
    setImage(image)
    console.log("toggling modal state", image, modal)
  }

  return (
    <div className="navbar">
      <h1>Logo</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Search free hi-resolution images"
        />
        <input type="submit" value="submit" />
      </form>
      {results.map((image) => {
        return (
          <div className={` modalShowing-${modal}`} key={image.id}>
            <SearchModal
              toggleModalState={toggleModalState}
              modal={modal}
              image={image}
            />
            {/* <img src={image.urls.small} alt="" /> */}
          </div>
        )
      })}
      <p>Home</p>
      <p>Collections</p>
      <p>About</p>
    </div>
  )
}
