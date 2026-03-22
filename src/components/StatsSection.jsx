import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Building2, Calendar } from "lucide-react";

const stats = [
  { number: 10, suffix: "+", label: "Years Experience", icon: Calendar },
  { number: 30, suffix: "+", label: "Projects Completed", icon: Building2 },
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
    <section ref={ref} className="bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-[#FF7900]/20 p-3 rounded-full">
                    <Icon size={26} className="text-[#ff9422]" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-1 text-[#ff9422]">
                  {counts[index]}{stat.suffix}
                </h2>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
