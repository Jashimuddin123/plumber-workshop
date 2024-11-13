import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false); // Close the menu when a NavLink is clicked
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = (
    <>
      <li className="text-base md:text-lg lg:text-lg text-white bg-black border-b border-white lg:bg-white lg:text-black">
        <Link to="/" onClick={handleNavLinkClick}>Home</Link>
      </li>
      <li className="text-base md:text-lg lg:text-lg text-white bg-black border-b border-white lg:bg-white lg:text-black">
        <Link to="/plumber" onClick={handleNavLinkClick}>Plumber Emergency</Link>
      </li>
      <li className="text-base md:text-lg lg:text-lg text-white bg-black border-b border-white lg:bg-white lg:text-black">
        <Link to="/renovationWorker" onClick={handleNavLinkClick}>Renovation Worker</Link>
      </li>
      <li className="text-base md:text-lg lg:text-lg text-white bg-black border-b border-white lg:bg-white lg:text-black">
        <Link to="/sewerage" onClick={handleNavLinkClick}>Sewerage</Link>
      </li>
      <li className="text-base md:text-lg lg:text-lg text-white bg-black border-b border-white lg:bg-white lg:text-black">
        <Link to="/worksArea" onClick={handleNavLinkClick}>Works Area</Link>
      </li>
      <li className="text-base border-b bg-black text-white border-white md:text-lg lg:text-lg lg:bg-white lg:text-black">
        <Link to="/contact" onClick={handleNavLinkClick}>Contact</Link>
      </li>
      <li>
        <button className="btn btn-info rounded-full
         py-1 md:px-6 mr-40 px-20 text-sm md:text-md lg:text-lg text-white">
          085 _ 0026311
        </button>
      </li>
    </>
  );

  return (
    <div className="lg:ml-20">
      <div className="navbar sticky top-0 shadow bg-white z-20 justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleMobileMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            {isMobileMenuOpen && (
              <ul tabIndex={0} className="menu dropdown-content bg-white mt-3 w-48 p-2 shadow rounded-box z-10">
                {navLinks}
              </ul>
            )}
          </div>
          <img
            src="https://i.ibb.co/4Y09h7L/logo-24uurloodgieter-1.png"
            alt="Logo"
            className="h-12 w-32 lg:w-full lg:h-24  mr-4  lg:mr-36"
          />
        </div>

        <div className="navbar-center hidden lg:flex justify-between w-full">
          <ul className="menu menu-horizontal px-1 ml-auto">{navLinks}</ul>
        </div>

        <div className="navbar-end ml-10"></div>
      </div>
    </div>
  );
};

export default Navbar;
