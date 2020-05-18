import React from "react"

export const BannerImage = (props) => {
  // console.log(props.image.urls.small)
  const image = props.image.urls.small
  return (
    <div>
      <img src={image} alt="" />
    </div>
  )
}
