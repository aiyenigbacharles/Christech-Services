import { LucideIcon, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      className="card-service group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      
      <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      
      {price && (
        <div className="mb-4">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">Starting from</span>
          <p className="font-heading font-bold text-2xl text-primary">{price}</p>
        </div>
      )}
      
      <div className="flex flex-col sm:flex-row gap-2">
        <Button 
          asChild 
          variant="default" 
          className="btn-primary rounded-full flex-1 text-sm sm:text-xs px-4 sm:px-3 h-10 sm:h-9"
        >
          <Link to="/request-quote">Get Quote</Link>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-full flex-1 border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-primary-foreground text-sm sm:text-xs px-4 sm:px-3 h-10 sm:h-9"
        >
          <a
            href={`https://wa.me/2349042090139?text=Hello,%20I'm%20interested%20in%20your%20${encodeURIComponent(title)}%20service`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-4 h-4 sm:w-3.5 sm:h-3.5 mr-2 sm:mr-1.5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;