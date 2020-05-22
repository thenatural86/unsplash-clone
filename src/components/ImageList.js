import React, { useState, useEffect } from "react"
import { Image } from "./Image"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "./Loader"
import axios from "axios"
import Modal from "./Modal"

import styled from "styled-components"

const WrapperImage = styled.div`
  max-width: 80rem;
  margin: 4rem auto;
  ${"" /* display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 300px; */}
  background-color: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const ImageList = () => {
  const [images, setImages] = useState([])
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState({})

  const toggleModalState = (image) => {
    setModal(!modal)
    setImage(image)
    console.log("toggling modal state", image, modal)
  }
  useEffect(() => {
    fetchImages()
  }, [])
  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
    axios
      // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=30`)
      .get(`${apiRoot}/photos/?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]))
  }
  if (images === null) {
    return <div>loading</div>
  }
  return (
    <div>
      <div className={`modalBackground modalShowing-${modal}`}>
        <Modal
          toggleModalState={toggleModalState}
          modal={modal}
          image={image}
        />
      </div>
      <InfiniteScroll
        className="scroll-component"
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImage>
          {images.map((image) => {
            return (
              <Image
                key={image.id}
                url={image}
                toggleModalState={toggleModalState}
              />
            )
          })}
        </WrapperImage>
      </InfiniteScroll>
    </div>
  )
}
