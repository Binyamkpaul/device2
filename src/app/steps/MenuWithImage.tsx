import { useGetGuideByIdQuery } from "@/components/devices/models.react.query";
import React, { useState } from "react";

const MenuWithImage = ({ id }: { id: number }) => {
  const getGuideByIdQuery = useGetGuideByIdQuery(id);
  const data = getGuideByIdQuery.data;
  const menus = [
    [
      "How to Change Router Password",
      "How to Set Up Wi-Fi Network",
      "How to Troubleshoot Internet Connection",
    ],
    ["Menu Item 4", "Menu Item 5", "Menu Item 6"],
  ];

  const [activeMenu, setActiveMenu] = useState(0);

  const handlePrevMenu = () => {
    setActiveMenu((prevMenu) =>
      prevMenu === 0 ? menus.length - 1 : prevMenu - 1
    );
  };

  const handleNextMenu = () => {
    setActiveMenu((prevMenu) =>
      prevMenu === menus.length - 1 ? 0 : prevMenu + 1
    );
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/4 bg-gray-200 p-4">
        {/* Left-side menu */}
        <ul>
          {menus[activeMenu].map((menuItem, index) => (
            <li key={index} className="mb-2">
              <a href="#" className="block">
                {menuItem}
              </a>
            </li>
          ))}
        </ul>
        {/* Previous and Next buttons */}
        <div className="flex justify-between mt-4 lg:hidden">
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={handlePrevMenu}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 text-white"
            onClick={handleNextMenu}
          >
            Next
          </button>
        </div>
      </div>
      <div className="w-full lg:w-3/4">
        {/* Right-side image */}
        <img
          src="https://telegebeya.ethiotelecom.et/uploads/20220513T091118-2.%20Huawei%20Echo%20life%20HG8247H5%20GPON%20Modem_.jpg"
          alt="Menu Image"
          width={400}
          height={400}
          className="max-w-full"
        />
      </div>
    </div>
  );
};

export default MenuWithImage;
