import React, { useState } from "react";
import { FaStar, FaComment } from "react-icons/fa";
import { useGetRatingsByGuideIdQuery } from "./api-queries";

interface Rating {
  id: number;
  ratingValue: number;
  comment: string;
  guidesId?: number[];
}

const RatingView: React.FC<{ guideId: number }> = ({ guideId }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const ratingsPerPage = 4;

  const {
    data: ratings,
    isLoading,
    isError,
  } = useGetRatingsByGuideIdQuery(guideId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching ratings.</div>;
  }

  // Pagination
  const indexOfLastRating = currentPage * ratingsPerPage;
  const indexOfFirstRating = indexOfLastRating - ratingsPerPage;
  const currentRatings = ratings.slice(indexOfFirstRating, indexOfLastRating);
  const totalPages = Math.ceil(ratings.length / ratingsPerPage);

  const renderStars = (ratingValue: number) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      let starColor;
      if (i <= ratingValue) {
        starColor = "#FFD700"; // Gold color for filled stars
      } else {
        starColor = "#C0C0C0"; // Gray color for empty stars
      }

      stars.push(
        <FaStar key={i} className="text-2xl" style={{ color: starColor }} />
      );
    }

    return stars;
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className="space-y-4">
        {currentRatings.map((rating: Rating) => (
          <li
            key={rating.id}
            className="max-w-md mx-auto lg:ml-72 p-4 bg-white shadow-md rounded"
          >
            <div className="flex items-center mb-2">
              {renderStars(rating.ratingValue)}
            </div>
            <div className="mb-2">
              <span className="font-semibold">Rating Value:</span>{" "}
              {rating.ratingValue}
            </div>
            <div className="mb-2">
              <FaComment className="text-blue-500" />{" "}
              <span className="font-semibold">Comment:</span> {rating.comment}
            </div>
            {rating.guidesId && (
              <div className="text-gray-600">
                Guides ID: {rating.guidesId.join(", ")}
              </div>
            )}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RatingView;
