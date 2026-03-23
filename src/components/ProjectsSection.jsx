import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff, ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "../assets/gallery/g4.jpeg";
import g2 from "../assets/gallery/g5.jpeg";
import g3 from "../assets/gallery/g6.jpeg";
import g4 from "../assets/gallery/g7.jpeg";
import site1 from "../assets/site_img/site1.jpeg";
import site2 from "../assets/site_img/site2.jpeg";
import site3 from "../assets/site_img/site3.jpeg";
import site4 from "../assets/site_img/site4.jpeg";
import site5 from "../assets/site_img/site5.jpeg";
import site6 from "../assets/site_img/site6.jpeg";
import site7 from "../assets/site_img/site7.jpeg";
import site8 from "../assets/site_img/site8.jpeg";

const projects = [
  {
    category: "Ongoing Projects",
    description: "Quality construction in progress across Pune.",
    items: [
      { name: "Ongoing Project", src: site1 },
      { name: "Ongoing Project", src: site2 },
      { name: "Ongoing Project", src: site3 },
      { name: "Ongoing Project", src: site4 },
    ],
  },
  {
    category: "Completed Projects",
    description: "Successfully delivered homes and commercial spaces.",
    items: [
      { name: "Completed Project", src: g1 },
      { name: "Completed Project", src: g2 },
      { name: "Completed Project", src: g3 },
      { name: "Completed Project", src: g4 },
    ],
  },
  {
    category: "Upcoming Projects",
    description: "Exciting new developments coming soon.",
    items: [
      { name: "Upcoming Project", src: site5 },
      { name: "Upcoming Project", src: site6 },
      { name: "Upcoming Project", src: site7 },
      { name: "Upcoming Project", src: site8 },
    ],
  },
];

function ImgWithFallback({ src, alt, className }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className={`${className} bg-gray-100 flex flex-col items-center justify-center gap-2`}>
        <ImageOff size={28} className="text-gray-300" />
        <p className="text-gray-300 text-xs text-center px-4">{src}</p>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}

function ProjectCard({ project, index }) {
  const [current, setCurrent] = useState(0);
  const total = project.items.length;

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c - 1 + total) % total); };
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c + 1) % total); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white group"
    >
      {/* Carousel */}
      <div className="relative h-44 md:h-56 overflow-hidden bg-gray-100">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="absolute inset-0"
          >
            <ImgWithFallback
              src={project.items[current].src}
              alt={project.items[current].name}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>


        {/* Prev / Next arrows */}
        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition">
          <ChevronLeft size={16} />
        </button>
        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 transition">
          <ChevronRight size={16} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.items.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "bg-[#ff9422] w-4" : "bg-white/60 w-2"}`}
            />
          ))}
        </div> 

      </div>

      {/* Info — category label + current project name */}
      <div className="p-5">
        <p className="text-xs text-[#FF7900] font-semibold uppercase tracking-wide mb-1">
          {project.category}
        </p>
        <AnimatePresence mode="wait">
          <motion.h3
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="text-lg font-bold text-gray-800 mb-1"
          >
            {project.items[current].name}
          </motion.h3>
        </AnimatePresence>
        <p className="text-gray-500 text-sm">{project.description}</p>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="text-gray-500 mt-2">
            Explore our portfolio of quality construction projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
