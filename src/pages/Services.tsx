import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Globe, Smartphone, ArrowRight, Check, BotMessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const services = [
  {
    icon: BotMessageSquare,
    title: "AI Agents and Chatbots",
    description: "Stand out with product and service oriented chatbots. Ai agents and automation setup for business workflow.",
    features: [
      "Custom database training",
      "Web and App integration",
      "Brand-aligned chatbots",
      "Automation setup",
      "Long term support"
    ],
    gradient: "from-pink-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "From landing pages to complex web applications, we build fast, secure, and scalable solutions using modern technologies.",
    features: [
      "UI/UX Expertise",
      "Full-stack development",
      "API integrations",
      "Performance optimization",
      "Cloud deployment"
    ],
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform mobile applications that deliver native-like experiences. Built with React Native and Flutter.",
    features: [
      "iOS & Android apps",
      "Cross-platform development",
      "Native performance",
      "App Store optimization",
      "Long-term support"
    ],
    gradient: "from-violet-500 to-purple-500"
  }
];

const process = [
  { step: "01", title: "Discovery", description: "Understanding your vision and requirements" },
  { step: "02", title: "Design", description: "Creating wireframes and prototypes" },
  { step: "03", title: "Development", description: "Building with clean, maintainable code" },
  { step: "04", title: "Delivery", description: "Testing, deployment, and ongoing support" },
 
];

export default function Services() {
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
              Our Services
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Crafting Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              From concept to deployment, we provide end-to-end development services 
              tailored to your unique needs and goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach that ensures transparency and delivers results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
                
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have a Project in <span className="text-gradient">Mind</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how we can help bring your ideas to life. Our team is ready to tackle your next big project.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-8">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
