import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, MapPin } from "lucide-react";

// ─────────────────────────────────────────────
// HOW TO ADD YOUR PHOTOS:
// 1. Drop images into: public/gallery/
// 2. Add/update entries below with src, label, and location
// ─────────────────────────────────────────────
const photos = [
  { src: "/gallery/building1.png", label: "Building Front View",    location: "Spine Road, Pune" },
  { src: "/gallery/building2.png", label: "Construction Progress",  location: "Spine Road, Pune" },
  { src: "/gallery/building3.png", label: "Completed Structure",    location: "Spine Road, Pune" },
  { src: "/gallery/building4.png", label: "Interior Work",          location: "Spine Road, Pune" },
  { src: "/gallery/site1.png",     label: "Plot Layout – Phase 1",  location: "Pune" },
  { src: "/gallery/site2.png",     label: "Plot Layout – Phase 2",  location: "Pune" },
  { src: "/gallery/site3.png",     label: "Road & Infrastructure",  location: "Pune" },
  { src: "/gallery/site4.png",     label: "Aerial Site View",       location: "Pune" },
  { src: "/gallery/site5.png",     label: "Industrial Zone",        location: "Pune" },
  { src: "/gallery/site6.png",     label: "Boundary & Gating",      location: "Pune" },
  { src: "/gallery/site7.png",     label: "Plot Handover",          location: "Pune" },
  { src: "/gallery/site8.png",     label: "Project Inauguration",   location: "Pune" },
];

function Placeholder({ label }) {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center gap-2 p-4">
      <div className="w-10 h-10 rounded-full bg-[#ffe4bf] flex items-center justify-center">
        <ZoomIn size={18} className="text-[#FF7900]" />
      </div>
      <p className="text-gray-400 text-xs text-center font-medium">{label}</p>
      <p className="text-gray-300 text-xs text-center">Drop photo in<br />public/gallery/</p>
    </div>
  );
}

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Our Work
          </p>
          <h2 className="text-3xl font-bold">Site & Building Gallery</h2>
          <p className="text-gray-500 mt-2 text-sm">
            A look at our industrial plots, residential sites, and completed structures.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(photo)}
              className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
              <div style={{ display: "none" }} className="absolute inset-0">
                <Placeholder label={photo.label} />
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                <div className="w-full px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold truncate">{photo.label}</p>
                  {photo.location && (
                    <p className="flex items-center gap-1 text-[#ffb055] text-xs mt-0.5 truncate">
                      <MapPin size={10} />
                      {photo.location}
                    </p>
                  )}
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
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full object-cover max-h-[80vh]"
                onError={(e) => { e.target.style.display = "none"; }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-semibold text-base">{selected.label}</p>
                {selected.location && (
                  <p className="flex items-center gap-1.5 text-[#ffb055] text-sm mt-1">
                    <MapPin size={13} />
                    {selected.location}
                  </p>
                )}
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
