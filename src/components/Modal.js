import React, { useState } from "react"

function Modal() {
  const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }

  return (
    <div className="Modal">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img src="" alt="street" />
          </div>
          <div className="modalText">
            <h2>Modal header</h2>
            <p>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
              IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem Ipsum
            </p>
            <form action="">
              <button>Join Now!</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              exit
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => toggleModalState()}>Here I am!</button>
    </div>
  )
}

export default Modal
