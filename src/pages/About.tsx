import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/Layout";
import abstractTech from "@/assets/abstract-tech-1.jpg";
import pingslab from "/pingslab.svg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every line of code we write serves a purpose. We're focused on creating impactful solutions that make a real difference."
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "We're constantly experimenting with new technologies and methodologies to stay ahead of the curve."
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Clean code, thorough testing, and robust architecture are non-negotiables in everything we build."
  }
];

const principles = [
  "Rapid prototyping without compromising quality",
  "Transparent communication at every stage",
  "Agile methodologies for flexible delivery",
  "Open source contributions and community engagement",
  "Continuous learning and skill development",
  "Client success as our primary metric"
];

export default function About() {
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
              About Us
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              An Innovation Hub for
              <br />
              <span className="text-gradient">Modern Development</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Ping's Lab is where ideas transform into reality. We're a collective of passionate 
              developers, designers, and innovators committed to building exceptional digital experiences.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Born from a passion for clean code and innovative solutions, Ping's Lab started 
                  as a small team of developers who believed that technology should be accessible, 
                  powerful, and beautifully crafted.
                </p>
                <p>
                  Today, we've grown into an agile technology studio that serves clients across 
                  industries, always staying true to our roots — writing code that matters, 
                  contributing to open source, and pushing the boundaries of what's possible.
                </p>
                <p>
                  We're not just developers; we're partners in innovation. Every project we 
                  undertake is an opportunity to learn, grow, and create something exceptional.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-card flex items-center justify-center">
                <img 
                  src={pingslab} 
                  alt="Innovation at Ping's Lab" 
                  className="w-cover h-cover object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-17 bg-card border border-border rounded-xl p-4 shadow-card">
                <div className="text-2xl font-bold text-gradient">2+ Years</div>
                <div className="text-sm text-muted-foreground">of Innovation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We <span className="text-gradient">Work</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our approach combines the best of agile methodologies with a deep commitment 
                to quality and innovation. Here's what you can expect when working with us.
              </p>
              <div className="space-y-4">
                {principles.map((principle, index) => (
                  <motion.div
                    key={principle}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{principle}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="text-muted-foreground mb-6">
                We're always excited to take on new challenges and build something amazing together.
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Get in Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
