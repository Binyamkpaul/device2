/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "./Navlinks";
import SearchComponent from "./search";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search logic here
    // You can access the search query using e.target.elements.query.value
  };

  return (
    <div className="sticky top-0 z-50 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
      <Head>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-white">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <img
                src="https://www.ethiotelecom.et/wp-content/uploads/2021/04/cropped-Ethiotelcom_Logo-01-1-1536x423.png"
                width={150}
                height={10}
              ></img>

              <div className="md:hidden bg-gray-400">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* <SearchComponent /> */}
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              <li className="text-dark">
                <a
                  href="http://localhost:3003/"
                  className="text-1xl lg:ml-72 sm:ml-16"
                >
                  Home
                </a>
              </li>
              <li className="text-dark">
                <Link href="/blogs"></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
