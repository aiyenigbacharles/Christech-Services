import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, Clock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We never compromise on quality. Every print, copy, and scan meets our high standards.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We listen, understand, and deliver what you need.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable",
    description: "We value your time. Quick turnaround without sacrificing quality.",
  },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            About <span className="text-primary">Christech Services</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
            Your trusted partner for all printing and document services.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Our Story"
                title="Building Trust Through Quality Service"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Christech Services is a young and fast-growing digital and document solutions shop dedicated to making everyday tasks simple, reliable, and stress-free. Launched just a few months ago, our goal has been clear from the start to provide high-quality printing, photocopying, scanning, lamination, and general cybercafé services in a professional and friendly environment.
                </p>
                <p>
                  We pride ourselves on precision and care in every job, from school assignments to business documents. No technical expertise needed, just tell us what you need, and we'll handle the rest. We're committed to a comfortable experience and quality digital services for our community.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-muted rounded-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-10 h-10 text-primary" />
                    </div>
                    <p className="font-heading font-bold text-4xl text-primary mb-2">2+</p>
                    <p className="text-muted-foreground">Months of Excellence</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-card rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide fast, affordable, and high-quality printing and document services that exceed our customers' expectations. We aim to be the first choice for individuals and businesses in our community.
              </p>
            </motion.div>

            <motion.div
              className="bg-card rounded-2xl p-8 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-2xl text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading document services provider in the region, known for innovation, reliability, and exceptional customer care. We envision a future where every customer leaves our shop satisfied.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            badge="What Drives Us"
            title="Our Core Values"
            description="The principles that guide everything we do at Christech Services."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
