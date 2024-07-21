import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import HomePage from "./screens/home";
import ContactPage from "./screens/contact";
import AboutPage from "./screens/about";
import DestinationPage from "./screens/destination";
import HotelPage from "./screens/hotel";
import DestinationAdminPage from "./screens/destination-admin";
import HotelAdminPage from "./screens/hotel-admin";
import DataSharing from "./context/context-api";

import "./css/flaticon.css";
import "./css/style.css";
import "./css/custom.css";

const App = () => {
  return(
    <DataSharing.Provider>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomePage></HomePage>}></Route>
          <Route path="contact" element={<ContactPage></ContactPage>}></Route>
          <Route path="about" element={<AboutPage></AboutPage>}></Route>
          <Route path="destination" element={<DestinationPage></DestinationPage>}></Route>
          <Route path="hotels" element={<HotelPage></HotelPage>}></Route>
          <Route path="destination-admin" element={<DestinationAdminPage></DestinationAdminPage>}></Route>
          <Route path="hotel-admin" element={<HotelAdminPage></HotelAdminPage>}></Route>
        </Routes>
      </BrowserRouter>
    </DataSharing.Provider>
  )
}

export default App;