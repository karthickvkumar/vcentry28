import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;


/*
React - Function Component Syntax
import React from "react";

const ComponentName = () => {
  return(
    HTML Code 
  )
}

export default ComponentName;
*/
/*
Naming Convention 
1. Pascel Case - KarthickKumar (Component or class name)
2. Camel Case - karthickKumar (Variable name or functipn namee)
3. Snake Case - karthick_kumar (Css classes)
4. Kebab Case - karthick-kumar (Css classes)
*/