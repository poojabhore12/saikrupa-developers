import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageOff } from "lucide-react";
import g1  from "../assets/gallery/g1.jpeg";
import g2  from "../assets/gallery/g2.jpeg";
import g3  from "../assets/gallery/g3.jpeg";
import g4  from "../assets/gallery/g4.jpeg";
import g5  from "../assets/gallery/g5.jpeg";
import g6  from "../assets/gallery/g6.jpeg";
import g7  from "../assets/gallery/g7.jpeg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    category: "Ongoing Projects",
    description: "Quality construction in progress across Pune.",
    items: [
      { name: "Ongoing Project", src: g5 },
      { name: "Ongoing Project", src: project2 },
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
      { name: "Completed Project", src: g5 },
      { name: "Completed Project", src: g6 },
    ],
  },
  {
    category: "Upcoming Projects",
    description: "Exciting new developments coming soon.",
    items: [
      { name: "Upcoming Project", src: g7 },
      { name: "Upcoming Project", src: project4 },
      { name: "Upcoming Project", src: project5 },
      { name: "Upcoming Project", src: project6 },
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


        {/* Dots */}
        {/* <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {project.items.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${i === current ? "bg-[#ff9422] w-4" : "bg-white/60 w-2"}`}
            />
          ))}
        </div> */}

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
