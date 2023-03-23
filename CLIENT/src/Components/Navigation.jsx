import React from "react";
import { NavLink} from "react-router-dom";
import Logo from "../assets/1.png"

function Navigation() {
  return (
    <div className="navigation">
      <img src={Logo} alt="" className="logo"></img>
      <div className="nav-links">
      <NavLink to= "/" className="home-link">
        HOME
      </NavLink>
      <NavLink to= "/techGear" className="tech-gear-link">
        TECH
      </NavLink>
      <NavLink to= "/photography" className="photo-gear-link">
        PHOTOGRAPHY
      </NavLink>
      <NavLink to= "/wishlist" className="wishlist-link">
        WISHLIST
      </NavLink>
      </div>
    </div>
  )
}
export default Navigation;