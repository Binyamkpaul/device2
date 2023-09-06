"use state";
import React from "react";

export default function GuidesCategories({
  setSelectedCategory,
  categoryNames,
}: any) {
  return (
    <div className="bg-white py-2 sm:py-2 justify-center ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Samsung A13
            </h2> */}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {categoryNames?.map((category: any) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                }}
                className="flex flex-col bg-gray-300 p-8 pl-4" // Add pl-4 class for left padding
              >
                <dt className="text-sm font-semibold leading-6 text-gray-900">
                  {category}
                </dt>
              </button>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
