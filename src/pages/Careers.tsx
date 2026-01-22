import { motion } from "framer-motion";
import { ExternalLink, Users, Code, Palette, Database, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const internships = [
  {
    title: "Web Fullstack Intern",
    icon: Code,
    description: "Work with React, TypeScript, and modern frontend technologies to build beautiful user interfaces.",
    skills: ["MERN", "MEAN", "Tailwind CSS", "Django", "php", "springboot"],
    type: "Remote",
    duration: "3-6 months"
  },
  {
    title: "Programming and DSA",
    icon: Database,
    description: "Build scalable APIs and server-side applications using Node.js, Python, or Go.",
    skills: ["C++", "Python", "Java"],
    type: "Remote",
    duration: "3-6 months"
  },
  {
    title: "UI/UX Design Intern",
    icon: Palette,
    description: "Create intuitive and visually stunning designs for web and mobile applications.",
    skills: ["Figma", "Prototyping", "User Research"],
    type: "Remote",
    duration: "3-6 months"
  },
  {
    title: "Mobile App Development Intern",
    icon: Smartphone,
    description: "Develop cross-platform mobile applications using React Native or Flutter.",
    skills: ["React Native", "Flutter", "Mobile UI"],
    type: "Remote",
    duration: "3-6 months"
  }
];

const benefits = [
  "Mentorship from experienced developers",
  "Flexible working hours",
  "Real-world project experience",
  "Certificate of completion",
  "Letter of recommendation",
  "Potential for full-time offer"
];

export default function Careers() {
  const externalApplyUrl = "https://forms.gle/sroCVhTueLJgpU3N6";

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
              <Users className="h-4 w-4" />
              Join Our Team
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Launch Your Career
              <br />
              <span className="text-gradient">With Us</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              We're looking for passionate individuals ready to learn, grow, and build 
              amazing things. Start your journey with our internship program.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Open <span className="text-gradient">Internships</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current internship opportunities. All positions are remote-friendly.
            </p>
          </motion.div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {internships.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <role.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold">{role.title}</h3>
                      <Badge variant="secondary">{role.type}</Badge>
                      <Badge variant="outline">{role.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-4">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Apply Button */}
                  <a 
                    href={externalApplyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0"
                  >
                    <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                      Apply Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What You'll <span className="text-gradient">Get</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our internship program is designed to give you hands-on experience 
                and set you up for success in your tech career.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 text-center"
            >
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Ready to Apply?</h3>
              <p className="text-muted-foreground mb-6">
                Click below to visit our internship portal and submit your application.
              </p>
              <a 
                href={externalApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                  Visit Internship Portal
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
