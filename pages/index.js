import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { verifyMessage } from "@ethersproject/wallet";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";
import Account from "../components/Account";
import ETHBalance from "../components/ETHBalance";
import useEagerConnect from "../hooks/useEagerConnect";
import usePersonalSign, { hexlify } from "../hooks/usePersonalSign";

import Nav from "../components/Nav/Nav";
import Footer from "../components/Nav/Footer";
import Swiper from "../components/Swipers/SwiperSharkHero";

export default function Home({ isConnected }) {
  const { account, library } = useWeb3React();

  const triedToEagerConnect = useEagerConnect();

  const sign = usePersonalSign();

  const handleSign = async () => {
    const msg = "Next Web3 Boilerplate Rules";
    const sig = await sign(msg);
    console.log(sig);
    console.log("isValid", verifyMessage(msg, sig) === account);
  };

  const isConnected2 = typeof account === "string" && !!library;

  return (
    <div className="">
      <Head>
        <title>Depict Limited</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main className="w-screen pb-4 bg-gradient-to-b from-depictblue-50 to-depictpink-50 min-h-screen">
        <div className=" max-w-7xl p-4 mt-24 px-12 bg-amber-400 border rounded-2xl h-full w-11/12 flex flex-col justify-center items-center mx-auto">
          <div className="flex">
            <Swiper />
          </div>
          <div
            id="depict"
            className="text-2xl tet-center -mb-4 ml-20 md:ml-0 mr-0 md:mr-12"
          >
            Launch Project:
          </div>
          <div id="depict2" className="text-9xl text-center">
            Shifty Sharks
          </div>
          <div className="font-mono w-11/12 lg:w-1/2 -mt-2 text-center">
            featuring fully on chain art, chainlink generated randomness, trait
            trading, and more!
          </div>
          <div className="-mt-2 lg:mt-2 text-center  items-center flex flex-col lg:flex-row mx-auto justify-center text-gray-100 ">
            <a href="/machines">
              <button
                type="button"
                className="ml-0 lg:mr-1 text-base text-gray-700 font-mono px-6 py-0.5 mt-4 lg:mt-0 border rounded-lg bg-gray-50 transition duration-100 ease-in-out transform hover:-translate-y-1 hover:bg-gray-200"
              >
                Token Machines Page
              </button>
            </a>
            <a href="/shiftysharks">
              <button
                type="button"
                className="text-base font-mono px-6 py-0.5 mt-1 lg:mt-0 border rounded-lg bg-gray-50 hover:bg-gray-200 transition duration-100 ease-in-out transform hover:-translate-y-1 text-gray-700 font-gray-700"
              >
                Project Page
              </button>
            </a>
          </div>
        </div>
        <h2
          id="depict5"
          className="mt-24 text-center flex mx-auto text-gray-800 text-5xl font-bold font-mono leading-none"
        >
          depict limited.
        </h2>
        <h2
          id="depict5"
          className="leading-none mt-1 text-center flex mx-auto text-gray-800 text-5xl font-bold font-mono mb-6"
        >
          premium nft projects.
        </h2>

        <div className="mt-18 px-4 md:px-4 flex flex-wrap justify-center w-screen">
          <div className="w-4/5 lg:w-2/5 px-6 border rounded-md  mx-1 mb-2">
            <ul className=" flex flex-col justify-center">
              <li
                id="depict5"
                className=" text-center  pt-4 pb-4 mx-auto text-lg font-bold font-mono text-gray-900"
              >
                upcoming main drops:
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-100">
                drop01 **shifty_sharks** LIVE 12/7/21
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-100">
                drop02 **metahumans** LIVE 2/7/21
              </li>
              <li className="text-center  mx-auto text-md font-bold font-mono text-gray-100">
                drop03 **machine_elves** LIVE 4/7/21
              </li>
              <li className="text-center mx-auto text-md font-bold font-mono text-gray-100 pb-8 ">
                drop04 **inviting_islands** LIVE 6/21/21
              </li>
            </ul>
          </div>
          <div className="w-4/5 lg:w-2/5 pb-2 px-4 border rounded-md mx-1 mb-2">
            <h2
              id="depict5"
              className="flex justify-center py-4 mx-auto text-gray-800 text-lg font-bold font-mono"
            >
              main drops featuring:
            </h2>
            <ul className="flex flex-col mx-auto">
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                on-chain art
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                trading mechanics
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                hidden token functionality
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                physical item tokens
              </li>
              <li className="pt-4 pb-4 mx-auto text-lg font-bold font-mono text-gray-100">
                and more...
              </li>
            </ul>
          </div>

          <div className="pb-2 w-4/5 lg:w-2/5 border rounded-md  mx-1 mb-2">
            <h2
              id="depict5"
              className="flex justify-center py-4 mx-auto text-gray-800 text-lg font-bold font-mono"
            >
              learn more:
            </h2>
            <ul className="flex flex-col mx-auto">
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                discord
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                twitter
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100">
                blog
              </li>
              <li className="mx-auto text-md font-bold font-mono text-gray-100 mb-6">
                faq
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-24 hidden">
          {isConnected ? (
            <h2 className="mx-auto text-lg">You are connected to MongoDB</h2>
          ) : (
            <h2 className="mx-auto text-lg">
              You are NOT connected to MongoDB. Check the <code>README.md</code>{" "}
              for instructions.
            </h2>
          )}
          {isConnected2 ? (
            <h2 className="mx-auto text-lg">
              You are connected to the Blockchain
            </h2>
          ) : (
            <h2 className="mx-auto text-lg">
              You are NOT connected to the Blockchain, please press the Connect
              Button
            </h2>
          )}
          {isConnected2 && (
            <section>
              <ETHBalance />
              <button onClick={handleSign}>Personal Sign</button>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .subtitle {
          font-size: 2rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }

        @font-face {
          font-family: myFirstFont123;
          src: url(/fonts/BlankRiver.ttf);
        }

        #depict,
        #depict3 {
          font-family: myFirstFont123;
          text-shadow: 1px 1px white;
        }

        #depict2 {
          font-family: myFirstFont123;
          text-shadow: 3px 4px white;
        }

        #depict4 {
          text-shadow: 1px 1px white;
        }

        #depict5 {
          text-shadow: 0.5px 0.5px white;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps(context) {
  const client = await clientPromise;

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected();

  return {
    props: { isConnected }
  };
}
