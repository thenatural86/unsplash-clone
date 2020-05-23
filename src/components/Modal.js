import React from "react"

function Modal(props) {
  // console.log(props.image)
  if (props.image.urls === undefined) {
    return null
  }
  return (
    <div className="modal">
      <div
        onClick={props.toggleModalState}
        className={`modalBackground modalShowing-${props.modal}`}
      >
        <div className="modalInner">
          <div>
            <img src={props.image.user.profile_image.small} />
          </div>
          <div>{props.image.user.name}</div>
          <div className="modalImage">
            <img src={props.image.urls.regular} alt="street" />
          </div>
          <div className="modal-description">
            <h2>{props.image.alt_description}</h2>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
