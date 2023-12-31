import React, { useState } from "react";
import { AiFillSetting, AiOutlineMobile } from "react-icons/ai";
import { GrTroubleshoot } from "react-icons/gr";
import { FcDataConfiguration } from "react-icons/fc";

interface GuidesCategoriesProps {
  setSelectedCategory: (category: string) => void;
  categoryNames: string[];
  selectedCategory: string;
}

export default function GuidesCategories({
  setSelectedCategory,
  categoryNames,
  selectedCategory,
}: GuidesCategoriesProps) {
  const [clickedCategory, setClickedCategory] = useState("Settings");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setClickedCategory(category);
  };

  const orderedCategories = categoryNames.sort((a: string, b: string) =>
    a === clickedCategory ? 1 : b === clickedCategory ? -1 : 0
  );

  return (
    <div className="lg:py-2 sm:py-2 justify-center lg:ml-64 sm:ml-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center"></div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {orderedCategories?.map((category: string) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex flex-col p-8 pl-4 hover:border-green-500 border border-gray-300 lg:ml-7 sm:ml-4 ${
                  category === selectedCategory ? "bg-gray-500" : ""
                } ${
                  clickedCategory === category ? "bg-lemon border-gray-700" : ""
                }`}
              >
                {(() => {
                  const iconProps = {
                    className: `w-8 h-8 ml-14 ${
                      clickedCategory === category ? "text-white" : "text-blue"
                    }`,
                  };

                  switch (category) {
                    case "Settings":
                      return <AiFillSetting {...iconProps} />;
                    case "Troubleshooting":
                      return <GrTroubleshoot {...iconProps} />;
                    case "Configurations":
                      return <FcDataConfiguration {...iconProps} />;
                    case "Telebirr Services":
                      return <AiOutlineMobile {...iconProps} />;
                    default:
                      return null;
                  }
                })()}
                <dt
                  className={`text-1xl font-bold text-gray-900 text-center ml-10 ${
                    clickedCategory === category ? "text-white" : ""
                  }`}
                >
                  {category}
                </dt>
              </button>
            ))}
          </dl>
          <br />
        </div>
      </div>
    </div>
  );
}
