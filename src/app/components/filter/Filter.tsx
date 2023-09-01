import React, { useState } from "react";
import { useGetAllDevices } from "../../devices/devices.query";

const Filter = () => {
  const [filter1, setFilter1] = useState("");
  const [filter2, setFilter2] = useState("");
  const [filter3, setFilter3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Selected values:", filter1, filter2, filter3);
  };

  const devicesQuery = useGetAllDevices();
  console.log({ devicesQuery, data: devicesQuery.data });

  if (devicesQuery.isError) {
    return <div>Error..</div>;
  }
  if (devicesQuery.isLoading || devicesQuery.isFetching) {
    return <div>Loading..</div>;
  }

  if (devicesQuery.isSuccess) {
    return (
      <div className="flex justify-center">
        <div className="mt-6">
          <img
            src="https://simulator-devicecare.etisalat.ae/WebApp/img/Smartphones-Laptops.jpg"
            alt="Device"
            className="w-64 h-auto"
          />

          <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <div>
                <label htmlFor="filter1" className="block mb-2">
                  Filter 1:
                </label>
                <select
                  id="filter1"
                  value={filter1}
                  onChange={(e) => setFilter1(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  {devicesQuery.data?.map((device) => (
                    <option key={device.id} value={device.attributes.model}>
                      {device.attributes.model}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter2" className="block mb-2">
                  Filter 2:
                </label>
                <select
                  id="filter2"
                  value={filter2}
                  onChange={(e) => setFilter2(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  {devicesQuery.data?.map((device) => (
                    <option key={device.id} value={device.attributes.type}>
                      {device.attributes.type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="filter3" className="block mb-2">
                  Filter 3:
                </label>
                <select
                  id="filter3"
                  value={filter3}
                  onChange={(e) => setFilter3(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select</option>
                  {devicesQuery.data?.map((device) => (
                    <option key={device.id} value={device.attributes.brand}>
                      {device.attributes.brand}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
};

export default Filter;
