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

export const App = () => {
  const [results, setResults] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [clientId, setClientId] = useState(
    "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  )
  const history = useHistory()

  const handleSubmit = (searchTerm) => {
    const url = `https://api.unsplash.com/search/photos?page=10&query=${searchTerm}&client_id=${clientId}`
    axios.get(url).then((resp) => {
      setResults(resp.data.results)
      setClientId()
    })
    setSearchTerm(searchTerm)
    // console.log(history)
    // history.push("/search")
  }

  return (
    <div>
      <Router>
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
              />
            )}
          />
        </Switch>
      </Router>
    </div>
  )
}
