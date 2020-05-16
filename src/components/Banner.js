import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { BannerImage } from "./BannerImage"

const Header = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 1em;
`

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
    <div>
      {loading && <p>its loading</p>}

      {!loading &&
        images.map((image) => {
          return (
            <Header>
              <BannerImage image={image} />
              <H1>Black Lightning</H1>
              <p>The internet's source of freely usable images.</p>
              <p>Powered by creatives everywhere.</p>
            </Header>
          )
        })}
    </div>
  )
}
