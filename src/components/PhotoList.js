import React, { useState, useEffect } from "react"
import { Image } from "./Image"
import InfiniteScroll from "react-infinite-scroll-component"
import { Loader } from "./Loader"
import axios from "axios"

export const PhotoList = () => {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com"
    const accessKey = "ByiIqQV5gReo8trB-h5T8VGRQW6EvhmyQW2EH-tLbys"

    axios
      // .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=10`)
      .get(`${apiRoot}/photos/?client_id=${accessKey}&count=10`)
      .then((res) => setImages([...images, ...res.data]))
  }

  if (images === null) {
    return <div>loaded</div>
  }
  return (
    <InfiniteScroll
      dataLength={images.length}
      next={fetchImages}
      hasMore={true}
      loader={<Loader />}
    >
      {images.map((image) => {
        return (
          <div className="photo-list">
            <Image key={image.id} url={image.urls.small} />
          </div>
        )
      })}
    </InfiniteScroll>
  )
}
