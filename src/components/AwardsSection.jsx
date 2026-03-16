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
              <h3 className="text-2xl font-bold text-gray-800">Global Excellence Award 2019</h3>
            </div>

            {/* Award Category */}
            <div className="inline-flex items-center gap-2 mb-5">
              <Star size={14} className="text-yellow-500 fill-yellow-500" />
              <span className="text-yellow-700 font-semibold text-sm">Entrepreneur of the Year — Real Estate</span>
            </div>

            <p className="text-gray-600 mb-4 leading-relaxed">
              Saikrupa Group of Industries was honoured at the <strong>Global Excellence Awards</strong>{" "}
              organised by <strong>Brand Empower Pvt. Ltd.</strong> for remarkable achievements and
              excellence in the real estate sector.
            </p>

            <p className="text-gray-600 mb-4 leading-relaxed">
              The prestigious ceremony was held in <strong>Mumbai, 2019</strong> in the presence of
              chief guest <strong>Mrs. Madhuri Dixit Nene</strong>. The award was received by{" "}
              <strong>Mr. Sudam Bhore</strong> on behalf of the group.
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

            <blockquote className="border-l-4 border-yellow-500 pl-4 text-gray-500 italic text-sm mb-6">
              "A testament to our commitment to quality, trust, and excellence in every project we deliver."
            </blockquote>

            {/* Verification Link */}
            <a
              href="https://www.brandempower.org/gea-2019-winners/saikrupa-group-of-industries-234.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-yellow-700 font-medium border border-yellow-400 rounded-lg px-4 py-2 hover:bg-yellow-50 transition"
            >
              <Award size={15} />
              Verify Award — Brand Empower Official Site
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
