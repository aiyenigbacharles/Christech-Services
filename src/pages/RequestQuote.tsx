import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Upload, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Printing",
  "Photocopying",
  "Scanning",
  "Lamination",
  "Binding",
  "Typing",
  "Document Editing",
  "CV Drafting",
  "Other",
];

const pickupTimes = [
  "As soon as possible",
  "Within 1 hour",
  "Within 3 hours",
  "Same day",
  "Next day",
  "Custom (specify in notes)",
];

const RequestQuote = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Quote Request Submitted!",
      description: "We'll get back to you shortly via WhatsApp or phone.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setFileName("");
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-hero text-hero-foreground py-16 md:py-24">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Request a <span className="text-primary">Quote</span>
          </h1>
          <p className="text-hero-foreground/70 text-lg max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you with a quote as soon as possible.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="section-container max-w-2xl">
          <motion.form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="e.g., +234 801 234 5678"
                  required
                  className="rounded-lg"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email Address <span className="text-muted-foreground">(optional)</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  className="rounded-lg"
                />
              </div>

              {/* Service */}
              <div className="space-y-2">
                <Label htmlFor="service" className="text-foreground">
                  Service Required <span className="text-destructive">*</span>
                </Label>
                <Select name="service" required>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service.toLowerCase()}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <Label htmlFor="file" className="text-foreground">
                  Upload File <span className="text-muted-foreground">(optional)</span>
                </Label>
                <div className="relative">
                  <input
                    id="file"
                    name="file"
                    type="file"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  />
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    {fileName ? (
                      <p className="text-foreground font-medium">{fileName}</p>
                    ) : (
                      <>
                        <p className="text-muted-foreground text-sm">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-muted-foreground text-xs mt-1">
                          PDF, DOC, DOCX, JPG, PNG (max 10MB)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Pickup Time */}
              <div className="space-y-2">
                <Label htmlFor="pickup" className="text-foreground">
                  Preferred Pickup Time
                </Label>
                <Select name="pickup">
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Select pickup time" />
                  </SelectTrigger>
                  <SelectContent>
                    {pickupTimes.map((time) => (
                      <SelectItem key={time} value={time.toLowerCase()}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Additional Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes" className="text-foreground">
                  Additional Instructions
                </Label>
                <Textarea
                  id="notes"
                  name="notes"
                  placeholder="Any specific requirements, quantities, paper type, etc."
                  rows={4}
                  className="rounded-lg resize-none"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                className="btn-primary rounded-full w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                    />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Submit Quote Request
                  </>
                )}
              </Button>
            </div>
          </motion.form>

          {/* Info */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>We typically respond within 30 minutes during business hours</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default RequestQuote;
