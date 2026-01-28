import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const galleryImages = [
  {
    id: 1,
    title: "Color Printing",
    category: "Printing",
    placeholder: "bg-gradient-to-br from-primary/20 to-primary/5",
  },
  {
    id: 2,
    title: "Document Scanning",
    category: "Scanning",
    placeholder: "bg-gradient-to-br from-blue-400/20 to-blue-600/10",
  },
  {
    id: 3,
    title: "Laminated Documents",
    category: "Lamination",
    placeholder: "bg-gradient-to-br from-emerald-400/20 to-emerald-600/10",
  },
  {
    id: 4,
    title: "Business Cards",
    category: "Printing",
    placeholder: "bg-gradient-to-br from-orange-400/20 to-orange-600/10",
  },
  {
    id: 5,
    title: "Bound Reports",
    category: "Binding",
    placeholder: "bg-gradient-to-br from-purple-400/20 to-purple-600/10",
  },
  {
    id: 6,
    title: "Photo Prints",
    category: "Photos",
    placeholder: "bg-gradient-to-br from-pink-400/20 to-pink-600/10",
  },
  {
    id: 7,
    title: "Flyer Design",
    category: "Design",
    placeholder: "bg-gradient-to-br from-cyan-400/20 to-cyan-600/10",
  },
  {
    id: 8,
    title: "Our Shop",
    category: "Shop",
    placeholder: "bg-gradient-to-br from-amber-400/20 to-amber-600/10",
  },
];

const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
            Take a look at some of our work and see the quality we deliver.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="aspect-square relative group cursor-pointer overflow-hidden rounded-xl"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className={`w-full h-full ${image.placeholder} flex items-center justify-center`}>
                    <span className="text-muted-foreground/50 text-sm font-medium">{image.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="text-center text-primary-foreground">
                      <ZoomIn className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-medium">{image.title}</p>
                      <p className="text-sm text-primary-foreground/70">{image.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-primary-foreground hover:text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
              <div className={`aspect-video ${selectedImage.placeholder} rounded-2xl flex items-center justify-center`}>
                <div className="text-center">
                  <p className="text-2xl font-heading font-semibold text-foreground mb-2">{selectedImage.title}</p>
                  <p className="text-muted-foreground">{selectedImage.category}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;
