"use client";
import { useGetModelByIdQuery } from "@/components/devices/models.react.query";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { HiMiniDeviceTablet } from "react-icons/hi2";

export const GuideList = ({ id }: { id: number }) => {
  const getModelByIdQuery = useGetModelByIdQuery(id);
  const data = getModelByIdQuery.data;

  return (
    <div>
      GuideList
      {JSON.stringify(data, null, 4)}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Device lists
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {getModelByIdQuery.data?.map((model: any) => (
              <div key={model.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  {model?.attributes?.ico?.data?.attributes?.url && (
                    <img
                      src={
                        "http://127.0.0.1:1337" +
                        model?.attributes?.ico?.data?.attributes?.url
                      }
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      alt=""
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
                    <a href={model.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {model.attributes.name}
                    </a>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <FaQuestion
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm font-medium leading-6 text-gray-900">
                    <a href={model.href}>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {model.attributes.guides.attributes.question}
                    </a>
                  </dd>
                </div>
                <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                  <dt className="flex-none">
                    <span className="sr-only">Status</span>
                    <FaQuestion
                      className="h-6 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd className="text-sm leading-6 text-gray-500">
                    <p className="mt-1 text-sm text-gray-500">
                      {model.attributes.model}
                    </p>
                  </dd>
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700"></h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
