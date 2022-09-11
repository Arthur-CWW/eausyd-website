import {
  BurgerSVG,
  EffectiveAltruismLogo,
  // RightArrowSVG
} from "./SVG";
// import Image from "next/image"

// import Image from "next/image"
import Link from "next/link";
import { useState } from "react";

const Page = ({ link = "#", id = "hello", children = undefined }) => {
  return (
    <li className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
      <Link href={link}>{children == undefined ? id : children}</Link>
    </li>
  );
};

export const Nav = () => {
  const pages = [
    { link: "/", id: "Home" },
    { link: "/about", id: "About" },
    { link: "/past-events", id: "Past Events" },
    { link: "/intro-program", id: "Intro Program" },
    { link: "/FAQ", id: "frequently asked questions" },
  ];
  const [clicked, setclicked] = useState(false);
  // useEffect(() => setclicked(false), []);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="https://flowbite.com/" className="flex items-center ">
          <EffectiveAltruismLogo className="w-10 h-10" />
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 "
          aria-controls="navbar-default"
          aria-expanded="false"
          id="burger-menu"
          onClick={() => {
            console.log(clicked);
            setclicked(!clicked);
          }}
        >
          <span className="sr-only">Open main menu</span>

          <BurgerSVG className="h-10 w-10" />
        </button>
        {/* https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node */}

        <div
          className={`md:block w-full  md:w-auto ${
            clicked ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          {/* menu */}
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {pages.map((page) => (
              <Page key={page.id} {...page}></Page>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
