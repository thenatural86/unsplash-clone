import React, { useState, useEffect } from "react"
import axios from "axios"
import { BannerImage } from "./BannerImage"

export const Banner = () => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=1`)
      // .get(`${apiRoot}/photos/?client_id=${accessKey}&count=10`)
      .then((res) => {
        setLoading(false)
        setImages([...images, ...res.data])
      })
  }

  return (
    <div className="banner-container">
      {loading && <p>its loading</p>}

      {!loading &&
        images.map((image) => {
          return (
            <div className="banner-header" key={image.id}>
              <BannerImage image={image} />
              <h1>Black Lightning</h1>
              <h3>The internet's source of freely usable images.</h3>
              <h4>Powered by creatives everywhere.</h4>
              <input placeholder="Search free high-resolution photos" />
            </div>
          )
        })}
    </div>
  )
}
