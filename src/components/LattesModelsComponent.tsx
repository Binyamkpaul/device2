import { useLattesModels } from "@/app/(main)/api-queries";
import React from "react";

const LattesModelsComponent: React.FC = () => {
  const { data, isLoading, error } = useLattesModels();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data &&
        data.map((model) => (
          <div
            key={model.id}
            className="bg-white rounded overflow-hidden shadow-lg"
          >
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">
                {model.attributes.name}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-2">
                Favorite: {model.attributes.favorite}
              </p>
              {model?.attributes?.image?.formats?.small?.url && (
                <div className="max-w-full">
                  <img
                    src={
                      "http://127.0.0.1:1337" +
                      model?.attributes?.image?.formats?.small?.url
                    }
                    alt="Model Screenshot"
                    className="w-full rounded"
                    width={500}
                    height={500}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      <br></br>
    </div>
  );
};

export default LattesModelsComponent;
