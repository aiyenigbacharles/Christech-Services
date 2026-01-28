import { Link } from "react-router-dom";
import { Printer, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Printer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl">
                Christech Services<span className="text-primary"></span>
              </span>
            </Link>
            <p className="text-hero-foreground/70 text-sm leading-relaxed">
              Your trusted partner for all printing, photocopying, scanning, and lamination services. Quality work, affordable prices.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", path: "/services" },
                // { name: "Gallery", path: "/gallery" },
                { name: "About Us", path: "/about" },
                { name: "Request Quote", path: "/request-quote" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-hero-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {["Printing", "Photocopying", "Scanning", "Lamination", "Binding"].map((service) => (
                <li key={service}>
                  <span className="text-hero-foreground/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-hero-foreground/70 text-sm">
                  Opposite Wesley Group of Schools Mpape, Abuja
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+2348012345678" className="text-hero-foreground/70 hover:text-primary transition-colors text-sm">
                  +234 904 209 0139
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@teetechservices.com" className="text-hero-foreground/70 hover:text-primary transition-colors text-sm">
                  salawudeenchristiana001@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-hero-foreground/70 text-sm">
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-hero-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-hero-foreground/50 text-sm">
            © {currentYear} Christech Services. All rights reserved.
          </p>
          <a
            href="https://wa.me/2349042090139?text=Hello%20Tee%20Tech%20Services,%20I%20would%20like%20to%20make%20an%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-whatsapp hover:text-whatsapp/80 transition-colors font-medium text-sm"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
