import React from "react";

//icons import from reacts-icons ===============>

import { MdRestaurantMenu, MdOutlineFastfood } from "react-icons/md";
import {
  GiChickenOven,
  GiFruitBowl,
  GiDrinkMe,
  GiCakeSlice,
  GiIceCreamCone,
  GiBowlOfRice,
} from "react-icons/gi";
import { FaFish } from "react-icons/fa";

const HotDish = [
  {
    id: 1,
    icons: <MdRestaurantMenu />,
    title: "Menu",
  },
  {
    id: 2,
    icons: <GiChickenOven />,
    title: "Chicken",
  },
  {
    id: 3,
    icons: <GiFruitBowl />,
    title: "Fruits",
  },
  {
    id: 4,
    icons: <GiDrinkMe />,
    title: "Drinks",
  },
  {
    id: 5,
    icons: <GiIceCreamCone />,
    title: "Icecreams",
  },
  {
    id: 6,
    icons: <GiCakeSlice />,
    title: "Deserts",
  },
  {
    id: 7,
    icons: <GiBowlOfRice />,
    title: "Rice",
  },
  {
    id: 8,
    icons: <FaFish />,
    title: "Fish",
  },
  {
    id: 9,
    icons: <MdOutlineFastfood />,
    title: "Curry",
  },
];

export default function TopDish() {
  return (
    <div className=" mx-2 lg:mx-12 mt-24 mb-28 ">
      <h1 className=" text-[24px] mb-10 flex flex-col justify-center items-center ">
        Our Hot Dishes
      </h1>
      <div className=" flex justify-start gap-3 lg:justify-center lg:gap-7 overflow-x-scroll scrollbar-hidden  scroll-smooth  ">
        {HotDish.map(({ id, icons, title }) => {
          return (
            <div
              key={id}
              className="flex flex-col gap-4 items-center px-4 py-5 group hover:bg-red-500 bg-white shadow-lg border rounded-[8px] min-w-[100px] min-h-[115px]"
            >
              <div className="p-2 bg-red-500 group-hover:bg-[#faccd0] group-hover:text-black text-white rounded-full text-[22px]">
                {icons}
              </div>
              <div className=" group-hover:text-white text-[14px] ">
                {title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
