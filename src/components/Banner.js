import React, { useContext } from "react"
import { PhotoContext } from "../contexts/PhotoContext"

export const Banner = () => {
  const { data } = useContext(PhotoContext)
  // console.log(data)
  if (data === null) {
    return <div>...loading</div>
  }
  // const picture = data.urls.regular
  return (
    <div className="hero">
      <h1>Unsplashed</h1>
      <p>The internet's source of freely unable images.</p>
      <p>Powered by creatives everywhere.</p>
    </div>
  )
}
