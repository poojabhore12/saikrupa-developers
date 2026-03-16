import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Building2, Calendar } from "lucide-react";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience", icon: Calendar },
  { number: 75, suffix: "+", label: "Projects Completed", icon: Building2 },
  { number: 200, suffix: "+", label: "Happy Clients", icon: Users },
  { number: 40, suffix: "+", label: "Awards & Recognition", icon: Trophy },
];

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const step = end / (2000 / 20);
      const counter = setInterval(() => {
        start += step;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(Math.floor(start), end);
          return updated;
        });
        if (start >= end) clearInterval(counter);
      }, 20);
    });
  }, [visible]);

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/5 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-yellow-400 font-semibold tracking-widest text-sm uppercase mb-14"
        >
          Our Achievements
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-500/20 p-3 rounded-full">
                    <Icon size={28} className="text-yellow-400" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold text-yellow-400 mb-1">
                  {counts[index]}{stat.suffix}
                </h2>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
