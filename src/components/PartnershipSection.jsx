import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";
import bgImage from "../assets/bgimage.jpeg";

export default function PartnershipSection() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">

        {/* Animated icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 mb-8"
        >
          <Users size={30} className="text-[#FF7900]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5"
        >
          We don't just deliver projects.
          <br />
          <span className="text-[#FF7900]">We build partnerships.</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/75 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Our teams embed with yours to understand your challenges deeply and
          co-create solutions that last.
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/about#team"
            className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#cc6100] text-white font-bold px-8 py-3.5 rounded-xl shadow-lg shadow-[#FF7900]/25 transition-all duration-200 group"
          >
            Meet Our Team
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
