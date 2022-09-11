/* eslint-disable @next/next/no-img-element */
import { SmallRoundButton } from "../components/Button";
import { NextPage } from "next";
import { UpChevron, RightSVG } from "../components/SVG";
import Image from "next/image";
// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };
const CarouselPage = ({
  image = "/",
  image_alt = "none",
  // TODO below
  // heading = "missing heading",
  // description = "missing desc",
  // link = "missing url",
}) => {
  return (
    <div className=" duration-700 ease-in-out bg-gray-800" data-carousel-item>
      <div className="object-cover relative md:h-screen md:aspect-video flex justify-center items-center">
        <img src={image} alt={image_alt} className="object-cover rounded-md" />
      </div>
    </div>
  );
};
const ChangePage = ({ isRight = false }) => {
  return (
    <button
      type="button"
      className={`absolute top-0 ${
        isRight ? "right-0" : "left-0"
      } z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none`}
      data-carousel-prev=""
      onClick={() => console.log(isRight ? "isright" : "isleft")}
    >
      <span
        className="inline-flex
        items-center justify-center w-8 h-8
        rounded-full      sm:w-10 sm:h-10
        bg-white/30 dark:bg-gray-800/30
        group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 "
      >
        <UpChevron className={`w-6 ${isRight ? "-rotate-90" : "rotate-90"} `} />
        <span className="sr-only">{isRight ? "Next" : "Previous"}</span>
      </span>
    </button>
  );
};
const Slide = () => {
  const cards = [
    {
      image: "/prototyping-images/leaves.jpg",
      image_alt: "alt",
      heading: "third",
      description: "missing desc",
      link: "https://unsplash.com/photos/7341741rqgI",
    },
    // {
    //   image: "/prototyping-images/waterfall.jpg",
    //   image_alt: "alt",
    //   heading: "secon",
    //   description: "missing desc",
    //   link: "https://unsplash.com/photos/7341741rqgI",
    // },
    // {
    //   image: "/prototyping-images/leaves.jpg",
    //   image_alt: "alt",
    //   heading: "missing heading",
    //   description: "missing desc",
    //   link: "https://unsplash.com/photos/7341741rqgI",
    // },
  ];
  return (
    <>
      <header></header>
      <body className="h-screen">
        <div
          id="controls-carousel"
          className="relative container w-11/12 mx-auto bg-slate-500 rounded-lg max-w-4xl overflow-hidden "
          data-carousel="static"
        >
          {/* Item 1 */}
          <div className="flex ">
            <div className=" inset-0  z-10  " data-carousel-item="">
              <img
                src="/prototyping-images/mountain.jpg"
                className="object-contain "
                alt="..."
              />
            </div>
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60
        group-focus:outline-none"
            >
              <RightSVG className="w-6 h-6 rotate-180" />
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60  group-focus:outline-none">
              <RightSVG className="w-6 h-6" />
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </body>
    </>
  );
};
const PastEvents: NextPage = () => {
  return (
    <div className="container mx-auto p-3">
      <Slide></Slide>
    </div>
  );
};
export default PastEvents;
