import { motion } from "framer-motion";
import { Building2, ShieldCheck, Clock, Phone, Play } from "lucide-react";

const VIDEO_LINK = "https://share.google/bW2Yt6GpKpUQn1kqE";

const values = [
  {
    icon: Building2,
    title: "Quality Construction",
    desc: "We deliver durable and well-designed plots and structures with high engineering standards.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Development",
    desc: "Transparency, reliability, and trust are the core values guiding every project we undertake.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    desc: "Extensive experience in industrial and residential plotting across Pune since 2011.",
  },
];

export default function AboutSection() {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold">About Saikrupa Developers</h1>
        </motion.div>

        {/* Video (left) + Company text (right) */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center mb-12 md:mb-20">

          {/* Video */}
          <motion.a
            href={VIDEO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="group relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-gradient-to-br from-gray-800 to-gray-900 block"
          >
            <div className="absolute inset-0 bg-[#FF7900]/5 group-hover:bg-[#FF7900]/10 transition-all duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="bg-[#FF7900] rounded-full p-5 shadow-2xl shadow-[#FF7900]/20/40 group-hover:shadow-[#FF7900]/20/60 transition-shadow"
              >
                <Play size={40} className="text-white fill-white ml-1" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-bold text-lg">Watch Our Projects</p>
                <p className="text-gray-400 text-sm mt-1">Click to open video</p>
              </div>
            </div>
            <div className="absolute top-3 right-3 bg-[#FF7900] text-white text-xs font-bold px-3 py-1 rounded-full">
              Video
            </div>
          </motion.a>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-600 leading-relaxed mb-4">
              Saikrupa Developers is a well-established real estate development company based in Pune,
              Maharashtra. The company is dedicated to delivering high-quality industrial and residential
              plots with a focus on transparency, trust, and strong project execution.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              With a commitment to excellence, Saikrupa Developers creates modern, legally clear, and
              well-planned plots that provide long-term value to clients while contributing to Pune's
              growing urban and industrial landscape.
            </p>

            <a
              href="https://wa.me/919822329994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#cc6100] text-white px-6 py-3 rounded-xl font-bold transition shadow"
            >
              <Phone size={18} />
              Contact Us
            </a>
          </motion.div>

        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-gray-50 border border-gray-100 p-7 rounded-2xl shadow-sm text-center group transition-all duration-300"
              >
                <div className="inline-flex bg-[#ffe4bf] p-4 rounded-full mb-4 group-hover:bg-[#FF7900] transition-colors">
                  <Icon size={28} className="text-[#cc6100] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
