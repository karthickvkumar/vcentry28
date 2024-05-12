import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const NestedRoutingPage = () => {
  return(
    <div className="nested-container">
      <div className="header"></div>
      <div className="body">
        <div className="sidebar">
          
          <NavLink to="/nested/content-1" className={({isActive}) => isActive ? "link-button selection" : "link-button"}>Content 1</NavLink>
          <br/>
          <NavLink to="/nested/content-2" className={({isActive}) => isActive ? "link-button selection" : "link-button"}>Content 2</NavLink>
          <br/>
          <NavLink to="/nested/content-3" className={({isActive}) => isActive ? "link-button selection" : "link-button"}>Content 3</NavLink>
        </div>
        <div className="section">
          <div className="content">
             <Outlet></Outlet> 
          </div>
          <div className="footer"></div>
        </div>
      </div>
    </div>
  )
} 

export default NestedRoutingPage;