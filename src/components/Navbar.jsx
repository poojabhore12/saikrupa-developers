import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 shadow-md"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Saikrupa Developers" className="h-12 w-auto" />
          <div className="hidden sm:block">
            <p className="font-bold text-gray-800 text-lg leading-tight">Saikrupa Developers</p>
            <p className="text-xs text-yellow-600 font-medium tracking-wide">Industrial & Residential Plots</p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative pb-1 transition-colors hover:text-yellow-600 ${
                location.pathname === l.to ? "text-yellow-600" : ""
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500 rounded"
                />
              )}
            </Link>
          ))}
          <a
            href="https://wa.me/919822329994"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition text-sm"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t px-6 pb-6 space-y-4"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`block py-2 font-medium ${
                  location.pathname === l.to ? "text-yellow-600" : "text-gray-700"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919822329994"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-500 text-black px-5 py-2 rounded-lg font-semibold text-center"
            >
              Enquire Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
