import React from "react";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/about";
import PageNotFound from "./pages/page-not-found";
import NestedRoutingPage from "./pages/nested-routing";
import NestedContent1 from "./pages/nested-content-1";
import NestedContent2 from "./pages/nested-content-2";
import NestedContent3 from "./pages/nested-content-3";
import PrintOutputPage from "./pages/print-output";
import CreateAccountPage from "./pages/create-account";
import ProfilePage from "./pages/profile";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="login" element={<LoginPage></LoginPage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        {/* Nested Rotuing */}
        <Route path="nested" element={<NestedRoutingPage></NestedRoutingPage>}>
          <Route path="content-1" element={<NestedContent1></NestedContent1>}></Route>
          <Route path="content-2" element={<NestedContent2></NestedContent2>}></Route>
          <Route path="content-3" element={<NestedContent3></NestedContent3>}></Route>
        </Route>

        <Route path="print" element={<PrintOutputPage></PrintOutputPage>}></Route>
        <Route path="signup" element={<CreateAccountPage></CreateAccountPage>}></Route>
        <Route path="profile" element={<ProfilePage></ProfilePage>}></Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
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