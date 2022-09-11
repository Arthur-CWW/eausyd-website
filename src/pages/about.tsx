import {
  RedditLogo,
  // GithubLogo, FacebookLogo
} from "../components/SVG";
import { NextPage } from "next";
import Image from "next/future/image";
import Link from "next/link";
// import { Heading } from "src/components/Header";
import { HeaderContainer } from "../components/Header";
import Head from "next/head";

export const Cards = () => (
  <>
    <Head>
      <title>EAusyd|Page Not Found</title>
      <meta
        name="description"
        content="Some photos and desciptions of past events hosted by the society"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col items-center border  rounded-md dark:border-gray-700">
      <Image
        width={324}
        height={324}
        className="object-contain w-full rounded-t-md aspect-square"
        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        alt=""
      />
      <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
        Bob
      </h1>
      <p className=" text-gray-500 capitalize dark:text-gray-300">Director</p>
      <div className="flex -mx-2">
        <Link
          href="#"
          className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          aria-label="Reddit"
        >
          <RedditLogo />
        </Link>
      </div>
    </div>
  </>
);

const About: NextPage = () => {
  return (
    <HeaderContainer
      heading="The Executive Team"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
      incidunt ex placeat modi magni quia error alias, adipisci rem
      similique, at omnis eligendi optio eos harum."
    >
      <div className="px-6 py-10 ">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3 p-4 sm:p-6">
          <Cards />

          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </HeaderContainer>
  );
};
export default About;
