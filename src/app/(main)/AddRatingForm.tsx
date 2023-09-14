import React, { useState } from "react";
import { usePostRating } from "./api-queries"; // Import the usePostRating hook

interface AddRatingFormProps {
  modelId: number;
}

const AddRatingForm: React.FC<AddRatingFormProps> = ({ modelId }) => {
  const [comment, setComment] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const postRating = usePostRating();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call the postRating mutation function with the required parameters
    await postRating.mutateAsync({
      modelId,
      comment,
      ratingValue,
    });

    // Optional: You can handle the success case here (e.g., refetch ratings)
    // postRating.onSuccess((data) => {
    //   // Handle success (e.g., refetch ratings)
    // });

    // Reset the form after submitting
    setComment("");
    setRatingValue(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ratingValue">Rating:</label>
        <input
          type="number"
          id="ratingValue"
          value={ratingValue}
          onChange={(e) => setRatingValue(Number(e.target.value))}
        />
      </div>
      <button type="submit">Submit Rating</button>
    </form>
  );
};

export default AddRatingForm;
