import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown, FaSearch } from "react-icons/fa";
import { useState } from "react";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdown, setDropdown] = useState(false); // Desktop dropdown state
  const [mobileDropdown, setMobileDropdown] = useState(false); // Mobile dropdown state
  const [othersDropdown, setOthersDropdown] = useState(false); // For desktop "Others"
  const [mobileOthersDropdown, setMobileOthersDropdown] = useState(false); // For mobile "Others"

  const handleClick = () => setNav(!nav);

  const navItems = ["Categories", "Others", "blog", "blog", "blog", "blog"];

  const categoriesSubItems = ["Design", "Programming", "Development"];
  const othersSubItems = ["Design", "Programming", "Development"];

  // search input value to console
  const handleSearch = (e) => {
    console.log(e.target.value);
  };

  const renderDropdownItem = (item, subItems, isOpen, toggleFunc) => (
    <>
      <div className="flex items-center justify-center" onClick={toggleFunc}>
        {item} <FaChevronDown className="ml-2" />
      </div>
      {isOpen && (
        <ul className="w-full mt-2 bg-gray-300/20">
          {subItems.map((subItem, subIndex) => (
            <li
              key={subIndex}
              className="px-4 py-2 my-2 border-b border-opacity-30"
            >
              <Link to={`/${subItem}`} onClick={() => setNav(false)}>
                {subItem}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <div className="bg-gray-50 shadow-md p-5 md:px-8 text-black fixed top-0 left-0 w-full z-50">
      <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 h-16 text-center">
        {/* Row for Hamburger, Logo, and Login (on sm devices) */}
        <div className="flex items-center justify-between w-full">
          {/* Hamburger Menu */}
          <div className="flex items-center gap-3">
            <div onClick={handleClick} className="md:hidden cursor-pointer">
              {nav ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </div>

            {/* Logo */}
            <img src={logo} alt="Logo" className="w-24 md:w-28" />
          </div>

          <div className="block md:hidden">
            <Link to="/login">
              <button className="px-4 py-1 font-semibold text-white bg-blue-300 border border-transparent rounded-lg hover:bg-white hover:border-blue-300 hover:text-black transition duration-200">
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Search bar (moves to next line in sm devices) */}
        <div className="flex w-full flex-col sm:flex-col lg:items-center lg:justify-between my-4 lg:my-0">
          <div className="relative w-full sm:mt-2 sm:w-full">
            <input
              type="text"
              placeholder="স্কিল কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন"
              className="w-full py-2 pl-10 pr-3 text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-300"
              onChange={handleSearch}
            />
            <FaSearch className="absolute top-3 left-3 text-gray-300" />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center ml-4 lg:ml-10">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative px-4 font-semibold cursor-pointer"
              onMouseEnter={() =>
                item === "Categories"
                  ? setDropdown(true)
                  : item === "Others" && setOthersDropdown(true)
              }
              onMouseLeave={() =>
                item === "Categories"
                  ? setDropdown(false)
                  : item === "Others" && setOthersDropdown(false)
              }
            >
              {item === "Categories" ? (
                <>
                  <span className="flex items-center">
                    Categories <FaChevronDown className="ml-2" />
                  </span>
                  {dropdown && (
                    <ul className="absolute left-0 py-2 bg-blue-300 shadow-lg w-52 top-full">
                      {categoriesSubItems.map((subItem, subIndex) => (
                        <Link key={subIndex} to={`/${subItem}`}>
                          <li className="px-4 py-2 my-1">{subItem}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </>
              ) : item === "Others" ? (
                <>
                  <span className="flex items-center">
                    Others <FaChevronDown className="ml-2" />
                  </span>
                  {othersDropdown && (
                    <ul className="absolute left-0 py-2 bg-blue-300 shadow-lg w-52 top-full">
                      {othersSubItems.map((subItem, subIndex) => (
                        <Link key={subIndex} to={`/${subItem}`}>
                          <li className="px-4 py-2 my-1">{subItem}</li>
                        </Link>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link to={item === "Home" ? "/" : `/${item}`}>{item}</Link>
              )}
            </li>
          ))}
        </ul>

        {/* Sign-Up and Login for lg devices */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Link to="/login">
            <button className="px-4 py-2 font-semibold">Login</button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-1 font-semibold text-white bg-blue-300 border border-transparent rounded-lg hover:bg-white hover:border-blue-300 hover:text-black transition duration-200">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="relative">
          {/* Background overlay when sidebar is open */}

          <ul
            className={`fixed z-40 top-28 left-0 w-8/12 py-5 h-screen overflow-y-scroll bg-gray-50 flex flex-col justify-start items-start transition-transform ${
              nav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative w-full p-2 border-b border-opacity-30 text-base cursor-pointer"
              >
                {item === "Categories" ? (
                  renderDropdownItem(
                    item,
                    categoriesSubItems,
                    mobileDropdown,
                    () => setMobileDropdown(!mobileDropdown)
                  )
                ) : item === "Others" ? (
                  renderDropdownItem(
                    item,
                    othersSubItems,
                    mobileOthersDropdown,
                    () => setMobileOthersDropdown(!mobileOthersDropdown)
                  )
                ) : (
                  <Link
                    to={item === "Home" ? "/" : `/${item}`}
                    onClick={() => setNav(false)}
                  >
                    {item}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
