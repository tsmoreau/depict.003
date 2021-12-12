import Head from "next/head";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Nav/Footer";
import React, { useCallback, useEffect, useState } from "react";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Disclosure } from "@headlessui/react";

export default function Blog() {
  const [post1, setPost1] = useState([]);
  const [post2, setPost2] = useState([]);
  const [post3, setPost3] = useState([]);
  const [post4, setPost4] = useState([]);
  const [post5, setPost5] = useState([]);

  const fetchJSONDataFrom = useCallback(async (path) => {
    const response = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    const data = await response.json();

    setPost1(data[0]);
    setPost2(data[1]);
    setPost3(data[2]);
    setPost4(data[3]);
    setPost5(data[4]);
  }, []);

  useEffect(() => {
    fetchJSONDataFrom("blog/001.json");
  }, [fetchJSONDataFrom]);

  return (
    <div className="text-black">
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className="flex flex-col text-center items-center mx-auto justify-center bg-gradient-to-b from-depictblue-50 to-depictpink-50">
        <p className="text-3xl text-gray-800 font-bold mx-auto mt-48 font-mono">
          blog
        </p>

        <div className="mt-8 font-mono border text-center rounded-lg px-8 w-5/6 md:w-3/4 lg:w-1/2 justify-center">
          <p className="mt-3 text-xl">{post2.title}</p>
          <p className="mt-3 text-sm">
            {post1.date} by {post1.author}
          </p>
          <p className="my-2 text-sm leading-0 text-justify px-3 max-h-screen overflow-auto">
            {post2.body}
          </p>
        </div>

        <div className="w-full px-4 pt-16 pb-64">
          <div class="mt-8 px-8 md:px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
            <div className="w-full text-center flex flex-col max-w-md p-2 mx-auto font-mono border rounded-lg">
              <p className="">{post2.title}</p>
              <p className="my-2 text-xs leading-0 text-justify px-3 h-32 overflow-hidden">
                {post2.body}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
