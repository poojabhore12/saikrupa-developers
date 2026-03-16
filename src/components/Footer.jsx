import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <img src={logo} alt="Saikrupa Developers" className="h-14 mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Pune's trusted industrial and residential plot developer since 2011.
              Building spaces with trust, quality, and care.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/saikrupa_developers_promoters" },
                { icon: Linkedin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, backgroundColor: "#f59e0b" }}
                  className="bg-gray-800 p-2.5 rounded-full transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-base font-bold mb-5 text-yellow-400 tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-yellow-400 transition-colors">
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-base font-bold mb-5 text-yellow-400 tracking-wide uppercase">Our Services</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Industrial Plots", "Residential Plots", "NA Farmhouse Plots", "Legal Documentation", "Site Development"].map((s) => (
                <li key={s} className="hover:text-gray-300 transition-colors cursor-default">→ {s}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-base font-bold mb-5 text-yellow-400 tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-yellow-500 mt-0.5 shrink-0" />
                <span>A wing, Shop no.145, Jai Ganesh Samrajya, Spine Road near Cosmos Bank, Pune – 411028</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-yellow-500 shrink-0" />
                <a href="tel:9822329994" className="hover:text-yellow-400 transition">+91 9822329994</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-yellow-500 shrink-0" />
                <a href="mailto:sudambhore@gmail.com" className="hover:text-yellow-400 transition">sudambhore@gmail.com</a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Saikrupa Developers. All rights reserved. |{" "}
          <span className="text-gray-400">Industrial & Residential Plots, Pune</span>
        </div>

      </div>
    </footer>
  );
}
