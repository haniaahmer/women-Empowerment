import React, { useState, useEffect, useRef } from "react";

// === Data ===
const navItems = [
  "Home",
  "About",
  "Programs",
  "Podcast",
  "Membership",
  "Enrollment Portal",
  "Blog",
  "Contact",
];

const joinUsLinks = [
  { label: "Become a Member", href: "#membership" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Partner With Us", href: "#partner" },
];

// === Logo Component ===
const Logo = () => (
  <div className="flex items-center">
    <div className="bg-white rounded-full p-2 mr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#9B9BBD]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    </div>
    <span className="text-white font-bold text-xl hidden sm:block">
      Women Empowerment
    </span>
  </div>
);

// === Navigation Links ===
const NavLinks = ({ onItemClick }) => (
  <>
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
        className="text-white hover:text-gray-200 transition-colors flex items-center group focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
        aria-label={`Navigate to ${item}`}
        onClick={onItemClick}
      >
        {item}
      </a>
    ))}
  </>
);

// === Join Us Dropdown ===
const JoinUsDropdown = ({ onItemClick }) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef(null);

  const clearCloseTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 200);
  };

  useEffect(() => {
    return () => clearCloseTimeout();
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="bg-[#FFD700] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white flex items-center"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Join Us
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          {joinUsLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                onClick={() => {
                  setOpen(false);
                  onItemClick();
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// === Donate Button ===
const DonateButton = ({ onItemClick }) => (
  <a
    href="#donate"
    className="bg-[#FFD700] text-white font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white"
    onClick={onItemClick}
  >
    Donate
  </a>
);

// === Mobile Menu Button ===
const MobileMenuButton = ({ onClick }) => (
  <button
    className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
    aria-label="Toggle mobile menu"
    onClick={onClick}
  >
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        internationaux="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
);

// === Header ===
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleItemClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-[#9B9BBD] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-10 flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks onItemClick={handleItemClick} />
          <JoinUsDropdown onItemClick={handleItemClick} />
          <DonateButton onItemClick={handleItemClick} />
        </div>
        <MobileMenuButton onClick={toggleMobileMenu} />
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#9B9BBD] px-10 py-4">
          <div className="flex flex-col space-y-4">
            <NavLinks onItemClick={handleItemClick} />
            {joinUsLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-white hover:text-gray-200 transition-colors"
                onClick={handleItemClick}
              >
                {label}
              </a>
            ))}
            <DonateButton onItemClick={handleItemClick} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;