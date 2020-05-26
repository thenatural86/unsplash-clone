import React, { useState } from "react"

export const Image = (props) => {
  const [icons, setIcons] = useState(false)

  const imageObj = props.url

  const toggleHoverState = () => {
    setIcons(!icons)
    console.log(icons)
  }
  return (
    <div
      className="image"
      onMouseEnter={() => toggleHoverState(props)}
      onMouseLeave={() => toggleHoverState(props)}
    >
      {icons ? (
        <div className="image-icons">
          <div className="like-button">
            <button>Like</button>
          </div>
          <div className="bottom-icons">
            <div className="user-info-button">
              <img src={props.url.user.profile_image.small} alt="" />
              {props.url.user.username}
            </div>
            <div className="download-button">
              <button>DownLoad</button>
            </div>
          </div>
        </div>
      ) : null}
      <img
        src={props.url.urls.small}
        alt="description"
        onClick={() => props.toggleModalState(imageObj)}
      />
    </div>
  )
}
