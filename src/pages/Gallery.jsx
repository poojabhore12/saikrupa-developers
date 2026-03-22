import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, MapPin } from "lucide-react";

import g1  from "../assets/gallery/g1.jpeg";
import g2  from "../assets/gallery/g2.jpeg";
import g3  from "../assets/gallery/g3.jpeg";
import g4  from "../assets/gallery/g4.jpeg";
import g5  from "../assets/gallery/g5.jpeg";
import g6  from "../assets/gallery/g6.jpeg";
import g7  from "../assets/gallery/g7.jpeg";
import g9  from "../assets/gallery/g9.jpeg";
import g10 from "../assets/gallery/g10.jpeg";
import gallery1 from "../assets/gallery/gallery1.jpeg";
import gallery2 from "../assets/gallery/gallery2.jpeg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import heroImage from "../assets/gallery/g7.jpeg";

const photos = [
  { src: g1,       label: "Site Overview",         location: "Pune" },
  { src: g2,       label: "Plot Layout",            location: "Pune" },
  { src: g3,       label: "Road Infrastructure",    location: "Pune" },
  { src: g4,       label: "Industrial Zone",        location: "Pune" },
  { src: g5,       label: "Site Development",       location: "Pune" },
  { src: g6,       label: "Boundary & Gating",      location: "Pune" },
  { src: g7,       label: "Project Inauguration",   location: "Pune" },
  { src: gallery1, label: "Completed Site",         location: "Pune" },
  { src: g9,       label: "Site Infrastructure",    location: "Pune" },
  { src: g10,      label: "Development Work",       location: "Pune" },
  { src: project1, label: "Industrial Plots",       location: "Pune" },
  { src: gallery2, label: "Residential Plots",      location: "Pune" },
  { src: project3, label: "NA Approved Plots",      location: "Pune" },
  { src: project4, label: "Custom Plot Sizes",      location: "Pune" },
  { src: project5, label: "Site Aerial View",       location: "Pune" },
  { src: project6, label: "Site Maintenance",       location: "Pune" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="pt-16">

      {/* Hero */}
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
            Our Projects
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
          <p className="text-white/70 text-sm max-w-lg mx-auto">
            A visual showcase of our industrial plots, residential sites, and completed projects.
          </p>
        </motion.div>
      </div>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
              All Projects
            </p>
            <h2 className="text-3xl font-bold text-gray-800">Site & Project Gallery</h2>
            <p className="text-gray-500 mt-2 text-sm max-w-xl mx-auto">
              Browse through our completed projects, plot developments, and site infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setSelected(photo)}
                className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.label}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                  <div className="w-full px-3 py-2.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-xs font-semibold truncate">{photo.label}</p>
                    <p className="flex items-center gap-1 text-[#ffb055] text-xs mt-0.5">
                      <MapPin size={10} />
                      {photo.location}
                    </p>
                  </div>
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
                    <ZoomIn size={14} className="text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={selected.src}
                alt={selected.label}
                className="w-full object-cover max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <p className="text-white font-semibold text-base">{selected.label}</p>
                <p className="flex items-center gap-1.5 text-[#ffb055] text-sm mt-1">
                  <MapPin size={13} />
                  {selected.location}
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

    </div>
  );
}
