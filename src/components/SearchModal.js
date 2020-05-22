import React from "react"

function SearchModal(props) {
  console.log(props.image.urls.small)
  return (
    <div className="search-modal">
      <div
        onClick={props.toggleModalState}
        className={`search-modal-background search-modal-showing-${props.modal}`}
      >
        <img src={props.image.urls.small} alt="street" />
      </div>
    </div>
  )
}

export default SearchModal

// <div>
//   <div
//
//     className=
//   >
//     <div className="search-modal-inner">
//       <div className="search-modal-images">
//
//       </div>
//       <div className="search-modal-text">
//         {/* <h2>Modal header</h2> */}
//         <p></p>
//       </div>
//     </div>
//   </div>
// </div>
