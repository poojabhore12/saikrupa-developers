import { MessageCircle } from "lucide-react";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919822329994"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg z-50"
    >
      <MessageCircle size={28} />
    </a>
  );
}