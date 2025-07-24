
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogIn, ChevronDown } from "lucide-react";

const navItems = ["Home", "About", "Contact"];

const opportunitiesLinks = [
  { label: "Programs", href: "/programs" },
  { label: "Events", href: "/events" },
];

const mediaLinks = [
  { label: "Podcast", href: "/podcast" },
  { label: "Blog", href: "/blog" },
];

const Logo = () => (
  <div className="flex items-center">
    <div className="bg-white rounded-full p-2 mr-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-[#d4d4e6]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
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

const Dropdown = ({ label, links, onItemClick, isOpen, setOpen }) => {
  return (
    <div className="relative">
      <button
        className="text-white hover:text-gray-200 transition-colors flex items-center gap-1"
        onClick={() => setOpen(label)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <ul className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                to={href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={onItemClick}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

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

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  const handleItemClick = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-[#7F264B] py-4 px-4 sm:px-6 lg:px-10 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        <div className="hidden md:flex space-x-6 items-center">
          {navItems.map((item, index) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <React.Fragment key={item}>
                <Link
                  to={route}
                  className="text-white hover:text-gray-200 transition-colors"
                  onClick={handleItemClick}
                >
                  {item}
                </Link>
                {item === "About" && (
                  <Dropdown
                    label="Media"
                    links={mediaLinks}
                    onItemClick={handleItemClick}
                    isOpen={openDropdown === "Media"}
                    setOpen={(label) =>
                      setOpenDropdown(openDropdown === label ? null : label)
                    }
                  />
                )}
              </React.Fragment>
            );
          })}

          <Dropdown
            label="Opportunities"
            links={opportunitiesLinks}
            onItemClick={handleItemClick}
            isOpen={openDropdown === "Opportunities"}
            setOpen={(label) =>
              setOpenDropdown(openDropdown === label ? null : label)
            }
          />

          <Link
            to="/join"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition-colors"
            onClick={handleItemClick}
          >
            Join Us
          </Link>

          <Link
            to="/signin"
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-semibold transition-colors flex items-center gap-1"
            onClick={handleItemClick}
          >
            <LogIn size={16} />
            Sign In
          </Link>
        </div>
        <MobileMenuButton onClick={toggleMobileMenu} />
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#9B9BBD] px-4 pt-4 pb-6 space-y-4 animate-slide-down">
          {navItems.map((item) => {
            const route = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <React.Fragment key={item}>
                <Link
                  to={route}
                  className="text-white hover:text-gray-200 transition-colors block"
                  onClick={handleItemClick}
                >
                  {item}
                </Link>
                {item === "About" &&
                  mediaLinks.map(({ label, href }) => (
                    <Link
                      key={label}
                      to={href}
                      className="text-white hover:text-gray-200 transition-colors block pl-4"
                      onClick={handleItemClick}
                    >
                      {label}
                    </Link>
                  ))}
              </React.Fragment>
            );
          })}

          {opportunitiesLinks.map(({ label, href }) => (
            <Link
              key={label}
              to={href}
              className="text-white hover:text-gray-200 transition-colors block pl-4"
              onClick={handleItemClick}
            >
              {label}
            </Link>
          ))}

          <Link
            to="/join"
            className="text-white hover:text-gray-200 transition-colors block"
            onClick={handleItemClick}
          >
            Join Us
          </Link>

          <Link
            to="/signin"
            className="flex items-center gap-1 text-white hover:text-gray-200"
            onClick={handleItemClick}
          >
            <LogIn size={16} />
            Sign In
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;