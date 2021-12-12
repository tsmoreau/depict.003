import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Swiper from "../components/Swipers/Networks/SwiperEthereum";

import Footer from "../components/Nav/Footer";

export default function Machines() {
  return (
    <div className="text-black">
      <Head>
        <title>Token Machines</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div className="mt-0 pt-20 w-full bg-gradient-to-b from-depictblue-50  to-depictpink-50 z-0">
        <Swiper />
      </div>

      <Footer />
    </div>
  );
}
