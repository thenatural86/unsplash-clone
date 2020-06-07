import React, { useState, useEffect } from "react"
import { Image } from "./Image"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "./Loader"
import axios from "axios"
import Modal from "./Modal"

export const ImageList = (props) => {
  const [images, setImages] = useState([])
  const [image, setImage] = useState({})
  const [modal, setModal] = useState(false)

  const toggleModalState = (image) => {
    setModal(!modal)
    setImage(image)
    console.log(image)
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
  if (images === null) {
    return <div>loading</div>
  }
  return (
    <div className="image-container">
      <div className={`modalBackground modalShowing-${modal}`}>
        <Modal
          toggleModalState={toggleModalState}
          modal={modal}
          image={image}
        />
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={() => fetchImages()}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="image-list">
          {images.map((image) => {
            return (
              <div key={image.id}>
                <Image
                  url={image}
                  toggleModalState={toggleModalState}
                  toggleLike={props.toggleLike}
                  liked={props.liked}
                  addToFav={props.addToFav}
                />
              </div>
            )
          })}
        </div>
      </InfiniteScroll>
    </div>
  )
}
