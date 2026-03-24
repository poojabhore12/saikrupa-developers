import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import ceo from "../assets/ceo.webp";
import gulab from "../assets/gulab.png";
import vishal from "../assets/vishal.webp";
import jaganath from "../assets/jaganath.jpeg";
import prajakta from "../assets/prajakta.jpeg";

const team = [
  { name: "Sudam Bhore",     role: "Founder & CEO",        image: ceo },
  { name: "Gulab Bhore",     role: "Site Coordinator",      image: gulab },
  { name: "Vishal Bhore",    role: "Project Engineer",      image: vishal },
  { name: "Akash Shinde",    role: "Site Supervisor",       image: null },
  { name: "Jaganath Merage", role: "Office Administration", image: jaganath },
  { name: "Prajakta Bobade", role: "Accountant",          image: prajakta },
];

function MemberCard({ member }) {
  return (
    <div className="group relative overflow-hidden shadow-lg bg-gray-900 aspect-[4/5]">
      {/* Photo */}
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="absolute inset-0 w-full h-full bg-gray-700 flex items-center justify-center">
          <User size={56} className="text-gray-500" />
        </div>
      )}

      {/* Gradient overlay always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Info at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-bold text-lg leading-tight">{member.name}</h3>
        <span className="inline-block mt-1.5 text-xs font-semibold text-[#FF7900] bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 rounded-full">
          {member.role}
        </span>
      </div>

      {/* Orange top accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF7900] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
}

function NavButtons({ page, totalPages, setPage }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {Array.from({ length: totalPages }).map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`transition-all duration-300 rounded-full ${
            i === page ? "w-6 h-2 bg-[#FF7900]" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
          }`}
        />
      ))}
    </div>
  );
}

export default function TeamSection() {
  const [mobilePage, setMobilePage] = useState(0);
  const [desktopPage, setDesktopPage] = useState(0);

  const desktopPageSize = 3;
  const desktopTotalPagesCount = Math.ceil(team.length / desktopPageSize);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(() => {
      setMobilePage((p) => (p + 1) % team.length);
      setDesktopPage((p) => (p + 1) % desktopTotalPagesCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [desktopTotalPagesCount]);
  const desktopTotalPages = desktopTotalPagesCount;
  const desktopVisible = team.slice(
    desktopPage * desktopPageSize,
    desktopPage * desktopPageSize + desktopPageSize
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Our People
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Our Team</h2>
          <p className="text-gray-400 text-sm mt-3 max-w-sm mx-auto leading-relaxed">
            The dedicated people behind every plot, every project, and every promise.
          </p>
        </motion.div>

        {/* Mobile: 1 card at a time */}
        <div className="md:hidden overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={mobilePage}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="max-w-xs mx-auto"
            >
              <MemberCard member={team[mobilePage]} />
            </motion.div>
          </AnimatePresence>
          <NavButtons page={mobilePage} totalPages={team.length} setPage={setMobilePage} />
        </div>

        {/* Desktop: 3 cards at a time */}
        <div className="hidden md:block overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={desktopPage}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-3 gap-8"
            >
              {desktopVisible.map((member, index) => (
                <MemberCard key={index} member={member} />
              ))}
            </motion.div>
          </AnimatePresence>
          {desktopTotalPages > 1 && (
            <NavButtons page={desktopPage} totalPages={desktopTotalPages} setPage={setDesktopPage} />
          )}
        </div>

      </div>
    </section>
  );
}
