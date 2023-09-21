import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";
import MenuBar from "./Menu/MenuBar";
import Services from "./Services/Services";
import AboutUs from "./About us/AboutUs";

import ContextProvider from "./Context/ContextProvider";


function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/Foodie/" >
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="menu" element={<MenuBar />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </ContextProvider>
  );
}

export default App;



