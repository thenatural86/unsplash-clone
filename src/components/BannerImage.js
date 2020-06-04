import React from "react"

export const BannerImage = (props) => {
  const image = props.image.urls.regular
  return (
    <div>
      <img className="banner-image" src={image} alt="" />
    </div>
  )
}
