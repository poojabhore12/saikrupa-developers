import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-10 pb-6 md:pt-16 md:pb-8">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <img src={logo} alt="Saikrupa Developers" className="h-36 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed">
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
                  whileHover={{ scale: 1.15 }}
                  className="bg-gray-700 text-white p-2.5 rounded-full transition-colors hover:bg-[#FF7900] hover:text-white"
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
            <h3 className="text-base font-bold mb-5 text-[#ff9422] tracking-wide uppercase">Quick Links</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-[#FF7900] transition-colors">
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
            <h3 className="text-base font-bold mb-5 text-[#ff9422] tracking-wide uppercase">Our Services</h3>
            <ul className="space-y-3 text-white/80 text-sm">
              {["Industrial Plots", "Residential Plots", "NA Plots", "Custom Plot Sizes", "Site Development", "Site Maintenance"].map((s) => (
                <li key={s} className="cursor-default">→ {s}</li>
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
            <h3 className="text-base font-bold mb-5 text-[#ff9422] tracking-wide uppercase">Contact Us</h3>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#ff9422] mt-0.5 shrink-0" />
                <span>A wing, Shop no.145, Jai Ganesh Samrajya, Spine Road near Cosmos Bank, Pune – 411028</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#ff9422] shrink-0" />
                <a href="tel:9822329994" className="hover:text-[#FF7900] transition">+91 9822329994</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#ff9422] shrink-0" />
                <a href="mailto:sudambhore@gmail.com" className="hover:text-[#FF7900] transition">sudambhore@gmail.com</a>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Divider + Copyright */}
        <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
          © {new Date().getFullYear()} Saikrupa Developers. All rights reserved. |{" "}
          <span className="text-white/60">Industrial & Residential Plots, Pune</span>
        </div>

      </div>
    </footer>
  );
}
