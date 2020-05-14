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
  const description = props.url.id.alt_description

  const handleClick = (id, description) => {
    console.log("clicked", id)
    return <Modal />
  }

  return (
    <div>
      <Img src={image} alt="description" onClick={() => props.modal(id)} />
    </div>
  )
}
