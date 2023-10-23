import React, { useState, useEffect } from "react";
import axios from "axios";

const FAQ = () => {
  const [faqData, setFaqData] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    // Replace 'YOUR_API_URL' with the actual API endpoint
    axios
      .get("https://www.ethiopiansciencemuseum.et/device-admin/api/devices")
      .then((response) => {
        // Assuming the API response structure
        const faqArray = response.data.data; // Access the 'data' array
        setFaqData(faqArray);
      })
      .catch((error) => {
        console.error("Error fetching FAQ data: ", error);
      });
  }, []);

  const toggleQuestion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h1>
      <ul>
        {faqData.map((item, index) => (
          <li key={item.id} className="mb-4">
            <button
              className="flex justify-between w-full p-2 rounded-lg bg-gray-200 hover-bg-gray-300 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-left">{item.attributes.name}</span>{" "}
              {/* Adapt 'name' to the correct question property */}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="mt-2 bg-white p-4 rounded-lg">
                {item.attributes.answer}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
