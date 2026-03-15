import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function StatsSection() {

  const stats = [
    { number: 10, label: "Years Experience" },
    { number: 50, label: "Projects Completed" },
    { number: 200, label: "Happy Clients" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when section enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 2000;
      const incrementTime = 20;
      const step = end / (duration / incrementTime);

      const counter = setInterval(() => {
        start += step;

        setCounts(prev => {
          const updated = [...prev];
          updated[index] = Math.min(Math.floor(start), end);
          return updated;
        });

        if (start >= end) clearInterval(counter);

      }, incrementTime);
    });

  }, [visible]);

  return (
    <section ref={ref} className="py-20 bg-gray-900 text-white">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">

        {stats.map((stat, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <h2 className="text-5xl font-bold text-yellow-400 mb-3">
              {counts[index]}+
            </h2>

            <p className="text-lg">
              {stat.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}