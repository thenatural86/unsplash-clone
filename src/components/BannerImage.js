import React from "react"
import styled from "styled-components"

const Img = styled.img`
  height: 35rem;
  width: 100%;
  object-fit: cover;
`
export const BannerImage = (props) => {
  const image = props.image.urls.regular
  return (
    <div>
      <Img src={image} alt="" />
    </div>
  )
}
