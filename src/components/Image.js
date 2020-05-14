import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Image = (props) => {
  // console.log(props.url.id, props.url.urls.small)
  const id = props.url.id
  const image = props.url.urls.small

  return (
    <div>
      <Img src={image} key={id} alt="description" />
    </div>
  )
}
