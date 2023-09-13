import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import {  Home, Servicii, Solutii, AboutUs } from './components'
import {Header, Footer} from './containers'
import {Pages} from "./components/navbar/Navbar"

const Home = lazy(() => import('./components/pages/Home'));
const Servicii = lazy(() => import('./components/pages/Servicii'));
const Solutii = lazy(() => import('./components/pages/Solutii'));
const AboutUs = lazy(() => import('./components/pages/AboutUs'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
        {/* <div className="wallpaper-container-footer" /> */}
      <Footer />
    </>
  );
};

export default App
