import React from "react"

function Modal(props) {
  // console.log(props.image.urls)
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
          <div className="modalImage">
            <img src={props.image.urls.regular} alt="street" />
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

export default Modal
