import Link from "next/link";
import { RightArrow } from "./SVG";

export const ButtonNews = (buttonClassName: string) => {
  return (
    <button
      className={
        "px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 rounded-md focus:ring focus:ring-blue-300 focus:ring-opacity-80 fo sm:mx-2 hover:bg-blue-600 focus:outline-none focus:bg-blue-600 " +
        buttonClassName
      }
    >
      Get Started
    </button>
  );
};

export const ButtonHeader = ({ href = "/" }) => {
  return (
    <Link href="/about">
      <div className="inline-flex justify-between items-center py-3 px-5 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 cursor-pointer">
        Learn morefsdlkfjdkasjkfldkslfjkldkl
        <RightArrow className="w-6 h-6" />
      </div>
    </Link>
  );
};
export const ButtonCards = () => (
  <a
    href="#"
    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Read more
    <RightArrow />
  </a>
);

export const SmallRoundButton = () => {
  return (
    <button
      type="button"
      className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
      aria-current="true"
      aria-label="Slide 1"
      data-carousel-slide-to={0}
    />
  );
};
