import axios from "axios"

import React, { useState } from "react"

export const PhotoForm = () => {
  const [photo, setPhoto] = useState("")
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const [results, setResults] = useState([])

  const handleSubmit = (e) => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`
    e.preventDefault()
    // console.log(photo)
    axios.get(url).then((resp) => {
      // console.log(resp)
      setResults(resp.data.results)
    })
    setPhoto("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          placeholder="image search"
        />
        <input type="submit" value="submit" />
      </form>
      {results.map((photo) => {
        return (
          <div key={photo.id}>
            <img src={photo.urls.small} />
          </div>
        )
      })}
    </div>
  )
}
