import React from "react";
import { motion } from "framer-motion";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// image here ===============>

import imageDelivery from "../../assets/img/delivery.png";
import image1 from "../../assets/hero-bg.png";
import image2 from "../../assets/i1.png";
import fruit from "../../assets/img/f7.png";
import chicken from "../../assets/img/r2.png";
import fish from "../../assets/img/fi3.png";

const DataShowCase = [
  {
    id: 1,
    heading: "Raspberry",
    text: "Cascade Delight",
    icons: "$",
    price: "10",
    dish: fruit,
  },

  {
    id: 2,
    heading: "Classic Pork Fried Rice",
    text: "Fried Rice and Pork",
    icons: "$",
    price: "20.09",
    dish: chicken,
  },

  {
    id: 3,
    heading: "Tilapia",
    text: "Roasted Tilapia",
    icons: "$",
    price: "15.25",
    dish: fish,
  },

  {
    id: 4,
    heading: "Ice cream",
    text: "Chocolate & Vanila",
    icons: "$",
    price: "5.25",
    dish: image2,
  },
];

export default function Header() {
  return (
    <>
      <div className=" container ml-4 xl:ml-0 flex flex-col xl:flex-row  gap-6 sm:gap-0 justify-start  ">
        <div className=" grid gap-3 mt-5 sm:mt-16 justify-start  ">
          <div className="flex  p-1 px-2 bg-yellow-100 rounded-[10px] items-center gap-2  w-fit">
            <p className=" text-orange-600  font-bold text-sm sm:text-[16px] ">
              Bike Delivery
            </p>
            <img
              src={imageDelivery}
              alt="deliveryman"
              className=" w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]  rounded-full  bg-white "
            />
          </div>
          <h1 className=" font-bold text-[24px] sm:text-[40px] xl:text-[64px]  xl:w-[590px] ">
            <span className=" bg-gradient-to-r from-orange-700 font-bold to-orange-500 text-transparent bg-clip-text ">The Fastest </span>
             Food Delivery in{" "}
            <span className="bg-gradient-to-r from-orange-700 font-bold to-orange-500 text-transparent bg-clip-text ">
              Nepal
            </span>{" "}
          </h1>
          <p className="  flex px-3 flex-wrap text-[16px] sm:text-[20px]   xl:w-[500px] xl:text-[16px] text-gray-600  text-justify  xl:text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eius maxime debitis  ad sed. Id eveniet itaque adipisci dolore esse,
            mollitia commodi temporibus provident officia sapiente aliquid
            repellat quasi.
          </p>
          <div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className=" p-1  w-[95%] mx-auto xl:mx-0 xl:w-auto px-2 sm:mb-8 xl:mb-auto flex justify-center  text-[20px] text-black bg bg-gradient-to-r from-orange-300  rounded-[7px] to-orange-400 "
            >
              Order Now
            </motion.button>
          </div>
        </div>

        {/* for the foodshows case */}

        <div className="flex  justify-center xl:justify-between relative">
          <div className="  ">
            <img src={image1} alt="background" className=" absolute  right-[18px] h-[440px]  xl:h-auto xl:right-[-20px] w-[95%]  xl:w-[350px]  " />
          </div>

          <div className=" flex flex-wrap justify-center gap-5 md:gap-8 lg:gap-8 mt-14  xl:ml-28 ">
            {DataShowCase.map(({ id, heading, text, icons, price, dish }) => {
              return (
                <div
                  key={id}
                  className=" w-[140px] h-[160px] lg:w-[200px] mb-8 xl:mb-0  lg:h-[210px] backdrop-blur-2xl shadow-lg relative rounded-[15px] "
                >
                  <motion.img
                    src={dish}
                    whileHover={{ scale: 1.1 }}
                    alt="iceCream"
                    className=" absolute w-24 sm:w-36  z-50 items-center right-[30px] top-[-50px] "
                  />
                  <div className=" flex flex-col gap-4 justify-center  items-center pt-12 lg:pt-20 ">
                    <h1 className=" font-semibold ">{heading}</h1>
                    <p className=" font-semibold text-gray-400 text-sm sm:text-[16px] ">
                      {text}
                    </p>
                    <div className=" flex gap-2 text-sm sm:text-[16px] ">
                      <span className=" text-orange-500 ">{icons}</span>
                      <p>{price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className=" flex mx-12 mt-[70px] mb-[50px] justify-between items-center ">
        <p className="  text-[20px] lg:text-[24px] ">Our Fresh & Healthy Fruits</p>
        <div className="  items-center gap-3 hidden lg:flex">
          <span
            whileHover={{ scale: 1.1 }}
            className="  text-white p-2 bg-orange-400 hover:bg-orange-600  rounded-[5px] "
          >
            <AiOutlineLeft />
          </span>
          <span
            whileHover={{ scale: 1.1 }}
            className="  text-white p-2 bg-orange-400 hover:bg-orange-600 rounded-[5px] "
          >
            <AiOutlineRight />
          </span>
        </div>
      </div>
    </>
  );
}
