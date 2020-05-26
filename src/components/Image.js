import React, { useState } from "react"
import styled from "styled-components"

const Img = styled.img`
  border: 1px solid black;
  position: relative;
  width: 100%;
  height: auto;
  ${"" /* object-fit: cover; */}
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`

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
      <Img
        src={props.url.urls.small}
        alt="description"
        onClick={() => props.toggleModalState(imageObj)}
      />
    </div>
  )
}
