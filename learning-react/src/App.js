import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";

const App = () => {
  return(
    <div>
      <h1>Welcome to React JS</h1>
      <h2>Hello</h2>
      <HomePage></HomePage>
      <LoginPage></LoginPage>
    </div>
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