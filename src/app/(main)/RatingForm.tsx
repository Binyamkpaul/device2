import React, { useState } from "react";
import { useSubmitRatingMutation } from "./api-queries";

interface Rating {
  ces: number;
  csat: number;
  nps: number;
  relevant: boolean;
}

interface RatingFormProps {
  guideId: string;
}

enum RatingStep {
  CES,
  CSAT,
  NPS,
  RELEVANT,
}

const RatingForm: React.FC<RatingFormProps> = ({ guideId }) => {
  const [cesRating, setCesRating] = useState<number | null>(null);
  const [csatRating, setCsatRating] = useState<number | null>(null);
  const [npsRating, setNpsRating] = useState<number | null>(null);
  const [relevant, setRelevant] = useState<boolean | null>(null);
  const [currentStep, setCurrentStep] = useState<RatingStep>(RatingStep.CES);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const submitRatingMutation = useSubmitRatingMutation();

  const handleNextStep = () => {
    if (currentStep === RatingStep.CES) {
      if (cesRating !== null) {
        setCurrentStep(RatingStep.CSAT);
      } else {
        // Display an error message or handle the validation error
      }
    } else if (currentStep === RatingStep.CSAT) {
      if (csatRating !== null) {
        setCurrentStep(RatingStep.NPS);
      } else {
        // Display an error message or handle the validation error
      }
    } else if (currentStep === RatingStep.NPS) {
      if (npsRating !== null) {
        setCurrentStep(RatingStep.RELEVANT);
      } else {
        // Display an error message or handle the validation error
      }
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    // Validate if all ratings and relevant are not null before submitting
    if (
      cesRating !== null &&
      csatRating !== null &&
      npsRating !== null &&
      relevant !== null
    ) {
      const rating: Rating = {
        ces: cesRating,
        csat: csatRating,
        nps: npsRating,
        relevant: relevant,
      };

      try {
        await submitRatingMutation.mutateAsync({
          guideId: guideId,
          rating: rating,
        });
        // Rating submitted successfully
        setIsSubmitted(true);
      } catch (error) {
        // Handle error
        console.error("Error submitting rating:", error);
      }
    } else {
      // Display an error message or handle the validation error
    }
  };

  const handleStarClick = (rating: number) => {
    switch (currentStep) {
      case RatingStep.CES:
        setCesRating(rating);
        break;
      case RatingStep.CSAT:
        setCsatRating(rating);
        break;
      case RatingStep.NPS:
        setNpsRating(rating);
        break;
      default:
        break;
    }
  };

  const handleYesNoClick = (value: boolean) => {
    setRelevant(value);
  };

  const renderCurrentStep = () => {
    if (isSubmitted) {
      return (
        <div className="bg-green-100 text-green-700 p-4 rounded">
          Thank you for your rating!
        </div>
      );
    }

    const ratingValue = (() => {
      switch (currentStep) {
        case RatingStep.CES:
          return cesRating;
        case RatingStep.CSAT:
          return csatRating;
        case RatingStep.NPS:
          return npsRating;
        default:
          return 0;
      }
    })();

    if (currentStep === RatingStep.RELEVANT) {
      return (
        <div>
          <h4 className="font-bold mb-4">
            Is the information relevant for you?
          </h4>
          <div className="flex items-center justify-center">
            <button
              className={`mx-2 px-4 py-2 rounded ${
                relevant === true
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              onClick={() => handleYesNoClick(true)}
            >
              Yes
            </button>
            <button
              className={`mx-2 px-4 py-2 rounded ${
                relevant === false
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
              onClick={() => handleYesNoClick(false)}
            >
              No
            </button>
          </div>
        </div>
      );
    }

    const stars = [1, 2, 3, 4, 5].map((value) => (
      <span
        key={value}
        className={`text-3xl cursor-pointer ${
          value <= ratingValue ? "text-yellow-500" : "text-gray-300"
        }`}
        onClick={() => handleStarClick(value)}
      >
        &#9733;
      </span>
    ));

    return (
      <div>
        <h4 className="font-bold mb-4">
          {currentStep === RatingStep.CES
            ? "How easily is it to find information on this page?"
            : currentStep === RatingStep.CSAT
            ? "How satisfied are you with Ethio telecom products and services?"
            : currentStep === RatingStep.NPS
            ? "How likely are you to recommend Ethio telecom products and services to a friend or family?"
            : "Is the information relevant for you?"}
        </h4>
        <div className="flex items-center justify-center">{stars}</div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow">
      {renderCurrentStep()}
      {!isSubmitted && (
        <button
          onClick={handleNextStep}
          className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
        >
          {currentStep !== RatingStep.RELEVANT ? "Next" : "Submit Rating"}
        </button>
      )}
    </div>
  );
};

export default RatingForm;
