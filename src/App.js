import React from "react"
import { PhotoList } from "./components/PhotoList"
import { NavBar } from "./components/NavBar"
import { Banner } from "./components/Banner"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <PhotoList />
    </div>
  )
}

export default App

// return <div className="photo-list">{photos}</div>

// const useFetch = (url) => {

//   useEffect(() => {
//     async function fetchImages() {
//       const response = await fetch(url)
//       const images = await response.json()
//       setImages(images)
//       setIsLoaded(true)
//       // console.log(images)
//     }
//     fetchImages()
//   }, [url])
//   return { images, loaded }
// }

// const clientId = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
// const { images } = useFetch(
//   `https://api.unsplash.com/photos/?client_id=${clientId}&per_page=10`
// )
