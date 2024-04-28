import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return(
    <div>
      <h2>Page is not Available</h2>
      <NavLink to="/">Back to Home Page</NavLink>
    </div>
  )
}

export default PageNotFound;