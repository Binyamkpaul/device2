import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = getUserData();
    setUser(user);
    setIsUserLogin(user !== null);
  }, []);

  const handleSignOut = () => {
    logout();
    router.replace("/");
  };

  const navLinks = [
    {
      title: "HOME",
      path: "/user/home",
      icon: "/assets/icons/mobile-home.svg",
      isProtectedRoute: true,
    },
    // ... Add other navigation links here
  ];

  return (
    <nav className="flex fixed top-0 left-0 right-0 bg-gray-100 md:bg-lime-500 text-white glassmorphism md:glassmorphism-lime justify-between items-center h-20 z-50 shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center space-x-4 ml-8">
        <Link href="/">
          <a>
            <Image src="/assets/logo.png" width={40} height={40} alt="Logo" />
          </a>
        </Link>
        <h1 className="text-2xl font-bold">My Website</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <li key={link.title}></li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center space-x-4">
        {/* Mobile Navigation Button */}
        {/* ... */}

        {/* Mobile Navigation Menu */}
        {/* ... */}
      </div>

      {/* Profile Dropdown */}
      <div className="relative">
        {/* Profile Dropdown Button */}
        {/* ... */}

        {/* Profile Dropdown Menu */}
        {/* ... */}
      </div>
    </nav>
  );
};

export default Nav;
