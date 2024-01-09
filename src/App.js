import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import {  Home, Servicii, Solutii, AboutUs } from './components'
import {Header, Footer} from './containers'
import {Pages} from "./components/navbar/Navbar"
import ImageLoader from "./components/imageloader/ImageLoader"

const App = () => {
  return (
    <>
      <Header />
      <ImageLoader />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path={Pages.Solutii}
            element={<Solutii />}
          ></Route>
          <Route
            path={Pages.Servicii}
            element={<Servicii />}
          ></Route>
          <Route
            path={Pages.DespreNoi}
            element={<AboutUs />}
          ></Route>
          <Route path="*" element={<Navigate to={Pages.Home} />}></Route>
        </Routes>
        {/* <div className="wallpaper-container-footer" /> */}
      <Footer />
    </>
  );
};

export default App
