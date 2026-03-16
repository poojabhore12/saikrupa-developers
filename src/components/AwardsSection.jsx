import { motion } from "framer-motion";
import awardImage from "../assets/award.png";
import { Star, Award } from "lucide-react";

export default function AwardsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase mb-2">
            Recognition
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Awards & Honours</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-yellow-400 rounded-2xl z-0" />
            <img
              src={awardImage}
              alt="Global Excellence Award"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-yellow-100 p-3 rounded-full">
                <Award size={28} className="text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Global Excellence Award</h3>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Saikrupa Developers was honoured at the <strong>Global Excellence Awards</strong>{" "}
              organised by Brand Empower Pvt. Ltd. for outstanding performance and excellence in
              the real estate sector.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              The prestigious ceremony was held at <strong>Grand Hyatt Hotel, Mumbai</strong>{" "}
              on 12th October 2019 in the presence of chief guest{" "}
              <strong>Madhuri Dixit Nene</strong>.
            </p>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Star size={22} className="text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-yellow-500 pl-4 text-gray-500 italic text-sm">
              "A testament to our commitment to quality, trust, and excellence in every project we deliver."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
