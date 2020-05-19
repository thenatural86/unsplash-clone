import React from "react"
import styled from "styled-components"

const Img = styled.img`
  height: 100%;
  width: 100%;
  background-color: pink;
  object-fit: cover;
`
export const BannerImage = (props) => {
  // console.log(props.image.urls.small)
  const image = props.image.urls.regular
  return (
    <div>
      <Img src={image} alt="" />
    </div>
  )
}
