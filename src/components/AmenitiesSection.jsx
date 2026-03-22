import { motion } from "framer-motion";
import amenitiesImg from "../assets/gallery/gallery7.jpeg";

export default function AmenitiesSection() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            What's Included
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            World-Class Amenities
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Every plot comes equipped with top-grade infrastructure — so you can build with confidence from day one.
          </p>
        </motion.div>

        {/* Image — swap placeholder with img once you add the file */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={amenitiesImg}
            alt="World-Class Amenities"
            className="w-full h-64 md:h-[480px] object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
