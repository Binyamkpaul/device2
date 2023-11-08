import React, { useState, useEffect } from "react";
import { BiShareAlt } from "react-icons/bi";
import { IoReturnUpBackOutline } from "react-icons/io5"; // Import IoReturnUpBackOutline
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    border: "2px solid #00C853",
    borderRadius: "10px",
    padding: "20px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "80vh", // Set a maximum height
    overflowY: "auto", // Enable vertical scrolling if content exceeds the maximum height
  },
};

const SocialNetworks: React.FC = () => {
  const [socialNetworks, setSocialNetworks] = useState([]);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const [searchText, setSearchText] = useState("");

  const fetchSocialNetworks = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/social-links");
      if (!response.ok) {
        // throw an Error("Failed to fetch social networks");
      }
      const data = await response.json();

      if (data && Array.isArray(data.data)) {
        setSocialNetworks(data.data);
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

  const openShareModal = (networkName: string, link: string) => {
    setIsShareModalOpen(true);
  };

  const closeShareModal = () => {
    setIsShareModalOpen(false);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const filteredNetworks = socialNetworks.filter((network) =>
    network.attributes.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <main className="p-4">
        <div className="container mx-auto" id="social">
          <img
            src="http://localhost:1337/uploads/Asset_7_bb2f254203.svg"
            alt="Toggle Social Networks"
            className="cursor-pointer hover:text-blue-600"
            width="50" // Set the width to 70 pixels
            height="20" // Set the height to 30 pixels
            onClick={() => setIsShareModalOpen(true)}
          />

          <p>Social Media</p>
          <ToastContainer />
        </div>
      </main>
      <Modal
        isOpen={isShareModalOpen}
        onRequestClose={closeShareModal}
        contentLabel="Share Link"
        style={customStyles} // Apply the custom styles here
      >
        <div className="flex items-center justify-between mb-4">
          <button onClick={closeShareModal}>
            <IoReturnUpBackOutline size={24} className="mr-4" />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div className="flex flex-wrap">
          {filteredNetworks.map((network, index) => (
            <div key={index} className="flex items-center mr-4 mb-4">
              {network.attributes.imageLink && (
                <img
                  src={network.attributes.imageLink}
                  alt={network.attributes.name}
                  className="w-12 h-12 mx-2"
                />
              )}
              <a
                href={network.attributes.link}
                className="hover:underline font-medium"
              >
                {network.attributes.name}
              </a>
              <div className="flex items-center">
                <a
                  className="ml-2 cursor-pointer"
                  onClick={() =>
                    openShareModal(
                      network.attributes.name,
                      network.attributes.link
                    )
                  }
                >
                  <BiShareAlt size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default SocialNetworks;
