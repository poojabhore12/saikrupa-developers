import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Find Us
          </p>
          <h2 className="text-3xl font-bold">Our Location</h2>
          <p className="text-gray-500 mt-2 text-sm">
            A wing, Shop no.145, Jai Ganesh Samrajya, Spine Road, Pune – 411028
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Saikrupa Developers Location"
            src="https://maps.google.com/maps?q=Jai+Ganesh+Samrajya+Spine+Road+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 md:h-96"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
}
