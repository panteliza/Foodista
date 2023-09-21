import React from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { usePost } from "../../Context/ContextProvider";
import Empty from '../../assets/img/emptyCart.svg'

const CartArray = () => {
  const { Added, setAdded } = usePost();

  const handleCountChange = (id, action) => {
    // Find the item with the given id
    const item = Added.find((item) => item.id === id);
    if (!item) return;

    // Update the count based on the given action
    if (action === "increment") {
      item.count += 1;
    } else if (action === "decrement") {
      item.count -= 1;
    }

    // Update the state
    setAdded([...Added]);
  };

  if (!Added || Added.length === 0) {
    return <div className=" text-white ml-20 ">
      
      <img src={Empty} alt="fsfs" />
      <p className=" mt-4 ml-2 ">No items in the cart.</p>
      
      </div>;
  }

  return (
    <div className="flex flex-col gap-2">
      {Added.map(({ id, heading, price, image, count }) => (
        <div
          key={id}
          className="flex items-center mx-6 rounded-md bg-[#2e3033] text-sm justify-between"
        >
          <div className="flex items-center text-white gap-2 ml-5">
            <img src={image} alt="ice-cream" className="w-20" />
            <div className="flex flex-col">
              <p>{heading}</p>
              <p>
                <span className="text-[#e80013]">$</span> {price}
              </p>
            </div>
          </div>
          <div className="text-white flex gap-3 items-center mr-5 cursor-default">
            <motion.span
              onClick={() => handleCountChange(id, "decrement")}
              whileTap={{ scale: 0.8 }}
            >
              -
            </motion.span>
            <motion.span whileTap={{ scale: 0.8 }}>{count}</motion.span>
            <motion.span
              onClick={() => handleCountChange(id, "increment")}
              whileTap={{ scale: 0.8 }}
            >
              +
            </motion.span>
            <motion.span
              whileTap={{ scale: 0.8 }}
              className="bg-[#e80013] py-[2px] px-[2px] rounded-md"
            >
              <MdDelete />
            </motion.span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartArray;
