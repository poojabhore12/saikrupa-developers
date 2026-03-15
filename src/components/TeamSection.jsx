import { motion } from "framer-motion";

import ceo from "../assets/ceo.jpg";
import vishal from "../assets/vishal.jpg";
import gulab from "../assets/gulab.jpg";
import jaganath from "../assets/jaganath.jpg";
import prajakta from "../assets/prajakta.jpg";

export default function TeamSection() {

  const team = [
    {
      name: "Sudam Pandurang Bhore",
      role: "Founder & CEO",
      image: ceo,
      desc: "Experienced real estate developer with over 10 years of expertise in construction and project development."
    },
    {
      name: "Vishal Bhore",
      role: "Project Engineer",
      image: vishal,
      desc: "B.E Civil graduate responsible for project planning, structural supervision, and maintaining engineering standards."
    },
    {
      name: "Gulab Bhore",
      role: "Site Supervisor",
      image: gulab,
      desc: "Oversees day-to-day site activities and ensures construction work is executed as per project plans."
    },
    {
      name: "Jaganath Merage",
      role: "Office Administration",
      image: jaganath,
      desc: "Manages office operations, documentation, and coordination for smooth project workflow."
    },
    {
      name: "Prajakta Salunkhe",
      role: "Accountant",
      image: prajakta,
      desc: "Handles company financial records, budgeting, and accounting operations."
    }
  ];

  return (
    <section className="py-24 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Meet Our Team
        </motion.h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {team.map((member, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >

              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="h-72 w-full object-cover"
              />

              {/* Content */}
              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-yellow-500 font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}