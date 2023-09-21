import { MdOutlineKeyboardBackspace, MdOutlineMessage } from "react-icons/md";
import EmptyCartImg from '../assets/img/emptyCart.svg'
import { motion } from "framer-motion";

export default function ContactUs(props) {
  const hide =props.contactShow;
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className={`w-full h-screen md:w-[350px] bg-white md:backdrop-blur-sm flex flex-col z-[50] drop-shadow-xl fixed top-0 left-0`}
    >
      <div className="w-full flex flex-row-reverse items-center bg-white justify-between px-4 py-2 cursor-pointer">
      <motion.div
        whileTap={{ scale: 0.8 }}
        
      >
        <MdOutlineKeyboardBackspace onClick={hide} className="text-textColor text-2xl " />
      </motion.div>

      <motion.div
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 0.9 }}
        className="flex items-center justify-center gap-x-2 px-2"
      >
        <MdOutlineMessage className="text-xl cursor-pointer text-orange-600" />
        <span>CONTACT US</span>
      </motion.div>
    </div>

    {/* form here */}
    <div className="h-full w-full flex items-center flex-col justify-center px-4 bg-primary">
        <img src={EmptyCartImg} alt="not found" className="w-[30%] h-[30%]" />
      <form action="#" className="mb-6 w-full flex items-center justify-center gap-y-3 flex-col">
      <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-6 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Your Name"
            
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-6 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Email ID"
           
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-6 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Subject"
            
          />
        </div>
        <div className="mb-6">
          <textarea
            className="form-control block min-w-full min-h-[25vh] px-8 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Message"
            
          />
        </div>
        <button
          type="submit"
          className="text-white bg-orange-600 hover:bg-orange-700 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"
            
        >
          Send Message
        </button>
      </form>
      <p className="mb-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
        <a href="mailto:manishthapaliya8888@gmail.com" className="hover:underline">
        manishthapaliya8888@gmail.com
        </a>
      </p>
      <p className="text-sm cursor-pointer text-gray-500 dark:text-gray-400">
        <a href="tel:+9779845342523" className="hover:underline">
          +977 9845343534
        </a>
      </p>
    </div>
    </motion.div>
  );
};