import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users } from "lucide-react";

export default function PartnershipSection() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Animated icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#FF7900]/10 mb-8"
        >
          <Users size={30} className="text-[#FF7900]" />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-5"
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
          className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
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
