import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <a className="hover:text-blue-500">PropXpert</a>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link href="/about">
            <a
              className={`hover:text-blue-500 ${
                router.pathname === '/about' ? 'text-blue-500' : ''
              }`}
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              className={`hover:text-blue-500 ${
                router.pathname === '/contact' ? 'text-blue-500' : ''
              }`}
            >
              Contact
            </a>
          </Link>
          <Link href="/player-props">
            <a
              className={`hover:text-blue-500 ${
                router.pathname === '/player-props' ? 'text-blue-500' : ''
              }`}
            >
              Player Props
            </a>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-gray-800 text-white p-4 space-y-4`}
      >
        <Link href="/about">
          <a
            className={`block hover:text-blue-500 ${
              router.pathname === '/about' ? 'text-blue-500' : ''
            }`}
          >
            About
          </a>
        </Link>
        <Link href="/contact">
          <a
            className={`block hover:text-blue-500 ${
              router.pathname === '/contact' ? 'text-blue-500' : ''
            }`}
          >
            Contact
          </a>
        </Link>
        <Link href="/player-props">
          <a
            className={`block hover:text-blue-500 ${
              router.pathname === '/player-props' ? 'text-blue-500' : ''
            }`}
          >
            Player Props
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;