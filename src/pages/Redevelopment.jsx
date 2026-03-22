import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Building2, ClipboardList, HardHat, FileCheck, HandshakeIcon,
  CheckCircle, Mail, MessageCircle, ArrowRight,
} from "lucide-react";
import heroImage from "../assets/gallery/g1.jpeg";

const benefits = [
  { icon: Building2,     title: "Modern Infrastructure",   desc: "We rebuild with updated amenities, wider roads, better drainage, and modern utilities." },
  { icon: HardHat,       title: "Expert Execution",        desc: "10+ years of on-ground experience delivering quality redevelopment projects across Pune." },
  { icon: FileCheck,     title: "Timely Handover",         desc: "We commit to deadlines and ensure your redeveloped property is delivered on schedule, every time." },
  { icon: ClipboardList, title: "Transparent Planning",    desc: "Full project timeline, cost breakdown, and regular updates — no surprises." },
  { icon: HandshakeIcon, title: "Society-Friendly Approach", desc: "We work closely with existing residents and societies to ensure smooth transitions." },
  { icon: CheckCircle,   title: "Zero Hidden Charges",     desc: "Honest pricing from day one. What we quote is what you pay." },
];

const steps = [
  { number: "01", title: "Initial Consultation",    desc: "We visit your site, understand your requirements, and assess redevelopment feasibility." },
  { number: "02", title: "Proposal & Agreement",    desc: "A detailed redevelopment proposal with cost estimates, timelines, and legal terms." },
  { number: "03", title: "Approvals & Planning",    desc: "We handle all government approvals, NA conversion, and architectural planning." },
  { number: "04", title: "Construction & Delivery", desc: "Quality construction with regular progress updates until final handover." },
];


export default function Redevelopment() {
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) { alert("Please fill required fields."); return; }
    const msg = `Hello Saikrupa Developers,\n\nI am interested in a Redevelopment Project.\n\nName: ${form.name}\nPhone: ${form.phone}\nProperty Address: ${form.address}\nMessage: ${form.message}\n\nPlease get in touch with me.`;
    window.open("https://wa.me/919822329994?text=" + encodeURIComponent(msg), "_blank");
    setForm({ name: "", phone: "", address: "", message: "" });
  };

  return (
    <div className="pt-16">

      {/* Hero */}
      <div
        className="relative h-72 md:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative text-center text-white px-6"
        >
          <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">
            Saikrupa Developers
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Redevelopment Projects</h1>
          <p className="text-white/70 text-sm max-w-xl mx-auto">
            Transform your old property into a modern, infrastructure-rich space — with zero hassle.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us — 2x3 feature grid with accent numbers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              Why Choose Saikrupa for Redevelopment?
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              We've been building trust across Pune for over a decade. Here's what sets us apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="bg-white p-8 group hover:bg-[#FF7900] transition-colors duration-300 relative overflow-hidden"
                >
                  {/* Faded number */}
                  <span className="absolute top-3 right-4 text-7xl font-black text-gray-100 group-hover:text-white/10 leading-none select-none transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Icon size={28} className="text-[#FF7900] group-hover:text-white mb-5 transition-colors duration-300 relative" />
                  <h3 className="font-bold text-gray-900 group-hover:text-white text-lg mb-2 relative transition-colors duration-300">{b.title}</h3>
                  <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed relative transition-colors duration-300">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14"
          >
            <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Redevelopment Process</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {/* Connector line desktop */}
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gray-200 z-0" />

            {steps.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className="w-16 h-16 rounded-full bg-[#FF7900] flex items-center justify-center shadow-lg shadow-[#FF7900]/25 mb-5">
                  <span className="text-white font-black text-lg">{s.number}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">Get In Touch</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Ready to Redevelop Your Property?
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                Fill in your details and our team will get in touch within 24 hours to discuss your project, do a site visit, and provide a no-obligation proposal.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:sudambhore@gmail.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-[#FF7900] transition-colors font-medium"
                >
                  <div className="w-10 h-10 bg-[#FF7900]/10 flex items-center justify-center">
                    <Mail size={18} className="text-[#FF7900]" />
                  </div>
                  sudambhore@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF7900] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Phone *</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Your mobile number"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF7900] transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Property Address</label>
                <input
                  type="text"
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  placeholder="Location of your property"
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF7900] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your redevelopment project..."
                  rows={4}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-[#FF7900] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF7900] hover:bg-[#cc6100] text-white font-bold py-3.5 transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                Send via WhatsApp
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#FF7900] font-semibold tracking-widest text-sm uppercase mb-2">Scope of Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              What We Manage, Start to Finish
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
            {[
              "Site Inspection & Feasibility",
              "Architectural Planning",
              "Government Approvals",
              "NA & Legal Clearances",
              "Demolition & Site Clearing",
              "Construction & Civil Work",
              "Utility Connections",
              "Society Coordination",
              "Transit Support for Residents",
              "Quality Checks & Compliance",
              "Documentation & Registration",
              "Final Handover",
            ].map((title, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group flex items-center gap-5 border-b border-gray-200 py-5 hover:border-[#FF7900] transition-colors duration-300"
              >
                <div className="w-9 h-9 rounded-full border-2 border-gray-200 group-hover:border-[#FF7900] group-hover:bg-[#FF7900] flex items-center justify-center transition-all duration-300 shrink-0">
                  <span className="text-xs font-black text-gray-400 group-hover:text-white transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-gray-700 group-hover:text-gray-900 font-semibold text-sm transition-colors duration-200">
                  {title}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
