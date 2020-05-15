import React from "react"
import styled from "styled-components"

import Modal from "./Modal"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Image = (props) => {
  const image = props.url.urls.small
  // console.log(props)
  const id = props.url.id
  const imageObj = props.url

  return (
    <div>
      <Img
        src={image}
        alt="description"
        onClick={() => props.modal(imageObj)}
      />
    </div>
  )
}
