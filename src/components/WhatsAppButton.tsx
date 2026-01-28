import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/2349042090139?text=Hello%20Tee%20Tech%20Services,%20I%20would%20like%20to%20make%20an%20inquiry"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Chat on WhatsApp</span>
    </motion.a>
  );
};

export default WhatsAppButton;
