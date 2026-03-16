import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      alert("Please fill required fields");
      return;
    }
    const text = `Hello Saikrupa Developers,\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}\n\nI am interested in your services.`;
    window.open("https://wa.me/919822329994?text=" + encodeURIComponent(text), "_blank");
    setSuccess(true);
    setForm({ name: "", phone: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="pt-24 pb-20 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Contact Saikrupa Developers
        </motion.h1>

        {/* Two-column: Form (left) + Map (right) */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT — Form + Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Contact info */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-yellow-500 mt-1 shrink-0" />
                <p className="text-gray-700">
                  Jai Ganesh Samrajya, Spine Road<br />Pune, Maharashtra
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-yellow-500 shrink-0" />
                <p className="text-gray-700">+91 9822329994</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-yellow-500 shrink-0" />
                <p className="text-gray-700">sudambhore@gmail.com</p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button
                  type="submit"
                  className="w-full bg-yellow-500 text-black py-3 rounded-lg font-semibold hover:bg-yellow-400 transition"
                >
                  Send via WhatsApp
                </button>
                {success && (
                  <p className="text-green-600 font-medium text-center">
                    ✔ Opening WhatsApp... Please send the message.
                  </p>
                )}
              </form>
            </div>
          </motion.div>

          {/* RIGHT — Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl overflow-hidden shadow-lg h-full min-h-[500px]"
          >
            <iframe
              title="Saikrupa Developers Location"
              src="https://maps.google.com/maps?q=Jai%20Ganesh%20Samrajya%20Spine%20Road%20Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[500px]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
