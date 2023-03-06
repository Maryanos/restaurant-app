import React from "react"

function MenuCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <span className="card-number card-circle subtle">{props.price}</span>
            <span className="card-author subtle">{props.category}</span>
            <h2 className="card-title">{props.name}</h2>
            <span className="card-description subtle">{props.description}</span>
            <div className="card-read">READ</div>
            <img src={props.image} alt={props.name} className="card-media" />
            <span className="card-tag subtle">Order Now</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuCard
