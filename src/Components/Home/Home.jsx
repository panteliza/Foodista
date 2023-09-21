import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import FruitsSection from "../Fruits/FruitsSection";
import TopDish from "../TopDish/TopDish";
import AllDish from "../AllDish/AllDish";
import Cart from "../Cart/Cart";
import ContactUs from "../../Contact us/ContactUs";
import MobileNab from "../MobileNav/MobileNab";
import CartDetails from "../Cart/CartDetails";

export default function Home() {
  const [showCart, setShowCart] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showMenu, setShowMenu] = useState(false);


  function clickHandler() {
    setShowCart(!showCart);
  }

  function clickHandler2() {
    setShowContact(!showContact);
  }

  function menuHandler(){
    setShowMenu(!showMenu);
  }

  return (
    <div className=" container mx-auto ">
      <div className="relative">
        <div className="w-[100%] sticky top-0 z-10 ">
          <Navbar isClicked={clickHandler} isShow={clickHandler2} isMenuShow={menuHandler} />
        </div>
        <div className=" container w-[90%] mx-auto ">
          <Header />
          <FruitsSection />
          <TopDish />
          <AllDish />
        </div>
        <div>{showCart && <Cart show={clickHandler} />}</div>
        <div>{showContact && <ContactUs contactShow={clickHandler2} />}</div>
        <div>{showMenu && <MobileNab hideMenu ={menuHandler} show={clickHandler} />}</div>
        
      </div>
      <CartDetails />
    </div>
  );
}
