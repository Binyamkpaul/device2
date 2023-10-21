import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaTelegram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-lime-500 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <ul className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-8">
            <li>
              <Link href="/terms" className="text-white">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center space-x-4">
          <a href="https://www.facebook.com">
            <FaFacebook className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.twitter.com">
            <FaTwitter className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.telegram.org">
            <FaTelegram className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.youtube.com">
            <FaYoutube className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com">
            <FaLinkedin className="text-2xl text-white hover:text-blue-500" />
          </a>
          <a href="https://www.tiktok.com">
            <FaTiktok className="text-2xl text-white hover:text-blue-500" />
          </a>
        </div>
        <div className="mt-4 md:mt-0">
          <p className="text-center md:text-right text-white">
            &copy; {new Date().getFullYear()} Ethiotelecom
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
