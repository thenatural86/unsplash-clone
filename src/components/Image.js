import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: auto;
  ${"" /* object-fit: cover; */}
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`

export const Image = (props) => {
  // console.log(props)
  const imageObj = props.url

  return (
    <div>
      <Img
        src={props.url.urls.small}
        alt="description"
        onClick={() => props.toggleModalState(imageObj)}
        onMouseEnter={() => props.toggleHoverState(props)}
        // onMouseLeave={() => props.toggleHoverState(props)}
      />

      {props.icons ? (
        <div className="like-button">
          <button>Like</button>
          <button>DownLoad</button>
          <img src={props.url.user.profile_image.small} />
          {props.url.user.username}
        </div>
      ) : null}
    </div>
  )
}
