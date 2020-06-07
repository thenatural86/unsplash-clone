import React from "react"
import black from "../images/black.png"
import { Image } from "./Image"

export const Favorites = (props) => {
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
          <div className="no-favorites">
            <h1>Like A Picture and Ride the Lightning!</h1>
          </div>
        ) : (
          <div className="favorites-images-container">
            {props.favorites.map((favorite) => {
              return (
                <div key={favorite}>
                  <Image
                    url={favorite.image}
                    addRemoveFav={props.addRemoveFav}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
