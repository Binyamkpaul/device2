import React, { useState } from "react";
import { useGetStepsByGuideIdQuery } from "./api-queries";
import Image from "next/image";
// import MenuWithImage from "../steps/MenuWithImage";

export default function GuideItem({ guide }: any) {
  const [guideId, setGuideId] = useState();
  const { data: steps } = useGetStepsByGuideIdQuery(guideId);
  return (
    <div>
      <button
        onClick={() => {
          setGuideId(guide.id);
        }}
      >
        <div>
          <h1 className="text-1xl font-bold text-gray-900 text-center ml-16">
            {guide.attributes.question}
          </h1>
        </div>
      </button>
      {/* <MenuWithImage /> */}
      {steps?.map((step: any) => {
        return (
          <div key={step.id}>
            <p>{step.attributes.number}</p>
            {step.attributes.description}
            <div>
              <div>
                <pre>{JSON.stringify(step, null, 4)}</pre>
              </div>
              {step?.attributes?.screenshot?.data?.attributes?.formats?.small
                ?.url && (
                <Image
                  src={
                    "http://127.0.0.1:1337" +
                    step?.attributes?.screenshot?.data?.attributes?.formats
                      ?.small?.url
                  }
                  width={400}
                  height={400}
                  alt="tes"
                  //   className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              )}
            </div>
          </div>
        );
        // {
        //   steps?.attributes?.screenshot?.data?.attributes?.url && (
        //     <img
        //       src={
        //         "http://127.0.0.1:1337" +
        //         steps?.attributes?.screenshot?.data?.attributes?.url
        //       }
        //       className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        //     />
        //   );
        // }
      })}

      {/* <pre>{JSON.stringify(steps, null, 2)}</pre> */}
    </div>
  );
}
