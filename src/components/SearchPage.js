import React from "react"
import { Image } from "./Image"

function SearchPage(props) {
  console.log(props)
  // const { searchTerm } = useParams()
  // console.log(searchTerm)

  return (
    <div
      className="search-modal"
      // onClick={props.toggleModalState}
    >
      search
      {/* <div
        className={`search-modal-background search-modal-showing-${props.modal}`}
      > */}
      <div className="search-modal-image-container">
        {props.images.map((image) => {
          return (
            <div className="search-modal-image">
              <Image url={image} toggleModalState={props.toggleModalState} />
            </div>
          )
        })}
      </div>
      {/* </div> */}
    </div>
  )
}

export default SearchPage
