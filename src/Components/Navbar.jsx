import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/plumber" activeClassName="text-red-500">Plumber Emergency</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/renovationWorker" activeClassName="text-red-500">Renovation Worker</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/sewerage" activeClassName="text-red-500">Sewerage</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/worksArea" activeClassName="text-red-500">Works Area</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg md:text-xl">
        <NavLink to="/contact" activeClassName="text-red-500">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 shadow bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu dropdown-content bg-white mt-3 w-48 p-2 shadow rounded-box z-10">
            {navLinks}
          </ul>
        </div>
        <img src="https://i.ibb.co/4Y09h7L/logo-24uurloodgieter-1.png" alt="Logo" 
        className="h-16 w-56" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-info rounded-full py-2 px-4 text-lg md:text-xl text-white">085_0026311</button>
      </div>
    </div>
  );
};

export default Navbar;
