import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative bg-black text-white px-4 pt-8 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 pt-6 text-center lg:text-left">
          <div className="w-full px-4 ">
            <Typography variant="h4" className="mb-4" color="white">
              {title}
            </Typography>
            <Typography className="font-normal text-[#808080]">
              {description}
            </Typography>
            <div className="   flex   ">
              {/* {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))} */}
              <img src="/public/img/logo3.png" alt="" className="w-[60%]"/>
            </div>
          </div>
          <div className="mx-auto mt-12 grid w-max grid-cols-3 gap-24 lg:mt-0">
            {menus.map(({ name, items }) => (
              <div key={name}>
                <Typography
                  variant="small"
                  color="#f4f0ec"
                  className="mb-2 block font-medium uppercase"
                >
                  {name}
                </Typography>
                <ul className="mt-3 list-[circle] list-blue text-xl" style={{color:"#0db1d5", fontWeight:"bolder"}}>
                  {items.map((item) => (
                    <li key={item.name} className="">
                      <Typography
                        as="a"
                        href={item.path}
                        target="_blank"
                        rel="noreferrer"
                        variant="small"
                        className="mb-2 block font-normal text-[#808080] hover:text-blue-gray-700"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-300" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-white"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "HeadQuarter",
  description: "Office 10, Bromley Hall, Leaside Business Centre, 44-46 Gillender Street, London E14 6RN",
  socials: "/public/img/logo1.png",
  menus: [
    {
      name: "useful links",
      items: [
        { name: "Home", path: "/home" },
        { name: "About Us", path: "/home"},
        {name: "Contact", path: "/home",},
        {
          name: "Services",
          path: "/home",
        },
        { name: "Blog", path: "/home"},
      ],
    },


    {
      name: "Quick Links",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },

    {
      name: "Services",
      items: [
        {
          name: "MIT License",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
        },
        {
          name: "Contribute",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
        },
        {
          name: "Change Log",
          path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
        },
        {
          name: "Contact Us",
          path: "https://creative-tim.com/contact-us?ref=mtk",
        },
      ],
    },
  ],
  copyright: (
    <>
      Copyright © {year} Atikem Care Home.
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
