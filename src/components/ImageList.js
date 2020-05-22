import React, { useState, useEffect } from "react"
import { Image } from "./Image"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "./Loader"
import axios from "axios"
import Modal from "./Modal"

import styled from "styled-components"

const WrapperImage = styled.div`
  max-width: 80rem;
  margin: 2rem auto;
  line-height: 4rem;
  column-count: 4;
  column-gap: 1rem;
`

export const ImageList = () => {
  const [images, setImages] = useState([])
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState({})

  const toggleModalState = (image) => {
    setModal(!modal)
    setImage(image)
    // console.log("toggling modal state", image, modal)
  }
  useEffect(() => {
    fetchImages()
  }, [])
  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"
    axios
      // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=30`)
      .get(`${apiRoot}/photos/?client_id=${accessKey}&per_page=30`)
      .then((res) => setImages([...images, ...res.data]))
  }
  // console.log(images)
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
