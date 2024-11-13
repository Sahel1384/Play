import { useEffect, useState } from "react";
import { FaAngleUp, FaBars, FaTimes } from "react-icons/fa";
import Theme from "../Theme/Theme";
import { NavLink } from "react-router-dom";

function NavbarForPages() {
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

  const [showPages, setShowPages] = useState(false);
  // show pages list
  const showPagesEvent = () => {
    setShowPages(!showPages);
  };
  // hide pages list
  const hidePagesEvent = () => {
    setShowPages(false);
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const showDropdownEvent = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {/* {navbar && ( */}
      <div
        className={`flex shadow-sm z-50 bg-white/15 backdrop-blur-lg justify-between items-center px-5 sm:px-20 md:px-12 h-16 py-5 fixed top-0 left-0 right-0`}
      >
        <div>
          <div
            className={`bg-play1 w-40 bg-contain h-11 bg-no-repeat dark:bg-play2 `}
          ></div>
        </div>
        <div className="hidden lg:block">
          <ul className={`flex gap-7 font-semibold mt-7 `}>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              About
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Team
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Contact
            </li>
            <li className="hover:text-gray-500 dark:text-white cursor-pointer">
              Blog
            </li>
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
          </ul>
        </div>
        <div className="flex gap-5 items-center justify-center">
          <div>
            <Theme className="text-black" />
          </div>
          <button
            className={`hover:text-gray-300 font-semibold hidden sm:block dark:text-white`}
          >
            <NavLink to="/signIn">Sign In</NavLink>
          </button>
          <button
            className={` text-white bg-[#3758f9] py-2 px-4 rounded-md hidden sm:block font-semibold text-sm hover:bg-white hover:text-black duration-200`}
          >
            <NavLink to="/signUp">Sign Up</NavLink>
          </button>
          <div>
            <button className={`block lg:hidden`} onClick={showDropdownEvent}>
              {showDropdown ? (
                <FaTimes className={`text-xl  dark:text-white`} />
              ) : (
                <FaBars className={`text-xl   dark:text-white`} />
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
        </div>
      </div>

      {/* go to top */}
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

export default NavbarForPages;
