import { useEffect, useRef, useState } from "react";
// import play from "../../assets/img/logo/logo-white.svg";
// import play1 from "../../assets/img/logo/logo.svg";
import { FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import Theme from "../Theme/Theme";
import { NavLink } from "react-router-dom";
// go to the sections through the links variable exported start
export let aboutRef = "";
export let pricingRef = "";
export let teamRef = "";
export let contactRef = "";
// go to the sections through the links variable exported end

function Navbar() {
  // ref for sections imported start
  aboutRef = useRef(null);
  pricingRef = useRef(null);
  teamRef = useRef(null);
  contactRef = useRef(null);
  // ref for sections imported end

  // function go to the main section start
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  // function go to the main section end

  // show dropdown start
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownEvent = () => {
    setShowDropdown(!showDropdown);
  };
  // show dropdown end

  const [showPages, setShowPages] = useState(false);
  // show pages list
  const showPagesEvent = () => {
    setShowPages(!showPages);
  };
  // hide pages list
  const hidePagesEvent = () => {
    setShowPages(false);
  };

  // change navbar bg color
  const [navbar, setNavbar] = useState("bg-transparent");
  const [color, setColor] = useState("text-white");
  const [bgColor, setBgColor] = useState("bg-[#dedada29]");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbar(
          "bg-[rgba(215,222,254,0.6)] dark:bg-[#0000005e] backdrop-blur-md"
        );
        setColor("text-black");
        setBgColor("bg-[#3758f9]");
        setScrolled(true);
      } else {
        setNavbar("bg-transparent");
        setColor("text-white");
        setBgColor("bg-[#dedada29]");
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  // go to top btn show start
  const [goTop, setGoTop] = useState(false);
  useEffect(() => {
    const goTopBtn = () => {
      if (window.pageYOffset > 50) {
        setGoTop(true);
      } else {
        setGoTop(false);
      }
    };
    window.addEventListener("scroll", goTopBtn);
  }, []);
  // go to top btn show end

  // go to top btn function start
  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // go to top btn function end

  return (
    <>
      {/* navbar start */}
      <div
        className={`flex ${navbar} z-50 backdrop-blur-md justify-between items-center px-5 sm:px-20 md:px-12 h-16 py-5 fixed top-0 left-0 right-0`}
      >
        {/* navabr image start */}
        <div>
          <div
            className={
              scrolled
                ? `bg-play1 w-40 bg-contain h-11 bg-no-repeat dark:bg-play2`
                : `bg-play2 w-40 bg-contain h-11 bg-no-repeat dark:bg-play2`
            }
          ></div>
        </div>
        {/* navabr image end */}

        {/* navbar menu start */}
        <div className="hidden lg:block">
          <ul className={`flex gap-7 font-semibold mt-7 ${color}`}>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Home
            </li>
            <li
              onClick={() => scrollToSection(aboutRef)}
              className="hover:text-gray-500 dark:text-white cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => scrollToSection(pricingRef)}
              className="hover:text-gray-500 dark:text-white cursor-pointer"
            >
              Pricing
            </li>
            <li
              onClick={() => scrollToSection(teamRef)}
              className="hover:text-gray-500 dark:text-white cursor-pointer"
            >
              Team
            </li>
            <li
              onClick={() => scrollToSection(contactRef)}
              className="hover:text-gray-500 dark:text-white cursor-pointer"
            >
              Contact
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Blog
            </li>
            {/* show dropdown on hover and on leave start */}
            <li
              onMouseEnter={showPagesEvent}
              className="relative"
              onMouseLeave={hidePagesEvent}
            >
              <a className="hover:text-gray-500 dark:text-white cursor-pointer flex items-center">
                Pages{" "}
                <svg
                  className="ml-2 fill-current"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                </svg>
              </a>
              <div className="relative mt-7 right-10">
                {showPages ? (
                  <ul className="flex flex-col gap-3 items-start px-8 py-5 text-gray-600 rounded-sm font-semibold absolute -top-2 text-sm dark:bg-[#1f2a37] dark:text-white bg-white w-52">
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/about">About Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/pricing">Pricing Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/contact">Contact Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/blog1">Blog Grid Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/blog2">Blog Details Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/signUp">Sign Up Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/signIn">Sign In Page</NavLink>
                    </li>
                    <li className="hover:text-blue-600 cursor-pointer">
                      <NavLink to="/error">404 Page</NavLink>
                    </li>
                  </ul>
                ) : (
                  ""
                )}
              </div>
            </li>
            {/* show dropdown on hover and on leave end */}
          </ul>
        </div>
        {/* navbar menu end */}

        {/* navbar btns and icons start */}
        <div className="flex gap-5 items-center justify-center">
          {/* dark and light mode icon start */}
          <div>
            <Theme />
          </div>
          {/* dark and light mode icon end */}

          {/* sign in and sign up btns start */}
          <button
            className={`hover:text-gray-300 ${color} font-semibold hidden sm:block dark:text-white`}
          >
            <NavLink to="/signIn">Sign In</NavLink>
          </button>
          <button
            className={`${bgColor} text-white py-2 px-4 rounded-md hidden sm:block font-semibold text-sm hover:bg-white hover:text-black duration-200`}
          >
            <NavLink to="/signUp">Sign Up</NavLink>
          </button>
          {/* sign in and sign up btns end */}

          {/* btn shows the ul start */}
          <div>
            <button className={`block lg:hidden`} onClick={showDropdownEvent}>
              {showDropdown ? (
                <FaTimes className={`text-xl  ${color} dark:text-white`} />
              ) : (
                <FaBars className={`text-xl  ${color} dark:text-white`} />
              )}
            </button>

            {showDropdown ? (
              <div className="relative right-52 top-5 lg:hidden">
                <ul className="flex flex-col gap-5 items-start px-8 py-5 rounded-lg font-semibold absolute text-gray-600 text-sm dark:bg-[#1f2a37] dark:text-white bg-white w-52">
                  <li className="hover:text-blue-600 cursor-pointer">Home</li>
                  <li className="hover:text-blue-600 cursor-pointer">About</li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Pricing
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">Team</li>
                  <li className="hover:text-blue-600 cursor-pointer">
                    Contact
                  </li>
                  <li className="hover:text-blue-600 cursor-pointer">Blog</li>
                  <li onClick={showPagesEvent} className="relative">
                    <a className="hover:text-blue-600 cursor-pointer flex justify-between items-center">
                      Pages
                      <svg
                        className="ml-2 fill-current"
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z" />
                      </svg>
                    </a>
                    <div className="relative -mt-1 right-8">
                      {showPages ? (
                        <ul className="flex flex-col gap-2 items-start px-8 py-5 rounded-sm font-semibold absolute text-sm text-gray-600 dark:bg-[#1f2a37] dark:text-white bg-white w-52">
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/about">About Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/pricing">Pricing Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/contact">Contact Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/blog1">Blog Grid Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/blog2">Blog Details Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/signUp">Sign Up Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/signIn">Sign In Page</NavLink>
                          </li>
                          <li className="hover:text-blue-600 cursor-pointer">
                            <NavLink to="/error">404 Page</NavLink>
                          </li>
                        </ul>
                      ) : (
                        ""
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          {/* btn shows the ul end */}
        </div>
        {/* navbar btns and icons end */}
      </div>
      {/* navbar end */}

      {/* go to top btn */}
      {goTop && (
        <button
          onClick={top}
          className="fixed z-50 right-6 bottom-8 text-white bg-[#3758f9] shadow-lg py-2 rounded-md px-2"
        >
          <FaAngleUp />
        </button>
      )}
      {/* )} */}
    </>
  );
}

export default Navbar;
