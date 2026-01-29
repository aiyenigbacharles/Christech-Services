import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Printer, Copy, ScanLine, FileText, ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import heroBackground from "@/assets/hero-background.jpg";

const services = [
  {
    icon: Printer,
    title: "Printing",
    description: "High-quality color and black & white printing for documents, flyers, posters, and more.",
    // price: "₦50/page",
  },
  {
    icon: Copy,
    title: "Photocopying",
    description: "Fast and clear photocopying services for all your document duplication needs.",
    // price: "₦20/page",
  },
  {
    icon: ScanLine,
    title: "Scanning",
    description: "Convert your physical documents to digital formats with our high-resolution scanners.",
    // price: "₦100/page",
  },
  {
    icon: FileText,
    title: "Lamination",
    description: "Protect your important documents with our professional lamination services.",
    // price: "₦200/page",
  },
];

const features = [
  "Fast turnaround time",
  "Affordable pricing",
  "Quality guaranteed",
  "Friendly service",
];

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
        <div className="section-container py-20 md:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/30 text-primary-foreground text-sm font-medium rounded-full mb-6 backdrop-blur-sm">
                Your Trusted Print Partner
              </span>
              <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-white">
                Professional <span className="text-primary">Printing</span> & Document Services
              </h1>
              <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed max-w-lg">
                Quality printing, photocopying, scanning, and lamination services at affordable prices. Your one-stop shop for all document needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="btn-primary rounded-full px-8 text-base">
                  <Link to="/services">
                    View Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="btn-outline-hero rounded-full px-8 text-base"
                >
                  <a
                    href="https://wa.me/2349042090139?text=Hello%20Tee%20Tech%20Services,%20I%20would%20like%20to%20make%20an%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" className="rounded-full bg-white/20 border border-white/40 text-white hover:bg-white/30 backdrop-blur-sm" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-white/90 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/20">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    {[Printer, Copy, ScanLine, FileText].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="w-28 h-28 bg-white/15 backdrop-blur rounded-2xl flex items-center justify-center border border-white/10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-2xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="What We Offer"
            title="Our Popular Services"
            description="From printing to lamination, we provide comprehensive document services to meet all your needs."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.1} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

{/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
              Request a quote today or visit our shop. We're here to help with all your printing and document needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8 text-base"
              >
                <Link to="/request-quote">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                
                className="rounded-full px-8 text-base bg-white text-primary hover:bg-white/90 transition-colors"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;