import Head from "next/head";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Nav/Footer";

export default function Stats() {
  return (
    <div className="text-black">
      <Head>
        <title>Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="min-h-screen flex flex-col mx-auto justify-center bg-gradient-to-b from-depictblue-50 to-depictpink-50">
        <p className="text-3xl text-gray-600 mx-auto mt-48 font-mono">
          depict_wide_stats
        </p>
        <p className="text-3xl text-gray-600 mx-auto mt-48 font-mono">
          shifty_sharks_stats
        </p>
      </div>
      <Footer />
    </div>
  );
}
