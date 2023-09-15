import React, { useState } from "react";
import { AiFillSetting, AiOutlineMobile } from "react-icons/ai";
import { GrTroubleshoot } from "react-icons/gr";
import { FcDataConfiguration } from "react-icons/fc";

export default function GuidesCategories({
  setSelectedCategory,
  categoryNames,
  selectedCategory,
}: any) {
  const [clickedCategory, setClickedCategory] = useState("");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setClickedCategory(category);
  };

  return (
    <div className="lg:py-2 sm:py-2 justify-center lg:ml-64 sm:ml-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center"></div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {categoryNames?.map((category: string) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex flex-col p-8 pl-4 hover:border-green-500 border border-gray-300 lg:ml-7 ${
                  category === selectedCategory ? "bg-gray-500" : ""
                } ${clickedCategory === category ? "bg-lemon" : ""}`}
              >
                {/* Render your category icons here */}
                {category === "Settings" && (
                  <>
                    <AiFillSetting
                      className={`w-8 h-8 ml-14 ${
                        clickedCategory === category
                          ? "text-white"
                          : "text-blue"
                      }`}
                    />
                    <dt
                      className={`text-1xl font-bold text-gray-900 text-center ml-10 ${
                        clickedCategory === category ? "text-white" : ""
                      }`}
                    >
                      {category}
                    </dt>
                  </>
                )}
                {category === "Troubleshooting" && (
                  <>
                    <GrTroubleshoot
                      className={`w-8 h-8 ml-14 ${
                        clickedCategory === category
                          ? "text-white"
                          : "text-blue"
                      }`}
                    />
                    <dt
                      className={`text-1xl font-bold text-gray-900 text-center ml-10 ${
                        clickedCategory === category ? "text-white" : ""
                      }`}
                    >
                      {category}
                    </dt>
                  </>
                )}
                {category === "Configurations" && (
                  <>
                    <FcDataConfiguration
                      className={`w-8 h-8 ml-14 ${
                        clickedCategory === category
                          ? "text-white"
                          : "text-blue"
                      }`}
                    />
                    <dt
                      className={`text-1xl font-bold text-gray-900 text-center ml-10 ${
                        clickedCategory === category ? "text-white" : ""
                      }`}
                    >
                      {category}
                    </dt>
                  </>
                )}
                {category === "Telebirr Services" && (
                  <>
                    <AiOutlineMobile
                      className={`w-8 h-8 text-gray-900 ml-14 ${
                        clickedCategory === category ? "text-white" : ""
                      }`}
                    />
                    <dt
                      className={`text-1xl font-bold text-gray-900 text-center ml-10 ${
                        clickedCategory === category ? "text-white" : ""
                      }`}
                    >
                      {category}
                    </dt>
                  </>
                )}
              </button>
            ))}
          </dl>
          <br />
        </div>
      </div>
    </div>
  );
}
