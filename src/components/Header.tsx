import { ButtonHeader } from "./Button";
export const Heading: FC = () => {
  return (
    <header
      className="container mx-auto flex flex-col items-center  min-h-screen p-6 gap-3 text-center
    "
      // sm:bg-red-400 md:bg-purple-600
    >
      <h1
        className=" text-6xl font-extrabold tracking-tight
        leading-none text-gray-900
        md:text-5xl lg:text-6xl dark:text-white
      "
      >
        We invest in the world’s potential
      </h1>
      <div className="flex flex-col justify-center items-center py-4 gap-3">
        <p
          className=" text-lg font-normal
        text-gray-500
        lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
        >
          Here at Flowbite we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
        <div
          className="flex flex-col
        justify-center items-stretch
        gap-3 max-w-sm w-full md:flex-row "
        >
          <ButtonHeader />
        </div>
      </div>
      {/* <EarthSVG /> */}
    </header>
  );
};

// export const Heading = () => {
//   return (
//     <header className="container mx-auto flex flex-col items-center  min-h-screen p-8">
//       <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//         We invest in the world’s potential
//       </h1>
//       <p className="my-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//         Here at Flowbite we focus on markets where technology, innovation, and
//         capital can unlock long-term value and drive economic growth.
//       </p>
//       <a
//         href="#"
//         className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
//       >
//         Learn more
//         <svg
//           className="ml-2 -mr-1 w-5 h-5"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fillRule="evenodd"
//             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </a>
//     </header>
//   )
// };

import { FC, useState } from "react";
import { useEffect } from "react";
type headProp = {
  children: React.ReactNode;
  description: string;
  heading: string;
};
export const HeaderContainer = ({
  children,
  description = "",
  heading = "",
}: headProp): JSX.Element => {
  useEffect;
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            {heading}
          </h1>
          <div className="flex justify-center mx-auto mt-6">
            <span className="inline-block w-40 h-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full" />
            <span className="inline-block w-1 h-1 bg-blue-500 rounded-full" />
          </div>
          <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
      <div
        className="
      -mt-52 sm:-mt-60 md:-mt-72
      flex justify-center "
      >
        {children}
      </div>
    </section>
  );
};

// export const Heading = ({ className = "" }) => {
//   return (
//     <header className="container mx-auto flex flex-col items-center  min-h-screen p-8 gap-5">
//       <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
//         We invest in the world’s potential
//       </h1>
//       <div>
//         <p className="my-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
//           Here at Flowbite we focus on markets where technology, innovation, and
//           capital can unlock long-term value and drive economic growth.
//         </p>
//         <div className="flex flex-col justify-center items-stretch gap-3 max-w-md "></div>

//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-32 stroke-green-700 "
//         >
//           <path
//             fillRule="evenodd"
//             d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.654-.261a2.25 2.25 0 01-1.384-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//     </header>
//   );
// };
