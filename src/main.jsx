// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
// import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import AboutRoute from "./Components/All Routes/AboutRoute.jsx";
import PricingRoute from "./Components/All Routes/PricingRoute.jsx";
import ContactRouter from "./Components/All Routes/ContactRouter.jsx";
import Blog1 from "./Components/All Routes/Blog1.jsx";
import SignUp from "./Components/All Routes/SignUp.jsx";
import SingIn from "./Components/All Routes/SignIn.jsx";
import Error from "./Components/All Routes/Error.jsx";
import Blog2 from "./Components/All Routes/Blog2.jsx";
import NavbarForPages from "./Components/Navbar/NavbarForPages.jsx";

// const [background, setBackground] = useState("blue");

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route
        path="/about"
        element={
          <>
            <NavbarForPages />
            <AboutRoute />
          </>
        }
      />
      <Route
        path="/pricing"
        element={
          <>
            <NavbarForPages />
            <PricingRoute />
          </>
        }
      />
      <Route
        path="/contact"
        element={
          <>
            <NavbarForPages />
            <ContactRouter />
          </>
        }
      />
      <Route
        path="/blog1"
        element={
          <>
            <NavbarForPages />
            <Blog1 />
          </>
        }
      />
      <Route
        path="/blog2"
        element={
          <>
            <NavbarForPages />
            <Blog2 />
          </>
        }
      />
      <Route
        path="/signUp"
        element={
          <>
            <NavbarForPages />
            <SignUp />
          </>
        }
      />
      <Route
        path="/signIn"
        element={
          <>
            <NavbarForPages />
            <SingIn />
          </>
        }
      />
      <Route
        path="/error"
        element={
          <>
            <NavbarForPages />
            <Error />
          </>
        }
      />
    </Routes>
    <Footer />
  </BrowserRouter>
);
