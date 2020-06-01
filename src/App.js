import React, { useState } from "react"
import LandingPage from "./components/LandingPage"
import axios from "axios"

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom"
import SearchPage from "./components/SearchPage"
import { NavBar } from "./components/NavBar"

export const App = () => {
  const [image, setImage] = useState({})
  const [modal, setModal] = useState(false)

  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )

  const handleSubmit = (searchTerm) => {
    const url = `https://api.unsplash.com/search/photos?per_page=30&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
    })
    setSearchTerm(searchTerm)
    console.log(searchTerm)
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
              <LandingPage {...props} handleSubmit={handleSubmit} />
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
                modal={modal}
                image={image}
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}
