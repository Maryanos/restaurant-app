import React from "react"
import menu from "./MenuData"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"

function Restaurant()  {

  return (
    <>
      <Navbar  />
      <div className="cards-wrapper">
        {menu.map((i) => (
          <MenuCard image={i.image} name={i.name} category={i.category} price={i.price} description={i.description} key={i.id}/>
        ))}
      </div>

    </>
  )
}

export default Restaurant;
