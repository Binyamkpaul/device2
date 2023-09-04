import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaSms } from "react-icons/fa";
const SocialLinks = () => {
  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <AiOutlinePhone size={28} />
              <h3 className="text-black">+251-994/+251-980</h3>
              <AiOutlineMail />
              <h3>994@ethionet.et</h3>
              <FaSms />
              <h4>8994</h4>
              <h4>Addis Ababa, Ethiopia</h4>
              <h4>My Ethiotel</h4>
              <h4>My Ethiotel</h4>
            </ul>
          </div>
          <div className="flex">
            {/* Add your navigation links or components here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SocialLinks;
