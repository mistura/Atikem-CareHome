import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
  PhotoIcon
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: HomeIcon,
    name: "About",
    path: "/about",
    element: <Profile />,
  },
  {
    icon: UserCircleIcon,
    name: "Contact",
    path: "/contact",
    element: <Profile />,
    
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Services",
    path: "/services",
    element: <SignIn />,
  },
  {
    icon: PhotoIcon,
    name: "Gallery",
    path: "/blog",
    element: <SignUp />,
  },
  {
    icon: PhotoIcon,
    name: "Privacy Policy",
    path: "/home",
    element: <SignUp />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
