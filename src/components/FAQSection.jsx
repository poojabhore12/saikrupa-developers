import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "What types of plots does Saikrupa Developers offer?",
    a: "NA-approved industrial plots, residential plots, and farmhouse plots across Pune. Sizes from 1,000–10,000 sq.ft.",
  },
  {
    q: "Are the plots legally verified?",
    a: "Yes — all plots have NA orders, 7/12 extracts, clear titles, and RERA registration where applicable.",
  },
  {
    q: "Do you offer home loan assistance?",
    a: "Yes, we work with leading banks to help you get plot loans at competitive rates with minimal paperwork.",
  },
  {
    q: "Can I visit the plot site before buying?",
    a: "Absolutely. Call +91 9822329994 to schedule a site visit — our team will personally guide you.",
  },
  {
    q: "What amenities are included?",
    a: "Wide roads, drainage, electricity, water supply, street lighting, boundary walls, and green belt areas.",
  },
];

const INTERVAL = 3000; // ms each FAQ stays open

export default function FAQSection() {
  const [open, setOpen] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  // Auto-cycle through FAQs
  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(() => {
      setOpen((prev) => (prev + 1) % faqs.length);
    }, INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [open, paused]);

  const handleClick = (index) => {
    clearTimeout(timerRef.current);
    setPaused(true);
    setOpen(open === index ? null : index);
  };

  // Resume auto-cycle after 8s of no interaction
  useEffect(() => {
    if (!paused) return;
    const resume = setTimeout(() => {
      setPaused(false);
      setOpen((prev) => ((prev ?? 0) + 1) % faqs.length);
    }, 8000);
    return () => clearTimeout(resume);
  }, [paused]);

  return (
    <section className="py-14 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-500 mt-2 text-sm">
            Everything you need to know about our plots and services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "border-yellow-400 shadow-md" : "border-gray-200"
                }`}
              >
                <button
                  onClick={() => handleClick(index)}
                  className={`w-full flex items-center justify-between p-5 text-left font-semibold transition-colors ${
                    isOpen ? "bg-yellow-50 text-yellow-700" : "text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  <span className="pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`shrink-0 ${isOpen ? "text-yellow-500" : "text-gray-400"}`}
                  >
                    <Plus size={20} />
                  </motion.div>
                </button>

                {/* Progress bar — flush against bottom of button, no gap */}
                {isOpen && !paused && (
                  <motion.div
                    className="h-0.5 bg-yellow-400 origin-right"
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    key={`bar-${index}-${open}`}
                  />
                )}

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 py-4 text-gray-600 text-sm leading-relaxed">
                        <p>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <a
            href="https://wa.me/919822329994"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-green-400 transition shadow-md text-sm"
          >
            Still have questions? Chat on WhatsApp
          </a>
        </motion.div>

      </div>
    </section>
  );
}
