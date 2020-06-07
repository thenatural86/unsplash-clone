import React from "react"
import black from "../images/black.png"
import { Image } from "./Image"

export const Favorites = (props) => {
  console.log(props.favorites)
  return (
    <div className="favorites-page">
      <div className="favorites-heading-container">
        <div className="favorites-title">
          <h1>My Lightning</h1>
        </div>
        <div className="favorites-logo">
          <img
            src={black}
            alt="black lightning 50/50"
            style={{ height: "6rem" }}
          />
        </div>
      </div>
      <div className="favorites-images">
        {props.favorites.length === 0 ? (
          <div>No Fav</div>
        ) : (
          <div className="favorites-images-container">
            All my favorite pics!
            {props.favorites.map((favorite) => {
              return <Image url={favorite.image} />
            })}
          </div>
        )}

        {/* {props.favorites.length === 0 ? <div>Empty</div> :
      
        {props.favorites.map((favorite) => {
          return <Image url={favorite} />
        })}
      } */}
      </div>
    </div>
  )
}
