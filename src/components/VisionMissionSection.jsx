import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";

const items = [
  {
    number: "01",
    icon: Eye,
    label: "Vision",
    heading: "Building Pune's Most Trusted Real Estate Legacy",
    body: "We envision a Pune where every family and industry finds a plot they can call their own — legally clear, infrastructure-ready, and backed by a developer they can trust. Our goal is to set the benchmark for transparency and quality in industrial and residential plotting.",
  },
  {
    number: "02",
    icon: Target,
    label: "Mission",
    heading: "End-to-End Support, Zero Compromises",
    body: "We provide NA-approved plots with honest pricing and no hidden charges. From site selection and legal documentation to registration and handover — our team walks with you at every step, ensuring your investment is safe, simple, and stress-free.",
  },
];

export default function VisionMissionSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">What Drives Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Vision & Mission</h2>
        </motion.div>

        {/* Items */}
        <div className="space-y-0 divide-y divide-gray-100">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="grid grid-cols-12 gap-6 py-14 group"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1">
                  <span className="text-5xl font-black text-gray-100 group-hover:text-[#FF7900]/20 transition-colors duration-500 leading-none">
                    {item.number}
                  </span>
                </div>

                {/* Icon + label */}
                <div className="col-span-10 md:col-span-2 flex md:flex-col items-start gap-3 pt-1">
                  <div className="w-10 h-10 bg-[#FF7900]/10 group-hover:bg-[#FF7900] flex items-center justify-center transition-colors duration-300 shrink-0">
                    <Icon size={18} className="text-[#FF7900] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-widest text-gray-400 mt-auto hidden md:block">
                    {item.label}
                  </span>
                </div>

                {/* Divider */}
                <div className="hidden md:flex col-span-1 justify-center pt-2">
                  <div className="w-px bg-gray-200 h-full group-hover:bg-[#FF7900]/30 transition-colors duration-500" />
                </div>

                {/* Text */}
                <div className="col-span-12 md:col-span-8 pt-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-[#FF7900] transition-colors duration-300">
                    {item.heading}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
