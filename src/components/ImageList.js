import React, { useState, useEffect } from "react"
import { Image } from "./Image"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "./Loader"
import axios from "axios"

import styled from "styled-components"

const WrapperImage = styled.div`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
  ${"" /* background-color: orange; */}
`

export const ImageList = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      // .get(`${apiRoot}/photos/?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]))
  }

  if (images === null) {
    return <div>loaded</div>
  }
  return (
    <div>
      <InfiniteScroll
        className="scroll-component"
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map((image) => {
            return <Image key={image.id} url={image} />
          })}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  )
}
