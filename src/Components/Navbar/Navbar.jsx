import React from "react";
import { IoMdBasket } from "react-icons/io";
import { FiLogIn } from "react-icons/fi";
import { motion } from "framer-motion";
// import { HiOutlineBars3BottomLeft } from "react-icons/hi";


import { HiBars3BottomLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { usePost } from "../../Context/ContextProvider";

export default function Navbar(props) {
  const {Added}  = usePost()
  const buttonClick =props.isClicked;
  const buttonClick2 =props.isShow;
  const MenuShowButton = props.isMenuShow;

  
  return (
    <div className=" container flex justify-between p-3  sm:p-6 backdrop-blur-lg items-center  sm:mb-4  sticky top-0  z-40">
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className=" text-[34px] px-2  sm:px-0  lg:hidden"
      >
        <motion.div whileHover={{ scale: 1.1 }} >

        <HiBars3BottomLeft onClick={MenuShowButton}  />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
        className="flex gap-2  items-center cursor-pointer "
      >
        <span className=" w-9 "></span>
        <motion.h1
          whileHover={{ scale: 1.1 }}
          className=" font-semibold text-[24px]  bg-gradient-to-r from-red-700 to-red-500 text-transparent bg-clip-text "
        >
          <Link to="/">Foodie</Link>          
        </motion.h1>
      </motion.div>

      <div className="flex gap-5 list-none items-center ">
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={`lg:flex items-center hidden  gap-8 `}
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
             <p> <Link to='/'> Home</Link></p>
         
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p> <Link to='/menu'>Menu</Link></p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
             <p> <Link to='/services'>Services</Link></p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p> <Link to='/about'>About us</Link></p>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-md text-base font text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <p onClick={buttonClick2}> Contact us</p>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            className="lg:text-sm lg:text-[20px] text-base text-textColor cursor-pointer hover:text-headingColor duration-100 transition-all ease-in-out"
          >
            <div onClick={buttonClick}  className=" flex items-center relative ">
              <IoMdBasket className=" text-[24px] " />
              <p className=" flex items-center absolute  right-[-4px] top-[-4px] justify-center p-2 bg-red-600 rounded-[100px] text-white text-[14px] h-4 w-4 ">
                {Added.length}
              </p>
            </div>
          </motion.li>
        </motion.ul>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex gap-3 border p-1 px-2 rounded-[5px] cursor-pointer items-center "
        >
          <span>
            <FiLogIn className=" text-[20px] sm:text-lg " />
          </span>
          <p className=" hidden sm:flex ">Login</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
