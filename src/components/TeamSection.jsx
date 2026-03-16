import { motion } from "framer-motion";
import ceo from "../assets/ceo.jpg";
import vishal from "../assets/vishal.png";
import gulab from "../assets/gulab.jpg";
import jaganath from "../assets/jaganath.jpg";
import prajakta from "../assets/prajakta.jpg";
import { Linkedin, Phone } from "lucide-react";

const team = [
  {
    name: "Sudam Bhore",
    role: "Founder & CEO",
    image: ceo,
    linkedin: "#", // replace with actual LinkedIn URL
  },
  {
    name: "Vishal Bhore",
    role: "Project Engineer",
    image: vishal,
    linkedin: "#",
  },
  {
    name: "Gulab Bhore",
    role: "Site Supervisor",
    image: gulab,
    linkedin: "#",
  },
  {
    name: "Jaganath Merage",
    role: "Office Administration",
    image: jaganath,
    linkedin: "#",
  },
  {
    name: "Prajakta Salunkhe",
    role: "Accountant",
    image: prajakta,
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-yellow-600 font-semibold tracking-widest text-sm uppercase mb-2">
            Our People
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center w-36 group"
            >
              {/* Circular photo */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-4 ring-4 ring-gray-100 group-hover:ring-yellow-400 transition-all duration-300 shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="text-sm font-bold text-gray-800 leading-tight mb-1">
                {member.name}
              </h3>

              {/* Role badge */}
              <span className="text-xs text-yellow-600 font-semibold bg-yellow-50 px-2 py-0.5 rounded-full mb-3">
                {member.role}
              </span>

              {/* Social links — uncomment when ready
              <div className="flex items-center gap-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-7 h-7 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                  title={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={13} />
                </a>
                <a
                  href={`tel:${member.phone}`}
                  className="flex items-center justify-center w-7 h-7 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-colors"
                  title={`Call ${member.name}`}
                >
                  <Phone size={13} />
                </a>
              </div>
              */}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
