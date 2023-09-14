import React, { useState } from "react";
import { useGetStepsByGuideIdQuery } from "./api-queries";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

export default function GuideItem({ guide }) {
  const [guideId, setGuideId] = useState();
  const { data: steps } = useGetStepsByGuideIdQuery(guideId);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const isLargeDevice = window.innerWidth >= 1024;

  const goNextStep = () => {
    if (steps && activeStepIndex < steps.length - 1) {
      setActiveStepIndex((prevIndex) => prevIndex + 1);
    }
  };

  const goPreviousStep = () => {
    if (activeStepIndex > 0) {
      setActiveStepIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          setGuideId(guide.id);
        }}
      >
        <div>
          <h1 className="text-1xl font-bold text-gray-900 text-center lg:ml-80 sm:ml-16">
            {guide.attributes.question}
          </h1>
        </div>
      </button>
      <hr className="ml-72" />

      <div className="flex items-center justify-center">
        {isLargeDevice && (
          <div className="ml-72 my-4 pr-4">
            {steps && steps.length > 0 && (
              <Image
                src={
                  "http://127.0.0.1:1337" +
                  steps[activeStepIndex]?.attributes?.screenshot?.data
                    ?.attributes?.formats?.small?.url
                }
                width={500}
                height={500}
                alt="Screenshot"
                className="border border-transparent"
              />
            )}
          </div>
        )}

        <div className={isLargeDevice ? "w-full mt-4 ml-72" : "w-full"}>
          {steps &&
            steps.length > 0 &&
            steps.map((step, index) => (
              <div
                key={index}
                className={`${activeStepIndex === index ? "font-bold" : ""}`}
                onClick={() => setActiveStepIndex(index)}
              >
                <div className="flex items-center">
                  <div className="font-bold mr-2">{index + 1}.</div>
                  <div>{step.attributes.description}</div>
                </div>
              </div>
            ))}
        </div>

        {!isLargeDevice && (
          <div className="flex justify-between w-full mt-4">
            <button
              onClick={goPreviousStep}
              disabled={activeStepIndex === 0 || !steps}
              className={`px-4 py-2 text-white bg-blue-500 rounded-md ${
                activeStepIndex === 0 || !steps
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <AiFillCaretLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goNextStep}
              disabled={activeStepIndex === steps?.length - 1 || !steps}
              className={`px-4 py-2 text-white bg-blue-500 rounded-md ${
                activeStepIndex === steps?.length - 1 || !steps
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              <AiFillCaretRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
