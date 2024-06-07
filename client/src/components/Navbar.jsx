import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Link, NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";

const Navbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <li className="p-1 font-normal">
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </li>
      <li className="p-1 font-normal">
        <NavLink to="/about" className="flex items-center">
          About Us
        </NavLink>
      </li>
      <li className="p-1 font-normal">
        <NavLink to="/pricing" className="flex items-center">
          Plan & Pricing
        </NavLink>
      </li>
      <li className="p-1 font-normal">
        <NavLink to="/blogs" className="flex items-center">
          Blogs
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="sticky top-0 z-10 h-max max-w-full bg-white rounded-none shadow-lg">
      <div className="flex items-center justify-between text-blue-gray-900 shadow-lg px-4 py-2 lg:px-8 lg:py-4">
        <Link to="/" className="mr-4 cursor-pointer py-1.5 font-medium">
          The Elite International
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          {!localStorage.getItem("token") ? (
            <div className="flex items-center gap-x-3">
              <Link
                to="/login"
                // className="hidden lg:inline-block shadow-md py-1 px-3 rounded-md"
                className="hidden lg:inline-block text-white bg-slate-900 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  font-medium rounded-md text-sm px-5 py-1 text-center me-2 "
              >
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                // className="hidden lg:inline-block shadow-md py-1 px-3 rounded-md"
                className="hidden lg:inline-block text-white bg-slate-900 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  font-medium rounded-md text-sm px-5 py-1 text-center me-2 "
              >
                <span>Register</span>
              </Link>
            </div>
          ) : (
            <ProfileButton />
          )}

          <div
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? <RxCross2 size={23} /> : <RxHamburgerMenu size={23} />}
          </div>
        </div>
      </div>
      {openNav && (
        <div className="pl-5 pt-2">
          {navList}
          <div className="flex items-center justify-around gap-x-4 py-2">
            <Link
              to="/login"
              // className="shadow-md w-32 py-1 text-center rounded-md"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-md text-sm px-14 py-2.5 text-center me-2 mb-2 "
            >
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              // className="shadow-md w-32 py-1 text-center rounded-md"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-md shadow-blue-500/50 dark:shadow-md dark:shadow-blue-800/80 font-medium rounded-md text-sm px-14 py-2.5 text-center me-2 mb-2 "
            >
              <span>Resgister</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
