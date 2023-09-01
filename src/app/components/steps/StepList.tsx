/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import { useGetAllresponses } from "./steps.quey";

const StepList = () => {
  const listQuery = useGetAllresponses();
  console.log({ listQuery, data: listQuery.data });

  if (listQuery.isError) {
    return <div>Error..</div>;
  }
  if (listQuery.isLoading || listQuery.isFetching) {
    return <div>Loading..</div>;
  }

  const Steps = () => {
    const [filter1, setFilter1] = useState("");
    const [filter2, setFilter2] = useState("");
    const [filter3, setFilter3] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
    };

    return (
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {listQuery.data?.map((response) => (
          <div key={response.id} className="group relative">
            <div className="flex flex-col items-center">
              <img
                src="https://simulator-devicecare.etisalat.ae/WebApp/img/Smartphones-Laptops.jpg"
                alt="Device"
                className="w-64 h-auto"
              />

              <form
                onSubmit={handleSubmit}
                className="flex justify-center mt-4 space-x-4"
              >
                <select
                  value={filter1}
                  onChange={(e) => setFilter1(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md"
                >
                  <option value="">Select Filter 1</option>
                  <option value="option1">{response.attributes.StepNum}</option>
                  <option value="option2">
                    {response.attributes.stepDescription}
                  </option>
                  <option value="option3">Option 3</option>
                </select>

                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-500 rounded-md"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <Steps />;
};

export default StepList;
