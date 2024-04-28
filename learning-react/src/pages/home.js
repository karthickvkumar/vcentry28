import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return(
    <div>
      <h1 className="heading">This is a Home Page Content</h1>
      <img src={require("../images/shinchan.png")} className="home-image" />
      <img src="https://5.imimg.com/data5/LX/PM/GLADMIN-68162457/kawasaki-ninja-h2-bike.png" className="home-image" />
      <br></br>

      <NavLink to="/login">Sigin Up! Login page</NavLink>
      <br></br>

      <NavLink to="/about">Check About page</NavLink>

    </div>
  )
}

export default HomePage;