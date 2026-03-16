import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, ShieldCheck, Clock, MapPin, Landmark, Leaf } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Quality Construction",
    desc: "Durable and modern structures built with premium materials and high engineering standards.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Developer",
    desc: "Known for transparency, reliability, and professional project delivery since 2011.",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    desc: "Delivering successful construction and plotting projects across Pune for over a decade.",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    desc: "Strategically located industrial and residential plots with excellent connectivity.",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Landmark,
    title: "Legal & Clear Titles",
    desc: "All plots come with RERA-approved and legally verified documentation — zero hassle.",
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Spaces",
    desc: "Green belts, tree plantations, and environment-friendly development practices.",
    color: "bg-teal-50 text-teal-600",
  },
];

export default function AboutPreview() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase mb-2">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Saikrupa Developers — Built on Trust
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Founded in 2011, we specialize in industrial and residential plotting with a strong
            commitment to quality, legal clarity, and customer satisfaction.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md cursor-default group transition-all duration-300"
              >
                <div className={`inline-flex p-3 rounded-xl mb-5 ${feature.color}`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-yellow-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            to="/about"
            className="inline-block bg-yellow-500 text-black px-10 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-200 shadow-md hover:shadow-yellow-200"
          >
            Learn More About Us
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
