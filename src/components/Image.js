import React, { useState } from "react"

export const Image = (props) => {
  const [icons, setIcons] = useState(false)

  const imageObj = props.url

  const toggleHoverState = () => {
    setIcons(!icons)
  }
  return (
    <div
      className="image"
      onMouseEnter={() => toggleHoverState(props)}
      onMouseLeave={() => toggleHoverState(props)}
    >
      {icons ? (
        <div className="image-icons">
          <i className="fas fa-heart-square "></i>
          <div className="user-info-pic">
            <img
              style={{ borderRadius: "30px" }}
              src={props.url.user.profile_image.small}
              alt=""
            />
          </div>
          <div className="user-info-name">{props.url.user.username}</div>
          <i class="fad fa-arrow-square-down"></i>
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
