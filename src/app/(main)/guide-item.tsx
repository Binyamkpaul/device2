import React, { useState, useEffect } from "react";
import { useGetStepsByGuideIdQuery } from "./api-queries";
import RatingForm from "./RatingForm";
import ReactImageMagnify from "react-image-magnify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMenu } from "react-icons/ai";

export default function GuideItem({ guide, modelId }: any) {
  const [guideId, setGuideId] = useState();
  const { data: steps } = useGetStepsByGuideIdQuery(guideId);
  const [selectedStepIndex, setSelectedStepIndex] = useState(0);

  const isSmallScreen = window.innerWidth <= 768;

  useEffect(() => {
    setSelectedStepIndex(0);
  }, [guideId]);

  const handleNextStep = () => {
    if (steps && selectedStepIndex < steps.length - 1) {
      setSelectedStepIndex(selectedStepIndex + 1);
    }
  };

  const handlePreviousStep = () => {
    if (steps && selectedStepIndex > 0) {
      setSelectedStepIndex(selectedStepIndex - 1);
    }
  };

  const isLastStep = steps && selectedStepIndex === steps.length - 1;

  return (
    <div>
      <button
        onClick={() => {
          setGuideId(guide.id);
        }}
      >
        <div className="flex items-center text-2xl font-bold text-gray-900 text-center lg:ml-80 sm:ml-16">
          <AiOutlineMenu className="text-blue-500 text-xl mr-2" />
          {guide.attributes.question}
        </div>
      </button>
      <br></br>
      {isSmallScreen ? (
        <>
          <div className="lg:ml-72">
            {steps?.map((step: any, index: number) => (
              <div
                key={step.id}
                onClick={() => setSelectedStepIndex(index)}
                className={`${
                  selectedStepIndex === index
                    ? "transform scale-105 transition-transform duration-300 ease-in-out"
                    : ""
                }`}
              >
                {selectedStepIndex === index && (
                  <div className="my-4">
                    <p className="text-center mt-2 text-2xl mb-2 ">
                      {step.attributes.description}
                    </p>
                    {step?.attributes?.screenshot?.data?.attributes?.formats
                      ?.small?.url && (
                      <div
                        style={{
                          maxWidth: "100%",
                        }}
                      >
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Screenshot",
                              src: `https://172.22.4.56/device-admin/${step?.attributes?.screenshot?.data?.attributes?.formats?.small?.url}`,
                              width: "350",
                              height: "550",
                            },
                            largeImage: {
                              src: `https://172.22.4.56/device-admin/${step?.attributes?.screenshot?.data?.attributes?.formats?.small?.url}`,
                              width: 1000,
                              height: 1000,
                            },
                          }}
                          className="mx-auto border border-transparent hover:border-green-500"
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:ml-72 mt-4 flex">
            <button
              onClick={handlePreviousStep}
              className={`${
                !steps || selectedStepIndex === 0 ? "hidden" : ""
              } bg-lemon hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2`}
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className={`${
                !steps || selectedStepIndex === steps.length - 1 ? "hidden" : ""
              } bg-lemon hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="flex">
          <div className="lg:w-1/2 lg:ml-72">
            {steps?.map((step: any, index: number) => (
              <div
                key={step.id}
                onClick={() => setSelectedStepIndex(index)}
                className={`${
                  selectedStepIndex === index
                    ? "transform scale-105 transition-transform duration-300 ease-in-out"
                    : ""
                }`}
              >
                {selectedStepIndex === index && (
                  <div className="my-4">
                    {step?.attributes?.screenshot?.data?.attributes?.formats
                      ?.small?.url && (
                      <div
                        style={{
                          maxWidth: "100%",
                        }}
                      >
                        <ReactImageMagnify
                          {...{
                            smallImage: {
                              alt: "Screenshot",
                              src: `https://172.22.4.56/device-admin/${step?.attributes?.screenshot?.data?.attributes?.formats?.small?.url}`,
                              width: "auto",
                              height: "auto",
                            },
                            largeImage: {
                              src: `https://172.22.4.56/device-admin/${step?.attributes?.screenshot?.data?.attributes?.formats?.small?.url}`,
                              width: 1000,
                              height: 1000,
                            },
                          }}
                          className="mx-auto border border-transparent hover:border-green-500"
                          style={{
                            maxWidth: "100%",
                          }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="lg:w-1/2 pt-10">
            <ol className="pl-8">
              {steps?.map((step: any, index: number) => (
                <li
                  key={step.id}
                  onClick={() => setSelectedStepIndex(index)}
                  className={`cursor-pointer ${
                    selectedStepIndex === index ? "text-red-400 " : ""
                  }`}
                >
                  {step.attributes.number} {step.attributes.description}
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
      <hr className="lg:ml-72 lg:mr-72 sm:mr-72 sm:ml-16"></hr>
      <br></br>
      {isLastStep && <RatingForm guideId={guide.id} modelId={modelId} />}
      <br></br>
    </div>
  );
}
