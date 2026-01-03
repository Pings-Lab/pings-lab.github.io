import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/Layout";
import { NotifyModal } from "@/components/NotifyModal";
import abstractTech1 from "@/assets/abstract-tech-1.jpg";
import abstractTech2 from "@/assets/abstract-tech-2.jpg";
import abstractTech3 from "@/assets/abstract-tech-3.jpg";
import abstractTech4 from "@/assets/abstract-tech-4.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const products = [
  {
    name: "Ping's LMS",
    description: "Learning management system for educational institutions. Simplify course management, student tracking, and online learning experience.",
    image: abstractTech1,
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    name: "Stunning Resume",
    description: "Create a stunning resume in minutes. Customize your skills, experience, and achievements to highlight your professional profile.",
    image: abstractTech2,
    gradient: "from-violet-500 to-purple-500"
  },
  {
    name: "Portfolio Fox",
    description: "Personal portfolio website for freelancers and entrepreneurs. Showcase your work, skills, and contact details for potential clients and collaborators.",
    image: abstractTech3,
    gradient: "from-pink-500 to-rose-500"
  },
  {
    name: "Web Helm",
    description: "Dashboard for web developers. Manage database connections, CI/CD pipelines, and monitoring tools for efficient project management.",
    image: abstractTech4,
    gradient: "from-amber-500 to-orange-500"
  }
];

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");

  const handleNotifyClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
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
              <Sparkles className="h-4 w-4" />
              Our Products
            </motion.span>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              SaaS Products
              <br />
              <span className="text-gradient">Built for Scale</span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              Innovative software solutions we're developing to solve real-world problems. 
              Be among the first to experience them.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Coming Soon Badge */}
                  <Badge 
                    className={`absolute top-4 right-4 bg-gradient-to-r ${product.gradient} text-white border-0`}
                  >
                    Coming Soon
                  </Badge>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <Button 
                    onClick={() => handleNotifyClick(product.name)}
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    <Bell className="h-4 w-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why <span className="text-gradient">Pre-Register</span>?
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold mb-2">🚀</div>
                <h3 className="font-semibold mb-2">Early Access</h3>
                <p className="text-sm text-muted-foreground">Be the first to try our products before public launch</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">💰</div>
                <h3 className="font-semibold mb-2">Founder Pricing</h3>
                <p className="text-sm text-muted-foreground">Exclusive discounts for early supporters</p>
              </div>
              <div>
                <div className="text-4xl font-bold  mb-2">🎯</div>
                <h3 className="font-semibold mb-2">Shape the Product</h3>
                <p className="text-sm text-muted-foreground">Your feedback directly influences development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Notify Modal */}
      <NotifyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        productName={selectedProduct}
      />
    </Layout>
  );
}
