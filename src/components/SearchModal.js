import React from "react"

function SearchModal(props) {
  console.log(props)
  return (
    <div className="search-modal">
      <div
        onClick={props.toggleModalState}
        className={`search-modal-background search-modal-showing-${props.modal}`}
      >
        <div className="search-modal-inner">
          <div className="search-modal-images">
            <img src={props.image.urls.small} alt="street" />
          </div>
          <div className="search-modal-text">
            <h2>Modal header</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
