import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { Nav } from "../components/Nav";
import { Footer } from "src/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
