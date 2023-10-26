import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaEyeSlash,
  FaEye,
} from "react-icons/fa";

const SocialNetworksHub = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);
  const [showSocialNetworks, setShowSocialNetworks] = useState(false);

  const fetchSocialNetworks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/sociallinks");
      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }
      const data = await response.json();

      if (Array.isArray(data)) {
        setSocialNetworks(data);
      } else {
        console.error("API response does not match the expected format:", data);
      }
    } catch (error) {
      console.error("Error fetching social networks: ", error);
    }
  };

  useEffect(() => {
    fetchSocialNetworks();
  }, []);

  const toggleSocialNetworks = () => {
    setShowSocialNetworks(!showSocialNetworks);
  };

  return (
    <div>
      <header className="bg-white text-white text-center py-4">
        <h1 className="text-2xl font-semibold text-lime-500">
          Ethio telecom Digital Hub
        </h1>
        <button
          className="text-black"
          onClick={() => (window.location.href = "tel:*804#")}
        >
          Call *804#
        </button>
        <a href="tel:*804#" className="hover:underline">
          Call *804#
        </a>
      </header>

      <main className="p-4">
        <div className="container mx-auto" id="social">
          <h4 className="text-1xl font-semibold mb-4">Social</h4>
          <img
            src="https://cdn-icons-png.flaticon.com/128/4121/4121006.png"
            alt="Toggle Social Networks"
            className="cursor-pointer hover:text-blue-600 w-8 h-8"
            onClick={toggleSocialNetworks}
          />

          {showSocialNetworks && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialNetworks.map((network) => (
                <div
                  className="bg-white rounded-lg shadow p-4 text-center"
                  key={network.id}
                >
                  <a
                    href={network.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {network.image && (
                      <img
                        src={network.image}
                        alt={network.name}
                        className="w-12 h-12 mx-auto mb-2"
                      />
                    )}
                    <h3 className="text-lg font-semibold">{network.name}</h3>
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SocialNetworksHub;
