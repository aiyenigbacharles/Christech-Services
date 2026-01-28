import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+234 904 209 0139",
    link: "tel:+2349042090139",
  },
  {
    icon: Mail,
    title: "Email",
    content: "salawudeenchristiana001@gmail.com",
    link: "mailto:salawudeenchristiana001@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Opposite Wesley Group of Schools Mpape, Abuja",
    link: "https://maps.google.com/?q=123+Tech+Street+Lagos+Nigeria",
  },
];

const openingHours = [
  { day: "Monday - Saturday", hours: "8:00 AM - 8:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

const Contact = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                target={info.title === "Address" ? "_blank" : undefined}
                rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                className="card-service flex flex-col items-center text-center cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </motion.a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <motion.div
            className="bg-whatsapp/10 rounded-2xl p-8 text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-whatsapp rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-2">
              Chat with Us on WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Get quick responses to your inquiries. Click below to start a conversation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground rounded-full px-8"
            >
              <a
                href="https://wa.me/2349042090139?text=Hello%20Tee%20Tech%20Services,%20I%20would%20like%20to%20make%20an%20inquiry"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Start Chat
              </a>
            </Button>
          </motion.div>

          {/* Opening Hours & Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Opening Hours"
                centered={false}
              />
              <div className="space-y-4">
                {openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between py-4 border-b border-border last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{item.day}</span>
                    </div>
                    <span className={item.hours === "Closed" ? "text-destructive" : "text-muted-foreground"}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                title="Find Us"
                centered={false}
              />
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7286515772766!2d3.4517254!3d6.4280556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjUnNDEuMCJOIDPCsDI3JzA2LjIiRQ!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tee Tech Services Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
