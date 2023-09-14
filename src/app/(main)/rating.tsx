import React, { useState, useEffect } from "react";
import { usePostRating } from "./api-queries";

const Rating = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const postRatingMutation = usePostRating();

  const handleSubmitRating = () => {
    // Perform any necessary validation or data formatting here

    // Call the postRatingMutation function with the first name and last name
    postRatingMutation.mutate({
      firstName: firstName,
      lastName: lastName,
    });
  };

  useEffect(() => {
    if (postRatingMutation.isSuccess) {
      setShowNotification(true);

      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide the notification after 3 seconds
    }
  }, [postRatingMutation.isSuccess]);

  return (
    <div className="p-4 mx-auto max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Submit Rating</h2>
      {showNotification && (
        <div className="bg-green-500 text-white px-4 py-2 rounded mb-4">
          Rating submitted successfully!
        </div>
      )}
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
        />
      </div>
      <div className="mb-4">
        <input
          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmitRating}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default Rating;
