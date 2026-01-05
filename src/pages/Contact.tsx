import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const apiUrl = import.meta.env.VITE_CONT_CONN;
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const projectTypes = [
  "Portfolio Design",
  "Web Development",
  "App Development",
  "Full Stack Project",
  "Consultation",
  "Other"
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "thepingslab@gmail.com",
    href: "mailto:thepingslab@gmail.com"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote-First Team",
    href: null
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
    href: null
  }
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Type: "",
    Message: ""
  });
  const { toast } = useToast();

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // 1. Start loading state
  setIsSubmitting(true);
  
  const { Name, Email, Type, Message } = formData;
  const url = apiUrl;

  fetch(url, {
    method: "POST",
    mode: "no-cors", // Required for Google Scripts to bypass CORS
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `Name=${encodeURIComponent(Name)}&Email=${encodeURIComponent(Email)}&Type=${encodeURIComponent(Type)}&Message=${encodeURIComponent(Message)}`
  })
    .then(() => {
      // 2. Success Logic: ONLY happens after the request finishes
      toast({
        title: "Message Sent! 🎉",
        description: "We'll get back to you within 24 hours.",
      });
      
      setIsSubmitted(true);
      setFormData({ Name: "", Email: "", Type: "", Message: "" });
    })
    .catch((error) => {
      // 3. Error Logic
      toast({
        title: "Message Failed!",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
      console.error(error);
    })
    .finally(() => {
      // 4. Always turn off the spinner regardless of success or failure
      setIsSubmitting(false);
    });
};
  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial="initial"
            animate="animate"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            >
              Get in Touch
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Let's Build Something
              <br />
              <span className="text-gradient">Together</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it. 
              Drop us a message and let's start the conversation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Info</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">{item.title}</div>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Note */}
              <div className="mt-12 p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-semibold mb-2">Quick Response</h3>
                <p className="text-sm text-muted-foreground">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please mention it in your message.
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                    <Button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({ Name: "", Email: "", Type: "", Message: "" });
                      }}
                      variant="outline"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        name="Name"
                        placeholder="John Doe"
                        value={formData.Name}
                        onChange={(e) => handleChange("Name", e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        name="Email"
                        placeholder="john@example.com"
                        value={formData.Email}
                        onChange={(e) => handleChange("Email", e.target.value)}
                        className="h-12"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select
                      name="Type"
                      value={formData.Type}
                      onValueChange={(value) => handleChange("Type", value)}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Select a project type" />
                      </SelectTrigger>
                      <SelectContent>
                        {projectTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="Message"
                      placeholder="Tell us about your project..."
                      value={formData.Message}
                      onChange={(e) => handleChange("Message", e.target.value)}
                      className="min-h-[160px] resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full md:w-auto bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
