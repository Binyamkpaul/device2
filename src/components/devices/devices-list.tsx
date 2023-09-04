/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import { useGetDevices } from "./devices.query";
import StepList from "../steps/StepList";
import { useRouter } from "next/router";
import {
  AiFillCalendar,
  AiOutlineUser,
  AiFillCreditCard,
} from "react-icons/ai";
import { HiMiniDeviceTablet } from "react-icons/hi2";
import { TbBrandAsana } from "react-icons/tb";

const DeviceList = () => {
  const handleRedirect = () => {
    return "/the";
  };

  const devicesQuery = useGetDevices();

  if (devicesQuery.isError) {
    return <div>Error..</div>;
  }
  if (devicesQuery.isLoading || devicesQuery.isFetching) {
    return <div>Loading..</div>;
  }

  if (devicesQuery.isSuccess)
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Device lists
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {devicesQuery.data?.map((device: any) => (
              <div key={device.id} className="group relative">
                <div
                  onClick={handleRedirect}
                  className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
                >
                  {device?.attributes?.ico?.data?.attributes?.url && (
                    <img
                      src={
                        "http://127.0.0.1:1337" +
                        device?.attributes?.ico?.data?.attributes?.url
                      }
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  )}
                </div>
                <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-900/5 px-6 pt-6">
                  <dt className="flex-none">
                    <HiMiniDeviceTablet
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">
                    <a href={device.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {device.attributes.type}
                    </a>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <TbBrandAsana
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <dd className="text-sm font-medium leading-6 text-gray-900">
                      <a href={device.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {device.attributes.brand}
                      </a>
                    </dd>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Status</span>
                    <TbBrandAsana
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <p className="mt-1 text-sm text-gray-500">
                      {device.attributes.model}
                    </p>
                  </dd>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700"></h3>
                  </div>
                  <p className="text-sm font-large text-gray-900">
                    {device.price}
                  </p>
                </div>
                {/* <StepList /> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    );

  //   <div>
  //   <h1>Device List</h1>
  //   <div>
  //     {devicesQuery.data?.map((device: any) => {
  //       return (
  //         <div key={device.id}>
  //           <div className="mt-4 flex justify-between">
  //             <div>{device.attributes.brand}</div>
  //             <div>{device.attributes.type}</div>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // </div>
};

export default DeviceList;
