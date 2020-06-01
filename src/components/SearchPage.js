import React, { useState } from "react"
import { Image } from "./Image"
import Modal from "./Modal"

function SearchPage(props) {
  console.log(props)
  const [image, setImage] = useState({})
  const [modal, setModal] = useState(false)

  const toggleModalState = (image) => {
    setModal(!modal)
    setImage(image)
    console.log(image)
  }

  return (
    <div className="search-page-container">
      <div className={`modalBackground modalShowing-${modal}`}>
        <Modal
          toggleModalState={toggleModalState}
          modal={modal}
          image={image}
        />
      </div>
      <div className="search-page-image-container">
        {props.images.map((image) => {
          return (
            <div className="search-page-image" key={image.id}>
              <Image url={image} toggleModalState={toggleModalState} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SearchPage
