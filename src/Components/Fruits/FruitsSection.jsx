import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";

//fruits import here ===================>

import f2 from "../../assets/img/f2.png";
import f3 from "../../assets/img/f3.png";
import f4 from "../../assets/img/f4.png";
import f5 from "../../assets/img/f5.png";
import f6 from "../../assets/img/f6.png";
import f7 from "../../assets/img/f7.png";
import f8 from "../../assets/img/f8.png";
import f9 from "../../assets/img/f9.png";
import f10 from "../../assets/img/f10.png";

const FruitsSection3 = [
  {
    id: 1,
    heading: "Blueberries",
    text: "Blue Berries",
    price: "12.25",
    image: f4,
  },
  {
    id: 2,
    heading: "Pinneapple",
    image: f2,
    price: "6.25",
  },
  {
    id: 3,
    heading: "Raspberry",
    text: "Cascade Delight",
    price: "12.25",
    image: f7,
  },
  {
    id: 4,
    heading: "Pomegranate",
    image: f6,
    price: "12.25",
  },
  {
    id: 5,
    heading: "Blueberries",
    text: "Blue Berries",
    price: "12.25",
    image: f3,
  },
  {
    id: 6,
    heading: "Pinneapple",
    image: f5,
    price: "6.25",
  },
  {
    id: 7,
    heading: "Raspberry",
    text: "Cascade Delight",
    price: "12.25",
    image: f7,
  },
  {
    id: 8,
    heading: "Pomegranate",
    image: f8,
    price: "12.25",
  },
  {
    id: 9,
    heading: "Pomegranate",
    image: f9,
    price: "12.25",
  },
  {
    id: 10,
    heading: "Pomegranate",
    image: f10,
    price: "12.25",
  },
  
  
];

export default function FruitsSection() {
  return (
    <div className="container ">
      <div className=" bg-[#f5eee9] w-[95%] mx-auto mb-20 px-1 py-3 flex xl:mx-12 justify-start gap-4 items-center overflow-x-scroll scrollbar-hidden scroll-smooth   ">
        {FruitsSection3.map(({ id, heading, text, price, image }) => {
          return (
            <div key={id} className=" bg-white min-w-[250px] sm:min-w-[280px] xl:w-[310px] min-h-[150px] sm:min-h-[180px] xl:h-[235px]  ">
              <div className=" flex justify-between items-center px-4 ">
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img src={image} alt="berries" className=" w-32 sm:w-40 xl:w-48 h-32 sm:w-34 xl:h-36 " />
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <MdOutlineAddShoppingCart className=" w-10 h-10 p-2 rounded-full bg-red-600 text-white " />
                </motion.div>
              </div>
              <div className=" flex flex-col gap-2 justify-end items-end  pb-3 pr-3  ">
                <p>{heading}</p>
                <span className=" text-gray-400 text-[14px] ">{text}</span>
                <div className=" flex gap-1 ">
                  <span className=" text-orange-500 ">$ </span>
                  <p>{price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
