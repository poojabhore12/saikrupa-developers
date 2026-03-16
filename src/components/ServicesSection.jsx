import { motion } from "framer-motion";

const services = [
  {
    image: null,
    title: "Industrial Plots",
    desc: "NA-approved industrial plots with wide roads, electricity, and water supply. Ideal for factories, warehouses, and manufacturing units.",
    badge: "Most Popular",
    badgeColor: "bg-yellow-500 text-black",
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
    title: "NA Farmhouse Plots",
    desc: "Non-agricultural approved farmhouse plots surrounded by greenery — perfect for weekend retreats and eco-living.",
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
    title: "Legal Documentation",
    desc: "End-to-end assistance with 7/12, NA orders, sale deeds, and RERA compliance for hassle-free ownership.",
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
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase mb-2">
            What We Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            From industrial plotting to complete site development — we provide end-to-end real estate solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-100 hover:border-yellow-300 transition-all duration-300 cursor-default group"
            >
              {/* Image */}
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
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-yellow-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
