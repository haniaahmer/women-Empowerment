import React, { useState, useEffect, useRef } from "react";

// === Data ===
const navItems = [
  "Home",
  "About",
  "Programs",
  "Podcast",
  "Blog",
  "Contact",
];

const joinUsLinks = [
  { label: "Become a Member", href: "#membership" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Partner With Us", href: "#partner" },
];

// === Logo ===
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
    <span className="text-white font-bold text-xl hidden sm:inline">
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
        className="text-white hover:text-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
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

  const handleOpen = () => {
    clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleClose = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <div
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    >
      <button
        className="bg-[#FFD700] text-indigo-700 font-semibold px-4 py-2 rounded-full shadow hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-white flex items-center"
        aria-haspopup="true"
        aria-expanded={open}
      >
        Join Us
        <svg
          className="ml-2 h-4 w-4 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
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
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
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



// === Mobile Menu Button ===
const MobileMenuButton = ({ onClick }) => (
  <button
    className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white"
    aria-label="Toggle mobile menu"
    onClick={onClick}
  >
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
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
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const handleItemClick = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-[#9B9BBD] py-4 px-4 sm:px-6 lg:px-10 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks onItemClick={handleItemClick} />
          <JoinUsDropdown onItemClick={handleItemClick} />
        </div>
        <MobileMenuButton onClick={toggleMobileMenu} />
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#9B9BBD] px-4 pt-4 pb-6 space-y-4 animate-slide-down">
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
    
        </div>
      )}
    </nav>
  );
};

export default Header;
