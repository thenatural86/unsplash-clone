import React, { useContext } from "react"
import { PhotoContext } from "../contexts/PhotoContext"
import { Photo } from "./Photo"

export const PhotoList = () => {
  const { data } = useContext(PhotoContext)
  if (data === null) {
    return <div>loading</div>
  }
  const photos = data.map((photo) => {
    return <Photo key={photo.id} {...photo} />
  })
  return <div className="photo-list">{photos}</div>
}
