import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { BannerImage } from "./BannerImage"

const Header = styled.div`
  ${"" /* max-width: 70rem; */}
  width: 100%;
  height: 20rem;
  margin: 2rem auto;
  text-align: center;
  position: relative;
  display: inline-block;
`

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 1em;
  z-index: 4;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 44.5%;
  top: 40%;
  color: white;
`
const H3 = styled.h3`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 1em;
  z-index: 4;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 33%;
  top: 60%;
  color: white;
`
const H32 = styled.h3`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 1em;
  z-index: 4;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 39.5%;
  top: 70%;
  color: white;
`
const Input = styled.input`
  margin-bottom: 1em;
  z-index: 4;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 85%;
  height: 3rem;
  width: 60%;
  border-radius: 5px;
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
    <div className="banner">
      {loading && <p>its loading</p>}

      {!loading &&
        images.map((image) => {
          return (
            <Header key={image.id}>
              <BannerImage image={image} />
              <H1>Black Lightning</H1>
              <H3>The internet's source of freely usable images.</H3>
              <H32>Powered by creatives everywhere.</H32>
              <Input placeholder="Search free high-resolution photos" />
            </Header>
          )
        })}
    </div>
  )
}
