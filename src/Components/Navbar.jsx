import { IoSunnyOutline } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const { darkMode } = useSelector((store) => store.theme);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };
  return (
    <header className="flex justify-between p-2 bg-slate-50 shadow-sm itmes-center h-3">
      <h3>Exclusive</h3>
      <nav
        className=" flex-col hidden sm:flex sm:flex-row sm:justify-between w-[30%]"
        ref={navRef}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/login">Login</NavLink>
        <button className="sm:hidden" onClick={showNavbar}>
          <IoMdClose />
        </button>
      </nav>
      <div className="">
        <div className="flex relative">
          <input
            type="text"
            className="border-[1px] border-gray-900 pt-1 pl-6 pb-1 rounded-sm"
          />
          <CiSearch className="absolute left-0 top-2 ml-1" />
        </div>
        <div className="nav-icon"></div>
      </div>
      <div>{darkMode ? <IoSunnyOutline /> : <IoSunny />}</div>
      <button className="" onClick={showNavbar}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
}

export default Navbar;
