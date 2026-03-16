import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// HOW TO ADD PHOTOS:
// Drop images into the matching folder inside public/projects/
//
//  Ongoing   → public/projects/ongoing/ongoing1.jpg … ongoing4.jpg
//  Completed → public/projects/completed/completed1.jpg … completed4.jpg
//  Upcoming  → public/projects/upcoming/upcoming1.jpg … upcoming4.jpg
//
// You can add more by duplicating a slot entry below.
// ─────────────────────────────────────────────────────────────
const projects = [
  {
    category: "Ongoing Projects",
    description: "Quality construction in progress across Pune.",
    items: [
      { name: "Ongoing Project 1", src: "/projects/ongoing/ongoing1.jpg" },
      { name: "Ongoing Project 2", src: "/projects/ongoing/ongoing2.jpg" },
      { name: "Ongoing Project 3", src: "/projects/ongoing/ongoing3.jpg" },
      { name: "Ongoing Project 4", src: "/projects/ongoing/ongoing4.jpg" },
    ],
  },
  {
    category: "Completed Projects",
    description: "Successfully delivered homes and commercial spaces.",
    items: [
      { name: "Completed Project 1", src: "/projects/completed/completed1.jpg" },
      { name: "Completed Project 2", src: "/projects/completed/completed2.jpg" },
      { name: "Completed Project 3", src: "/projects/completed/completed3.jpg" },
      { name: "Completed Project 4", src: "/projects/completed/completed4.jpg" },
    ],
  },
  {
    category: "Upcoming Projects",
    description: "Exciting new developments coming soon.",
    items: [
      { name: "Upcoming Project 1", src: "/projects/upcoming/upcoming1.jpg" },
      { name: "Upcoming Project 2", src: "/projects/upcoming/upcoming2.jpg" },
      { name: "Upcoming Project 3", src: "/projects/upcoming/upcoming3.jpg" },
      { name: "Upcoming Project 4", src: "/projects/upcoming/upcoming4.jpg" },
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


  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl overflow-hidden shadow-lg bg-white group"
    >
      {/* Carousel */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
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


        {/* Dots */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.items.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "bg-yellow-400 w-4" : "bg-white/60 w-2"}`}
            />
          ))}
        </div>

      </div>

      {/* Info — category label + current project name */}
      <div className="p-5">
        <p className="text-xs text-yellow-600 font-semibold uppercase tracking-wide mb-1">
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
          <h2 className="text-3xl font-bold">Our Projects</h2>
          <p className="text-gray-500 mt-2">
            Explore our portfolio of quality construction projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
