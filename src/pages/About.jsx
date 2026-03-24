import { motion } from "framer-motion";
import heroImage from "../assets/gallery/g5.jpeg";
import AboutSection from "../components/AboutSection";
import VisionMissionSection from "../components/VisionMissionSection";
import GallerySection from "../components/GallerySection";
import TeamSection from "../components/TeamSection";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, MapPin } from "lucide-react";

function AboutHero() {
  return (
    <div
      className="relative h-64 md:h-80 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative text-center text-white px-6"
      >
        <p className="text-[#ff9422] font-semibold tracking-widest text-sm uppercase mb-2">
          Saikrupa Developers
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
        <p className="text-white/70 text-sm max-w-lg mx-auto">
          10+ years of trust, quality, and excellence in industrial & residential plotting across Pune.
        </p>
      </motion.div>
    </div>
  );
}

function CTASection() {
  return (
    <section
      className="relative py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-4xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[#ff9422] font-semibold tracking-widest text-sm uppercase mb-3">
            Let's Build Together
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Ready to Invest in Your <br className="hidden md:block" />
            <span className="text-[#ff9422]">Dream Plot?</span>
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-xl mx-auto mb-10">
            Reach out to our team today for site visits, pricing, and complete legal guidance.
            We're here to make your investment simple and trustworthy.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* <a
              href="https://wa.me/919822329994?text=Hello%20Saikrupa%20Developers%2C%0AI%20am%20interested%20in%20your%20services.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white px-7 py-3 rounded-xl font-bold transition shadow-lg"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </a> */}
            <a
              href="tel:9822329994"
              className="inline-flex items-center gap-2 bg-[#FF7900] hover:bg-[#cc6100] text-white px-7 py-3 rounded-xl font-bold transition shadow-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-7 py-3 rounded-xl font-bold transition"
            >
              <MapPin size={20} />
              Visit Our Office
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="pt-16">
      <AboutHero />
      <AboutSection />
      <VisionMissionSection />
      <GallerySection />
      <TeamSection />
      <CTASection />
    </div>
  );
}
