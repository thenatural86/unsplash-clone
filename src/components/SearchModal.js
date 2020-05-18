import React from "react"

function SearchModal(props) {
  console.log(props.image.urls)
  if (props.image.urls === undefined) {
    return null
  }
  return (
    <div className="modal">
      <div
        onClick={props.toggleModalState}
        className={`searchModalBackground modalShowing-${props.modal}`}
      >
        <div className="searchModalInner">
          <div>
            <img src={props.image.urls.small} alt="street" />
          </div>
          <div className="modalText">
            <h2>Modal header</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal
