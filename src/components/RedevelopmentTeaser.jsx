import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/project5.png";

const stats = [
  { value: "10+",  label: "Years of Experience" },
  { value: "50+",  label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24hr", label: "Response Time" },
];

export default function RedevelopmentTeaser() {
  return (
    <section className="relative overflow-hidden">

      {/* Background image with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gray-900/85" />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">

        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-4"
        >
          Redevelopment
        </motion.p>

        {/* Heading + CTA row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight max-w-2xl mb-6">
              Your Property Has<br />
              <span className="text-[#FF7900]">More Potential</span><br />
              Than You Think.
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-md mb-7">
              We partner with societies, landowners, and individuals to transform
              underutilised properties into modern, high-value spaces.
            </p>
            <Link
              to="/redevelopment"
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#cc6100] text-white font-bold px-7 py-3.5 transition-colors duration-200 group w-fit"
            >
              Explore Redevelopment
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px pt-10 border-t border-white/15"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.08 }}
              className="flex flex-col gap-1 px-2"
            >
              <span className="w-8 h-0.5 bg-[#FF7900] mb-2" />
              <p className="text-3xl md:text-4xl font-black text-white">{s.value}</p>
              <p className="text-white/50 text-xs font-medium uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
