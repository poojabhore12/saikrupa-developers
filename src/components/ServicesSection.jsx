import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    image: null,
    title: "Industrial Plots",
    desc: "NA-approved industrial plots with wide roads, electricity, and water supply. Ideal for factories, warehouses, and manufacturing units.",
    badge: "Most Popular",
    badgeColor: "bg-[#FF7900] text-white",
  },
  {
    image: null,
    title: "Residential Plots",
    desc: "Peaceful and well-planned residential plots in prime locations with all basic amenities for your dream home.",
    badge: null,
    badgeColor: "",
  },
  {
    image: null,
    title: "NA Plots",
    desc: "Non-agricultural approved plots with clear titles, ready for immediate construction or investment.",
    badge: null,
    badgeColor: "",
  },
  {
    image: null,
    title: "Custom Plot Sizes",
    desc: "Flexible plot sizes from 1000 sq.ft to 10,000 sq.ft to match your budget and requirements.",
    badge: null,
    badgeColor: "",
  },
  {
    image: null,
    title: "Site Development",
    desc: "Complete site development including road construction, boundary walls, drainage, and utility connections.",
    badge: null,
    badgeColor: "",
  },
  {
    image: null,
    title: "Site Maintenance",
    desc: "Ongoing maintenance services for plots and developed sites — including cleaning, repairs, drainage upkeep, and general upkeep of common areas.",
    badge: null,
    badgeColor: "",
  },
];

export default function ServicesSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-14 md:py-24 bg-gray-50">

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            From industrial plotting to complete site development — we provide end-to-end real estate solutions.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-[#FF7900]/20 hover:border-[#ffb055] transition-all duration-300 cursor-default group"
            >
              <div className="w-full h-48 overflow-hidden bg-gray-100">
                {service.image ? (
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200" />
                )}
              </div>
              {service.badge && (
                <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                  {service.badge}
                </span>
              )}
              <div className="p-7">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#cc6100] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              {(() => {
                const service = services[current];
                return (
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md"
                  >
                    <div className="w-full h-48 overflow-hidden bg-gray-100">
                      {service.image ? (
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200" />
                      )}
                    </div>
                    {service.badge && (
                      <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${service.badgeColor}`}>
                        {service.badge}
                      </span>
                    )}
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center gap-2 mt-5">
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-[#FF7900] scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
