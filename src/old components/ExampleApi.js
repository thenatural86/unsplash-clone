import React, { useState, useEffect } from "react"

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url)
      const data = await response.json()
      const [item] = data.results
      setData(item)
      setLoading(false)
      console.log(data)
    }
    fetchData()
  }, [url])
  return { data, loading }
}

export const ExampleApi = () => {
  const [count, setCount] = useState(0)
  const { data, loading } = useFetch("https://api.randomuser.me/")
  console.log(data)
  // const url = `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=${clientId}`

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {loading ? <div>...loading</div> : <div>{data.name.first}</div>}
    </div>
  )
}
