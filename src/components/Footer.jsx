import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LOGO + ABOUT */}
        <div>
          <img
            src={logo}
            alt="Saikrupa Developers Logo"
            className="h-12 mb-4"
          />

          <p className="text-gray-400 text-sm">
            Saikrupa Developers is a trusted real estate development company
            based in Pune delivering quality construction and reliable
            building projects.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white">About</Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>
        </div>

        {/* SOCIAL + CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Connect With Us
          </h3>

          <p className="text-gray-400 mb-4">
            Jai Ganesh Samrajya, Spine Road  
            Pune, Maharashtra
          </p>

          <p className="text-gray-400 mb-4">
            Phone: 9822329994
          </p>

          <p className="text-gray-400 mb-4">
            Email : sudambhore@gmail.com
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.instagram.com/saikrupa_developers_promoters"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-gray-700"
            >
              <Linkedin size={20} />
            </a>

          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} Saikrupa Developers. All rights reserved.
      </div>

    </footer>
  );
}