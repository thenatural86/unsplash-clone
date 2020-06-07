import React, { useState } from "react"

export const Image = (props) => {
  // console.log(props)
  const [icons, setIcons] = useState(false)
  const [liked, setLiked] = useState(false)
  const imageObj = props.url

  const toggleHoverState = () => {
    setIcons(!icons)
  }

  const toggleLike = (image) => {
    setLiked(!liked)
    console.log(image)
  }

  return (
    <div
      className="image"
      onMouseEnter={() => toggleHoverState(props)}
      onMouseLeave={() => toggleHoverState(props)}
    >
      {icons ? (
        <div className="image-icons">
          <i
            className="fas fa-heart-square "
            onClick={() => props.addToFav(imageObj)}
            onClick={() => props.addRemoveFav(imageObj)}
          ></i>
          <div className="user-info-pic">
            <img
              style={{ borderRadius: "30px" }}
              src={props.url.user.profile_image.small}
              alt=""
            />
          </div>
          <div className="user-info-name">{props.url.user.username}</div>
          <i className="fad fa-arrow-square-down"></i>
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
