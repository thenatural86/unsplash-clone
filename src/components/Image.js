import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Image = (props) => {
  // console.log(props)
  const image = props.url.urls.small
  const imageObj = props.url

  return (
    <div>
      <Img
        src={image}
        alt="description"
        onClick={() => props.toggleModalState(imageObj)}
      />
    </div>
  )
}
