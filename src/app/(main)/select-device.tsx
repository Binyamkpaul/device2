import React, { useState, useEffect } from "react";
import { FaShare } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

toast.configure(); // Initialize toast

const SocialNetworks: React.FC = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);
  const [showSocialNetworks, setShowSocialNetworks] = useState(false);

  const fetchSocialNetworks = async () => {
    // Fetch social networks data (unchanged)
  };

  useEffect(() => {
    fetchSocialNetworks();
  }, []);

  const handleCopyLink = () => {
    toast.success("Link copied to clipboard", {
      position: "bottom-right",
      autoClose: 3000, // Automatically close the toast after 3 seconds
    });
  };

  return (
    <div>
      <main className="p-4">
        <div className="container mx-auto" id="social">
          <h4 className="text-1xl font-semibold mb-4">Social Networks</h4>

          <img
            src="https://cdn-icons-png.flaticon.com/512/3893/3893024.png"
            alt="Toggle Social Networks"
            className="cursor-pointer hover:text-blue-600 w-8 h-8"
            onClick={() => setShowSocialNetworks(!showSocialNetworks)}
          />
          {showSocialNetworks && (
            <div className="flex flex-wrap">
              {socialNetworks.map((network, index) => (
                <div key={index} className="flex items-center mr-4 mb-4">
                  {network.attributes.imageLink && (
                    <img
                      src={network.attributes.imageLink}
                      alt={network.attributes.name}
                      className="w-12 h-12 mx-2"
                    />
                  )}
                  <a href={network.attributes.link} className="hover:underline">
                    <h3 className="text-lg font-semibold">
                      {network.attributes.name}
                    </h3>
                  </a>
                  <CopyToClipboard
                    text={network.attributes.link}
                    onCopy={handleCopyLink}
                  >
                    <FaShare className="ml-2 cursor-pointer" />
                  </CopyToClipboard>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SocialNetworks;
