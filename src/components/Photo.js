import React from "react"
import styled from "styled-components"

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Photo = ({ urls }) => {
  const photo = urls.small
  return (
    <div className="photo">
      <Img src={photo} alt="description" />
    </div>
  )
}
