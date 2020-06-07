import React, { useState } from "react"
import LandingPage from "./components/LandingPage"
import axios from "axios"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SearchPage from "./components/SearchPage"
import { NavBar } from "./components/NavBar"
import { Favorites } from "./components/Favorites"

export const App = () => {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const [liked, setLiked] = useState(false)
  const [favorites, setFavorites] = useState([])

  const handleSubmit = (searchTerm) => {
    const url = `https://api.unsplash.com/search/photos?per_page=30&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
    })
    setSearchTerm(searchTerm)
    console.log(searchTerm)
  }

  const toggleLike = (image) => {
    setLiked(!liked)
    setFavorites(image)
    console.log("from up top!", image)
    // console.log(liked)
  }

  const addToFav = (image) => {
    console.log("This object is one of my favs!", image)
    setFavorites([...favorites, { image }])
  }

  return (
    <div>
      <Router>
        <NavBar handleSubmit={handleSubmit} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage
                {...props}
                handleSubmit={handleSubmit}
                toggleLike={toggleLike}
                liked={liked}
                addToFav={addToFav}
              />
            )}
          />
          <Route
            exact
            path="/search"
            render={(props) => (
              <SearchPage
                {...props}
                handleSubmit={handleSubmit}
                images={results}
                searchTerm={searchTerm}
                liked={liked}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={(props) => (
              <Favorites
                {...props}
                toggleLike={toggleLike}
                liked={liked}
                favorites={favorites}

                // searchTerm={searchTerm}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}
