import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import React, { MouseEventHandler } from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  FaSms,
  FaLocationArrow,
  FaAppStoreIos,
  FaTelegramPlane,
} from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";
interface SearchIconProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Navbar() {
  const title = "Device and Phone Supports ";
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="sticky top-0 z-50 bg-white shadow">
      <Head>
        <meta
          name="description"
          content="Create Next JS Responsive Menu with Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="w-full bg-white ">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* <Link href="#">
                <h2 className="text-2xl text-white font-bold">NEXT JS</h2>
              </Link> */}
              <img></img>
              <div className="md:hidden">
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
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <AiOutlinePhone style={{ color: "#0072AB" }} />
                <h3 className="text-black">+251-994/+251-980</h3>
                <AiOutlineMail style={{ color: "#0072AB" }} />
                <h3>994@ethionet.et</h3>
                <FaSms style={{ color: "#0072AB" }} />
                <h4>8994</h4>
                <FaLocationArrow style={{ color: "#0072AB" }} />
                <h4>Addis Ababa, Ethiopia</h4>
                <FaAppStoreIos style={{ color: "#0072AB" }} />
                <h4>My Ethiotel</h4>
                <BiLogoPlayStore style={{ color: "#0072AB" }} />
                <h4>My Ethiotel</h4>
                <AiFillTwitterSquare style={{ color: "#0072AB" }} />
                <AiFillFacebook style={{ color: "#0072AB" }} />
                <FaTelegramPlane style={{ color: "#0072AB" }} />
                <button
                  type="button"
                  className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 15a7 7 0 100-14 7 7 0 000 14zm7.707-1.293l-4-4a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
