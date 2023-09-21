import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { GiWaterRecycling } from "react-icons/gi";
import { IoMdBasket } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import fruits2 from "../../assets/i1.png";
import CartArray from "./CartArray";
import { usePost } from "../../Context/ContextProvider";



export default function Cart(props) {
  
 const{Added} = usePost();
 const totalPrice = Added.reduce((sum, { price, count }) => {
  return sum + price * count;
}, 0);



 
  const cartClose = props.show;
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className=" w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[101] drop-shadow-xl fixed top-0 right-0 "
    >
      <div className="  flex justify-between items-center px-3 py-4 ">
        <HiOutlineArrowNarrowLeft onClick={cartClose} />
        <div className="cursor-pointer flex gap-2 items-center  ">
          <p>Cart</p>
          <IoMdBasket className=" text-[#e80013] text-[24px] " />
        </div>
        <motion.div
          whileHover={{ scale: 0.9 }}
          className=" cursor-pointer flex gap-2 items-center "
        >
          <p>clear</p>
          <GiWaterRecycling className=" text-[#e80013] text-[14px] " />
        </motion.div>
      </div>

      {/* fot the black box inside cart */}

      <div className=" w-full h-full rounded-t-[2rem]  bg-cartBg flex flex-col ">
        <div className=" w-full h-[340px] md:h-42 px-0 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-hidden ">
          <div className="">
          <CartArray />
          </div>
          

         
        </div>

        {/* total and checkout */}
        <div className="w-full mt-2 text-sm md:mt-0 flex-1 rounded bg-cartItem rounded-t-[2rem] px-8 py-2 flex flex-col items-center justify-evenly ">
          <div className="w-full flex items-center justify-between text-gray-400 text-base md:text-md  ">
            <p>Sub Total </p>
            <p>-</p>
            <p>
              <span className=" text-[#e80013] ">$</span> {totalPrice.toFixed(2)}
            </p>
          </div>

          <div className="w-full flex items-center justify-between text-gray-400 text-base md:text-lg  ">
            <p>Delivery</p>
            <p>-</p>
            <p>
              <span className=" text-[#e80013] ">$</span> {totalPrice.toFixed(2)}
            </p>
          </div>

          <hr className=" w-[80%] mx-auto  " />
          <div className="w-full flex items-center justify-between text-gray-50 text-base md:text-lg uppercase  ">
            <p>TOTAL</p>
            <p>-</p>
            <p>
              <span className=" text-[#e80013] ">$</span> {totalPrice.toFixed(2)}
            </p>
          </div>

          <motion.div
            whileTap={{ scale: 0.8 }}
            className=" cursor-pointer py-2   w-[85%] mx-auto  px-2  flex justify-center  text-[18px] text-white bg bg-gradient-to-r from-orange-300  rounded-[20px] to-orange-400 "
          >
            Checkout ${totalPrice.toFixed(2)}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
