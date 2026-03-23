import heroImage from "../assets/hero.png";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function Hero() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }

    const message = `Hello Saikrupa Developers,

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

I am interested in your construction / development services.
Please contact me with more information.`;

    const whatsappURL =
      "https://wa.me/919822329994?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    // show success message
    setSuccess(true);

    // reset form
    setForm({
      name: "",
      phone: "",
      email: ""
    });

    // hide popup after 3 seconds
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center">
      {/* Background image — loaded as <img> for browser priority */}
      <img
        src={heroImage}
        alt=""
        fetchpriority="high"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6 md:gap-12 items-center text-white pt-24 pb-10 md:py-20">

        {/* LEFT TEXT */}
        <div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            Saikrupa Developers
          </h1>

          <TypeAnimation
            sequence={[
              "Trusted Real Estate Development in Pune",
              2000,
              "10+ Years of Construction Excellence",
              2000,
              "Building Quality Projects with Trust",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-xl mb-6 block"
          />

          <p>
            Where vision meets legacy — delivering premium NA-approved plots,
            masterplanned developments, and end-to-end real estate excellence across Pune.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-3 mt-6">
            <a
              href="https://wa.me/917709361381?text=Hello%2C%20I%20need%20assistance%20with%20site%20maintenance%20work.%20Please%20contact%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FF7900] hover:bg-[#cc6100] text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base transition"
            >
              Site Maintenance
            </a>
            <a
              href="https://wa.me/919822329994?text=Hello%20Saikrupa%20Developers%2C%0AI%20am%20interested%20in%20your%20services.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg font-semibold text-sm md:text-base hover:bg-green-400 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-row gap-4 md:gap-8 mt-6 md:mt-10">
            {[
              { number: "100+", label: "Plots Developed" },
              { number: "30+", label: "Projects Delivered" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="text-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/20"
              >
                <p className="text-3xl font-bold text-white">{stat.number}</p>
                <p className="text-xs mt-0.5 text-white/70">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* FORM */}
        <div className="bg-white rounded-xl p-8 shadow-xl text-gray-800">

          <h3 className="text-xl font-semibold mb-4">
            Request a Call
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
            />

            <button
              type="submit"
              className="w-full bg-[#FF7900] hover:bg-[#cc6100] text-white py-3 rounded-lg font-semibold transition"
            >
              Submit
            </button>

          </form>

          {/* SUCCESS MESSAGE */}
          {success && (
            <p className="text-green-600 mt-4 font-medium">
              ✔ Opening WhatsApp... Please send the message.
            </p>
          )}

        </div>

      </div>
    </section>
  );
}