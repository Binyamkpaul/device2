import React, { useState } from "react";
import { useSubmitRatingMutation } from "./api-queries";
import { FcComments } from "react-icons/fc";
import { FaRegSmile } from "react-icons/fa";

// ... (Rating and RatingFormProps interfaces)

const RatingForm: React.FC<RatingFormProps> = ({ guideId }) => {
  const [ratingValue, setRatingValue] = useState<number>(0);
  const [comment, setComment] = useState<string>("");
  const [isHelpful, setIsHelpful] = useState<boolean>(true);

  const { mutate, isLoading, isError, isSuccess } = useSubmitRatingMutation();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const rating: Rating = {
      ratingValue: ratingValue,
      comment: comment,
      isHelpful: isHelpful,
    };

    mutate({ guideId: guideId, rating: rating });
  };

  const handleYesClick = () => {
    setIsHelpful(true);
  };

  const handleNoClick = () => {
    setIsHelpful(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto lg:ml-72 p-4 bg-white shadow-md rounded"
    >
      <div className="mb-4">
        <label htmlFor="ratingValue" className="block mb-2">
          Rating:
        </label>
        <input
          type="number"
          id="ratingValue"
          value={ratingValue}
          onChange={(e) => setRatingValue(Number(e.target.value))}
          className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="comment" className="block mb-2">
          <FcComments className="inline mr-2" /> Comment:
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full h-20 focus:outline-none focus:border-blue-500"
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="helpful" className="block mb-2">
          Was that helpful?
        </label>
        <div>
          <span
            className={`cursor-pointer inline-block mr-2 ${
              isHelpful ? "text-green-500" : ""
            }`}
            onClick={handleYesClick}
          >
            <FaRegSmile />
          </span>
          <span
            className={`cursor-pointer inline-block ${
              !isHelpful ? "text-red-500" : ""
            }`}
            onClick={handleNoClick}
          >
            <FaRegSmile />
          </span>
        </div>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isLoading ? "Submitting..." : "Submit Rating"}
      </button>
      {isError && <p className="text-red-500 mt-2">Error submitting rating</p>}
      {isSuccess && (
        <p className="text-green-500 mt-2">Rating submitted successfully</p>
      )}
    </form>
  );
};

export default RatingForm;
