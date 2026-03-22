import { motion } from "framer-motion";

export default function WhatsappButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute bottom-full right-0 mb-2 whitespace-nowrap bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />

      <a
        href="https://wa.me/919822329994"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl transition-colors duration-200"
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.38 1.26 4.79L2 22l5.46-1.43a9.86 9.86 0 0 0 4.58 1.13c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.52 14.11c-.23.65-1.35 1.24-1.85 1.31-.49.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.81-1.21-4.64-4.04-4.78-4.23-.14-.19-1.12-1.49-1.12-2.84 0-1.35.71-2.02 1-2.31.23-.24.5-.3.67-.3l.48.01c.15 0 .36-.06.56.43.21.5.71 1.74.77 1.86.06.13.1.28.02.45-.08.17-.12.28-.24.43l-.36.42c-.12.12-.25.25-.11.49.14.24.64 1.06 1.38 1.72.95.84 1.75 1.1 2 1.22.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.39.66 1.63.78.24.12.4.18.46.28.06.1.06.58-.17 1.13z" />
        </svg>
      </a>
    </motion.div>
  );
}
