/* eslint-disable @next/next/no-img-element */
"use client";
import {
  useGetGuideByIdQuery,
  useGetModelByIdQuery,
} from "@/components/devices/models.react.query";
import React from "react";

import { FaDesktop, FaLaptop, FaMobileAlt, FaQuestion } from "react-icons/fa";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { TbBrandAsana } from "react-icons/tb";
import { HiMiniDeviceTablet } from "react-icons/hi2";
import { AiFillSetting, AiOutlineRadiusSetting } from "react-icons/ai";
import MenuWithImage from "./MenuWithImage";
import { GuideList } from "../guides/GuideList";

export const StepList = ({ id }: { id: number }) => {
  const getGuideByIdQuery = useGetGuideByIdQuery(id);
  const data = getGuideByIdQuery.data;
  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
  ];
  // if (getGuideByIdQuery.isError) {
  //   return (
  //     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
  //       <div className="flex space-x-2">
  //         <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce"></div>
  //         <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce"></div>
  //         <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce"></div>
  //       </div>
  //     </div>
  //   );
  // }
  // if (getGuideByIdQuery.isLoading || getGuideByIdQuery.isFetching) {
  //   return (
  //     <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
  //       <div className="flex space-x-2">
  //         <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
  //         <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
  //         <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
  //         <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
  //       </div>
  //     </div>
  //   );
  // }

  // if (getGuideByIdQuery.isSuccess)
  return (
    <div>
      {/* <div className="flex justify-center">
          <div className="flex justify-center">
            <div className="box-category text-center my-4">
              <AiFillSetting className="text-4xl text-gray-500 mb-2" />
              <h1> Settings</h1>
            </div>
          </div>
        </div> */}
      <div className="w-full">
        <div className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
              <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                Device Name
              </h2>
              <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                {faqs.map((faq) => (
                  <Disclosure as="div" key={faq.question} className="pt-6">
                    {({ open }) => (
                      <>
                        <dt>
                          <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                            <span className="text-base font-semibold leading-7">
                              {faq.question}
                            </span>
                            <span className="ml-6 flex h-7 items-center">
                              {open ? (
                                <MinusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmallIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                          <p className="text-base leading-7 text-gray-600">
                            {faq.answer}
                          </p>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </div>
        {/* guide List
          <GuideList /> */}
        <MenuWithImage id={2} />
        {JSON.stringify(data, null, 4)}
      </div>
    </div>
  );
};
