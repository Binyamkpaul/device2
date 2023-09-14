import { useState, ChangeEvent, FormEvent } from "react";

const SearchComponent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Performing search for:", searchQuery);
  };

  return (
    <div className="hidden md:flex md:items-center justify-center flex-1">
      <form
        onSubmit={handleSearchSubmit}
        className="flex items-center space-x-2"
      >
        <div className="relative">
          <input
            type="text"
            name="query"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-500 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 21l-5.2-5.2"></path>
              <path d="M15 10a5 5 0 11-10 0 5 5 0 0110 0z"></path>
            </svg>
          </span>
        </div>
        <button
          type="submit"
          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <circle cx="10.5" cy="10.5" r="7.5"></circle>
            <path d="M21 21l-5.2-5.2"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
