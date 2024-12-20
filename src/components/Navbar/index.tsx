import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Chevron down icon
import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { NavLink } from "react-router-dom";

// type Props = {};

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  // Scroll handler function
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  // useEffect with the scroll handler assigned to a variable
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      {/* Motion for navbar transition */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={
          active
            ? { y: 0, opacity: 1, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }
            : { y: 0, opacity: 1, boxShadow: "none" }
        }
        transition={{ duration: 0.3 }}
        className={`${
          active ? "fixed top-0 left-0 right-0 bg-white py-4" : "sticky py-6"
        } ${flexBetween} z-50 w-full transition-all duration-300`}
      >
        <div className="mx-auto w-5/6">
          <div className={`${flexBetween}`}>
            {/* Logo */}
            <div>
              <NavLink to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="transition-all duration-300 h-9 md:h-12 lg:h-14"
                />
              </NavLink>
            </div>

            {/* Right side */}
            {isAboveMediumScreens ? (
              <div>
                <ul
                  className={`${flexBetween} font-medium text-gray-400 gap-24 text-md relative`}
                >
                  {/* About NavLink with Dropdown */}
                  <li className="relative group">
                    <button
                      id="dropdownHoverButton"
                      className="text-gray-700 hover:text-black inline-flex items-center"
                    >
                      About
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>
                    <div
                      id="dropdownHover"
                      className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                        <li>
                          <NavLink
                            to="/about"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            About Us
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/contact"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Contact Us
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Services NavLink with Dropdown */}
                  <li className="relative group">
                    <button
                      id="dropdownHoverButton"
                      className="text-gray-700 hover:text-black inline-flex items-center"
                    >
                      Services
                      <ChevronDownIcon className="w-4 h-4 ml-1" />
                    </button>
                    <div
                      id="dropdownHover"
                      className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block"
                    >
                      <ul className="py-2 text-sm text-gray-700">
                      <li>
                          <NavLink
                            to="/ImpactService"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Impact Service
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/CommunityService"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Community Service
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/ServiceAction"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Service Action
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </li>

                  {/* Call To Action */}
                  <li>
                    <NavLink
                      to="/cta"
                      className={({ isActive }) =>
                        isActive ? "text-black" : "text-gray-700"
                      }
                    >
                      Call To Action
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/signup">
                    <button className="bg-transparent text-md text-black px-8 py-2 rounded-3xl translate-x-3 hover:bg-transparent hover:outline hover:outline-spotlight-yellow transition-all duration-300">
                      Request Demo
                    </button>
                    </NavLink>
                  </li>

                  {/* Login Button */}
                  <li>
                    <NavLink to="/signup">
                    <button className="bg-spotlight-yellow text-md text-black px-8 py-2 rounded-3xl translate-x-3 hover:bg-transparent hover:outline hover:outline-spotlight-yellow transition-all duration-300">
                      Login
                    </button>
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="w-6 h-6 text-black" />
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU MODAL */}
      <motion.div
        initial={{ x: "100%" }}
        animate={isMenuToggled ? { x: 0 } : { x: "100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed right-0 top-0 h-full bg-white shadow-lg w-[300px] z-[100] transform"
      >
        <div className="p-10 flex justify-end">
          <button onClick={() => setIsMenuToggled(false)}>
            <XMarkIcon className="w-6 h-6 text-black" />
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-10 text-md font-medium text-gray-700">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink to="/cta">Call To Action</NavLink>
          </li>
          <li>
            <NavLink to="/signup">
            <button className="bg-spotlight-yellow text-black px-12 py-2 rounded-3xl hover:bg-transparent hover:outline hover:outline-spotlight-yellow">
              Login
            </button>
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
