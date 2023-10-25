import React, { useState } from "react";

const SocialNetworksHub: React.FC = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);

  const fetchSocialNetworks = () => {
    // Simulated data for social networks (replace with actual data fetching)
    const socialNetworkData = [
      { name: "Facebook", url: "https://www.facebook.com/yourcompany" },
      { name: "Twitter", url: "https://www.twitter.com/yourcompany" },
      { name: "LinkedIn", url: "https://www.linkedin.com/company/yourcompany" },
      { name: "YouTube", url: "https://www.youtube.com/yourcompany" },
    ];
    setSocialNetworks(socialNetworkData);
  };

  return (
    <div>
      <header className="bg-gray-900 text-white text-center py-4">
        <h1 className="text-3xl font-semibold">Your Company Digital Hub</h1>
      </header>
      <nav className="bg-gray-700 text-center py-2">
        <a
          href="#social"
          className="text-white text-lg font-medium px-4 hover:underline"
        >
          Social Networks
        </a>
      </nav>
      <main className="p-4">
        <div className="container mx-auto" id="social">
          <h2 className="text-2xl font-semibold mb-4">Social Networks</h2>
          <button
            onClick={fetchSocialNetworks}
            className="bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600"
          >
            Social Networks
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {socialNetworks.map((network, index) => (
              <div
                className="bg-white rounded-lg shadow p-4 text-center"
                key={index}
              >
                <a
                  href={network.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  <i
                    className={`fab fa-${network.name.toLowerCase()} text-5xl text-${getNetworkColor(
                      network.name
                    )} mb-2`}
                  ></i>
                  <h3 className="text-lg font-semibold">{network.name}</h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const getNetworkColor = (networkName) => {
  switch (networkName) {
    case "Facebook":
      return "blue-600";
    case "Twitter":
      return "blue-400";
    case "LinkedIn":
      return "indigo-600";
    case "YouTube":
      return "red-600";
    default:
      return "gray-500";
  }
};

export default SocialNetworksHub;
