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
    <div className="banner">
      <h1>Black Lightning</h1>
      <p>The internet's source of freely usable images.</p>
      <p>Powered by creatives everywhere.</p>
    </div>
  )
}
