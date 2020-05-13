import React from "react"
// import styled from "styled-components"

// const Img = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `

export const Image = ({ url, key }) => {
  // const image = urls.small
  return (
    <div className="photo">
      <img src={url} key={key} alt="description" />
    </div>
  )
}
