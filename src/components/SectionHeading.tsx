import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeading = ({ badge, title, description, centered = true }: SectionHeadingProps) => {
  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-muted-foreground text-lg leading-relaxed ${centered ? "max-w-2xl mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
