import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/humanato-logo.png";
import "./index.css";

type Props = {};

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-bar bg-gray-900/70 backdrop-blur-md text-white absolute left-1/2 transform -translate-x-1/2 w-6/12 rounded-full shadow-lg z-50 border border-gray-300/10 pe-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" />
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Features
            </a>
            <a
              href="#get-app"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Get App
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
            >
              Contact us
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span className="sr-only">Close main menu</span>
            <X className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#features"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#get-app"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Get App
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-blue-400 hover:bg-gray-700 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
