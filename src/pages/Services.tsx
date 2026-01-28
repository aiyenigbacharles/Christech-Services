import { Printer, Copy, ScanLine, FileText, BookOpen, FileTypeIcon, FileCheck, UserPen } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Printer,
    title: "Printing",
    description: "High-quality color and black & white printing for documents, flyers, posters, banners, and business cards. Both A4 and A3 sizes available.",
    // price: "₦50/page",
  },
  {
    icon: Copy,
    title: "Photocopying",
    description: "Fast and clear photocopying services for all your document duplication needs. Bulk discounts available.",
    // price: "₦20/page",
  },
  {
    icon: ScanLine,
    title: "Scanning",
    description: "Convert your physical documents to digital formats with our high-resolution scanners. PDF, JPEG, and other formats supported.",
    // price: "₦100/page",
  },
  {
    icon: FileText,
    title: "Lamination",
    description: "Protect your important documents, certificates, and photos with our professional lamination services.",
    // price: "₦200/page",
  },
  {
    icon: BookOpen,
    title: "Binding",
    description: "Professional binding for projects, reports, and documents. Spiral, comb, and tape binding options available.",
    // price: "₦500",
  },
  {
    icon: FileTypeIcon,
    title: "Typing",
    description: "Get your work typed with precision. Documents, assignments, reports & more. Accurate and precise.",
    // price: "₦100",
  },
  {
    icon: FileCheck,
    title: "Document Editing",
    description: "Need help formatting your document? We can help with typing, formatting, and editing your files.",
    // price: "₦500",
  },
  {
    icon: UserPen,
    title: "CV Drafting",
    description: "Get your career started with a professional CV. Expertly crafted to highlight your skills and experience.",
    // price: "₦1,500",
  },
];

const Services = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive printing and document services to meet all your personal and business needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="What We Offer"
            title="All Services"
            description="Choose from our wide range of professional document and printing services."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} {...service} delay={index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-12 bg-muted">
        <div className="section-container text-center">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Note:</strong> Pricing may vary based on quantity, paper quality, and special requirements. Contact us for bulk discounts!
          </p>
        </div>
      </section>
    </main>
  );
};

export default Services;
