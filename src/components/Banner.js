import React from "react"
import styled from "styled-components"

const Header = styled.div`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`

const H1 = styled.h1`
  font-family: "Quicksand", sans-serif;
  margin-bottom: 1em;
`

export const Banner = () => {
  return (
    <Header>
      <H1>Black Lightning</H1>
      <p>The internet's source of freely usable images.</p>
      <p>Powered by creatives everywhere.</p>
    </Header>
  )
}
