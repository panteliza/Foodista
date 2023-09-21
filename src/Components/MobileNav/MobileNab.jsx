import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { MdOutlineRestaurantMenu, MdShoppingBasket } from "react-icons/md";
import { usePost } from '../../Context/ContextProvider';



export default function MobileNab(props) {
  const {Added} =usePost()
  const hideMenuButton = props.hideMenu;
  const showCart =props.show;
  return (
    <motion.div
        className="flex lg:hidden w-full fixed top-0 z-20  p-0 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
      
      <div className="flex flex-col bg-cardOverlay backdrop-blur-lg items-start justify-start gap-16 w-screen h-screen  overflow-y-hidden  z-50 overflow-hidden ">
      <motion.div className="flex items-center justify-between w-screen h-24  px-10">
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
        
        >
          <MdShoppingBasket className="text-4xl cursor-pointer" onClick={showCart} />
         
            <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-sm text-white font-semibold">
              {Added.length}
              </p>
            </div>
         
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="relative flex items-center justify-center text-textColor"
          
        >
          <MdOutlineRestaurantMenu onClick={hideMenuButton} className="text-headingColor text-4xl" />
        </motion.div>
      </motion.div>
      <div
        className={`flex items-center justify-center w-full  h-72 gap-10 flex-col`}
      >
        <Link  to={'/menu'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Menu
        </Link>
        <Link  to={'services'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Services
        </Link>
        <Link  to={'/about'} className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          About
        </Link>
        <p  className="text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out px-10">
          Contact
        </p>
      </div>

      <Link
        to={"/"}
        
        className="flex items-center  justify-center w-full"
      >
        <motion.div
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 cursor-pointer"
        >
         
          <p className="bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text text-3xl font-bold">Foodie</p>
        </motion.div>
      </Link>
    </div>
      
      </motion.div>
  )
}
