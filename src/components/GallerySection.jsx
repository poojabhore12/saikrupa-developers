import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.jpeg";
import g3 from "../assets/gallery/g3.jpeg";
import g4 from "../assets/gallery/g4.jpeg";
import g9 from "../assets/gallery/g9.jpeg";
import g10 from "../assets/gallery/g10.jpeg";

const photos = [
  { src: gallery1, label: "Site Overview",      location: "Pune" },
  { src: gallery2, label: "Plot Layout",         location: "Pune" },
  { src: g3,       label: "Road Infrastructure", location: "Pune" },
  { src: g4,       label: "Industrial Zone",     location: "Pune" },
  { src: g9,       label: "Site Development",    location: "Pune" },
  { src: g10,      label: "Boundary & Gating",   location: "Pune" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
              Our Work
            </p>
            <h2 className="text-3xl font-bold text-gray-800">Site & Building Gallery</h2>
          </div>
          <Link
            to="/gallery"
            className="shrink-0 inline-flex items-center gap-2 border-2 border-[#FF7900] text-[#FF7900] hover:bg-[#FF7900] hover:text-white font-semibold px-5 py-2.5 text-sm transition-all duration-200 group"
          >
            View Gallery
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(photo)}
              className="relative overflow-hidden shadow-md cursor-pointer group aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.label}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                <div className="w-full px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold truncate">{photo.label}</p>
                  <p className="flex items-center gap-1 text-[#ffb055] text-xs mt-0.5">
                    <MapPin size={10} />{photo.location}
                  </p>
                </div>
              </div>

              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                  <ZoomIn size={14} className="text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full overflow-hidden shadow-2xl"
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-semibold text-base">{selected.label}</p>
                <p className="flex items-center gap-1.5 text-[#ffb055] text-sm mt-1">
                  <MapPin size={13} />{selected.location}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
