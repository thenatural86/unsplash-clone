import React from "react"
import { Image } from "./Image"

function SearchModal(props) {
  console.log(props)
  return (
    <div className="search-modal" onClick={props.toggleModalState}>
      <div
        className={`search-modal-background search-modal-showing-${props.modal}`}
      >
        <div className="search-modal-image-container">
          {props.images.map((image) => {
            return (
              <div className="search-modal-image">
                <Image url={image} toggleModalState={props.toggleModalState} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SearchModal

// <div >

//   >
//     <img src={props.image.urls.small} alt="street" />
//   </div>
// </div>
