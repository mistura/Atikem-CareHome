import React from "react";
import PropTypes from "prop-types";
import Logo from '../../../public/img/logo1-resized.png'
import { Link } from "react-router-dom";
import Socials from "@/data/socials";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function Navbar({ brandName, routes, action }) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-1 text-inherit  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {routes.map(({ name, path, icon, href, target }) => (
        <Typography
          key={name}
          as="li"
          variant="medium"
          color="inherit"
          className="capitalize hover:text-[#2d6a81]"
        >
          {href ? (
            <a
              href={href}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </a>
          ) : (
            <Link
              to={path}
              target={target}
              className="flex items-center gap-1 p-1 font-normal"
            >
              {icon &&
                React.createElement(icon, {
                  className: "w-[18px] h-[18px] opacity-75 mr-1",
                })}
              {name}
            </Link>
          )}
        </Typography>
      ))}
    </ul>
  );

  return (
    // <MTNavbar className="w-full">
      <div className=" mx-auto flex items-center justify-between text-blue border rounded-white">
        <Link to="/">
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-bold">
            <img src={Logo} />
          </Typography>
        </Link>
        <div className="hidden lg:block">{navList}</div>
        
       
          <div className="flex items-center gap-2">
             {Socials.map(({ color, name }) => (
                <IconButton key={name} color={color} variant="gradient">
                  <i className={`fa-brands md:text-lg text-xs fa-${name}`} />
                </IconButton>
              ))}

              {React.cloneElement(action, {
            className: "hidden md:flex",
          })} 
          
         </div>
        
        
        <IconButton
          variant="text"
          size="sm"
          color="white"
          className="ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
    // </MTNavbar>
  );
}
;;
Navbar.defaultProps = {
  brandName: "Atikem",
  action: (
    <a
      href="/home"
    >
      <button  size="sm" className="bg-[#0db1d5] px-2 py-2 border text-white border-white hover:bg-[#3174b4] hover:shadow-xl hover:border-[#3174b4] rounded-lg">
              Book Reservation
            </button>
    </a>
  ),
};

Navbar.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.node,
};

Navbar.displayName = "/src/widgets/layout/navbar.jsx";

export default Navbar;
