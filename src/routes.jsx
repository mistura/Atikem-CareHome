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
    name: "About Us",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Contact",
    path: "/home",
    element: <Profile />,
    
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Services",
    path: "/home",
    element: <SignIn />,
  },
  {
    icon: PhotoIcon,
    name: "Gallery",
    path: "/home",
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
