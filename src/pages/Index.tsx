import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code, GitBranch, Zap, Sparkles, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import heroImage from "@/assets/hero-abstract.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const philosophyItems = [
  {
    icon: Code,
    title: "Clean Code",
    description: "We write maintainable, scalable code that stands the test of time."
  },
  {
    icon: GitBranch,
    title: "Open Source",
    description: "Contributing to and leveraging the power of open source ecosystem."
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "From idea to MVP in record time without compromising quality."
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Embracing cutting-edge technologies to solve real problems."
  }
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
  { value: "5+", label: "Years Experience" }
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Abstract tech background" 
            className="w-full h-full object-cover opacity-30 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Rocket className="h-4 w-4" />
                Agile Technology Studio
              </span>
            </motion.div>

            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Building the Future,
              <br />
              <span className="text-gradient">One Line at a Time</span>
            </motion.h1>

            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              We're Ping's Lab — a passionate team of developers crafting custom software solutions. 
              Committed to the Open Source ecosystem and delivering excellence in every project.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
              <Link to="/services">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-8">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Philosophy Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
              <Users className="h-4 w-4" />
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              The Lab <span className="text-gradient">Mindset</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We approach every project with curiosity, rigor, and a commitment to excellence. 
              Here's what drives us forward.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Build Something <span className="text-gradient">Amazing</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's collaborate and turn your vision into reality. Get in touch with our team today.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-8">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
