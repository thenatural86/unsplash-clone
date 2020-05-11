import React, { createContext, useState, useEffect } from "react"

export const PhotoContext = createContext()

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setLoading(false)
      // console.log(data)
    }
    fetchData()
  }, [url])
  return { data, loading }
}

export const PhotoContextProvider = (props) => {
  const clientId = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
  const { data } = useFetch(
    `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=10`
  )

  return (
    <PhotoContext.Provider value={{ data }}>
      {props.children}
    </PhotoContext.Provider>
  )
}

export default PhotoContextProvider
