import { motion } from "framer-motion";
import client1 from "../assets/clients/client1.png";
import client2 from "../assets/clients/client2.png";
import client3 from "../assets/clients/client3.png";

const clients = [client1, client2, client3, client1, client2, client3]; // duplicate for marquee effect

export default function ClientsSection() {
  return (
    <section className="pt-8 pb-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2"
        >
          Partners & Clients
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl font-bold"
        >
          Trusted By Our Clients
        </motion.h2>
      </div>

      {/* Scrolling marquee */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          {[...clients, ...clients].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Client ${i + 1}`}
              loading="lazy"
              className="h-16 w-auto opacity-60 hover:opacity-100 transition-all duration-300 shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
