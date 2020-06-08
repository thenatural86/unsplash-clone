import React, { useState, useEffect } from "react"
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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  const handleSubmit = (searchTerm) => {
    const url = `https://api.unsplash.com/search/photos?per_page=30&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
    })
    setSearchTerm(searchTerm)
  }

  const toggleLike = (image) => {
    setLiked(!liked)
    setFavorites(image)
  }

  const addToFav = (image) => {
    setFavorites([...favorites, { image }])
  }

  const removeFromFav = (image) => {
    setFavorites(favorites.filter((favorite) => favorite.image.id !== image.id))
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
                addRemoveFav={addToFav}
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
                addRemoveFav={removeFromFav}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}
