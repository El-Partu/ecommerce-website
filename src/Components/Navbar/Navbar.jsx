import { IoSunnyOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
// import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { useDarkMode } from "../../utils/customHook";
import { toggleThemeButton } from "../../Global State/theme/themeProvider";
function Navbar() {
  const { darkMode } = useSelector((store) => store.theme);
  const [openMenu, setOpenMenu] = useState(false);
  const dispatch = useDispatch();
  useDarkMode();
  return (
    <div className={`${openMenu ? "pt-0" : "pt-[8vh]"} md:pt-[13vh] `}>
      <header
        className={`flex bg-[#fff] md:h-[12vh] justify-between ${
          openMenu ? "relative z-50 top-0" : "fixed w-full top-0"
        } items-center px-1 drop-shadow-md pt-6 pb-2 ${
          darkMode === "dark" ? "bg-slate-900 text-white" : ""
        }`}
      >
        <nav className="flex justify-between  w-full md:w-[90%] md:ml-auto mr-auto  ">
          <h1 className="text-xl z-50  static">Exclusive</h1>
          <div
            className={`${
              openMenu ? "block" : "hidden"
            } absolute left-0 top-14 bg-slate-300 w-full min-h-40 flex flex-col items-center justify-around z-50 duration-75   md:z-0  md:flex-row md:flex md:w-[50%] md:justify-between md:min-h-0 md:static p-1 md:bg-transparent `}
          >
            <NavLink
              to="/"
              className="block hover:bg-white hover:text-blue-800 hover:w-full text-center md:inline md:hover:w-auto md:hover:scale-125 md:hover:bg-transparent"
            >
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="block hover:bg-white hover:text-blue-800 hover:w-full text-center md:inline md:hover:w-auto md:hover:scale-125 md:hover:bg-transparent"
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className="block hover:bg-white hover:text-blue-800 hover:w-full text-center md:inline md:hover:w-auto md:text-auto md:hover:scale-125 md:hover:bg-transparent"
            >
              About
            </NavLink>
            <NavLink
              to="/login"
              className="block hover:bg-white hover:text-blue-800 hover:w-full text-center md:inline md:hover:w-auto md:hover:scale-125 md:hover:bg-transparent"
            >
              Login
            </NavLink>
          </div>

          <div className="hidden">
            <input type="text" className="" />
            <CiSearch className="" />
          </div>
          <div className="flex justify-between min-w-40  md pr-2">
            <div className="flex relative items-center">
              <span className="absolute left-[14px] border-[3px]  w-[25px] h-[25px] text-center text-wrap rounded-[50%] bottom-[14px]  pb-6 border-red-700 bg-red-700 text-white">
                0
              </span>
              <NavLink>
                <FaHeart
                  className={`${
                    darkMode === "dark" ? "text-white" : "text-[#533c3c] "
                  }`}
                  size={22}
                />
              </NavLink>
            </div>
            <div className="flex relative items-center">
              <span className="absolute left-[14px] border-[3px]  w-[25px] h-[25px] text-center text-wrap rounded-[50%] bottom-[14px]  pb-6 border-red-700 bg-red-700 text-white">
                0
              </span>
              <NavLink>
                <FaCartShopping
                  className={`${
                    darkMode === "dark" ? "text-white" : "text-[#533c3c] "
                  }`}
                  size={22}
                />
              </NavLink>
            </div>
            <button onClick={() => dispatch(toggleThemeButton())}>
              {darkMode === "dark" ? (
                <IoSunnyOutline size={22} />
              ) : (
                <IoSunny size={22} />
              )}
            </button>
            <button
              className="md:hidden"
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              {openMenu ? (
                <IoMdClose size={22} />
              ) : (
                <GiHamburgerMenu size={22} />
              )}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
