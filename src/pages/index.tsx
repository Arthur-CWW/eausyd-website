import { Heading, HeaderContainer } from "../components/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ButtonHeader } from "../components/Button";

import { Newsletter } from "../components/Newsletter";
import { trpc } from "../utils/trpc";
import { useEffect } from "react";

export const CardwPhoto = ({
  image = "missing image",
  image_alt = "none",
  heading = "missing heading",
  description = "missing desc",
  href = "missing url",
}) => {
  return (
    <div
      className={`max-w-sm bg-white rounded-sm overflow-hidden border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700
       text-left relative`}
    >
      <div className={` w-full p-2 relative h-40 `}>
        Link
        <Image
          className="max-w-sm object-cover"
          layout={`fill`}
          src={image}
          alt={image_alt}
        />
      </div>

      <div className={`p-5`}>
        <h5
          className={`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}
        >
          {heading}
        </h5>
        <p
          className={`mb-3 font-normal text-gray-700 dark:text-gray-400 text-left`}
        >
          {description}
        </p>

        <ButtonHeader href={href} />
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  useEffect(() => console.log(hello), [hello]);
  const cards = [
    {
      image: "/image/image.jpg",
      image_alt: "alt",
      heading: "missing heading",
      description: "missing desc",
      href: "https://unsplash.com/photos/7341741rqgI",
    },
    {
      image: "/prototyping-images/japanese-shrine.jpg",
      image_alt: "alt",
      heading: "third",
      description: "missing desc",
      href: "https://unsplash.com/photos/7341741rqgI",
    },
    {
      image: "/prototyping-images/car.jpg",
      image_alt: "alt",
      heading: "secon",
      description: "missing desc",
      href: "https://unsplash.com/photos/7341741rqgI",
    },
  ];

  return (
    <>
      <Head>
        <title>EAusyd| Home</title>
        <meta
          name={`University Club building a community around the principles and philosophy of Effective altruism`}
          content={`content about eausyd`}
        />
        <link rel={`icon`} href={`/favicon.ico`} />
      </Head>
      {/* <Heading /> */}
      <Heading />

      <main
        className={`container mx-auto flex flex-col items-center justify-center min-h-screen p-4 bg-hero-pattern`}
      >
        <h1
          className={`text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700`}
        >
          Effective altruism Usyd
        </h1>
        <p className={`text-2xl text-gray-700`}>
          connect with people with similar values
        </p>

        <div
          className={`grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3`}
          id={`cards-container`}
        >
          {cards.map((card) => (
            <CardwPhoto key={card.heading} {...card} />
          ))}
        </div>
      </main>

      <HeaderContainer
        heading="fjskafklsd fksdjkla"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius tempore ullam, ea qui non tempora, reprehenderit dignissimos laboriosam omnis, sunt aut unde a harum consequatur et rem eos alias."
      >
        <Newsletter />
      </HeaderContainer>
    </>
  );
};

export default Home;

// import { z } from "Zod";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Link from "next/link";
// import { FC, useEffect } from 'react';
