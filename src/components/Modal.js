import React from "react"

function Modal(props) {
  if (props.image.urls === undefined) {
    return null
  }
  return (
    <div className="modal">
      <div
        onClick={props.toggleModalState}
        className={`modalBackground modalShowing-${props.modal}`}
      >
        <div className="modal-page">
          <div className="modal-user">
            <div className="modal-user-image">
              <img
                style={{ borderRadius: "15px" }}
                src={props.image.user.profile_image.small}
                alt=""
              />
            </div>
            <div className="modal-user-name">{props.image.user.name}</div>
          </div>
          <div className="modal-like-button">
            <button>Like</button>
          </div>
          <div className="modal-download-button">
            <button>Download</button>
          </div>
          <div className="modal-image-container">
            <img src={props.image.urls.regular} alt="street" />
          </div>
          <div className="modal-description">
            <p>{props.image.alt_description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
