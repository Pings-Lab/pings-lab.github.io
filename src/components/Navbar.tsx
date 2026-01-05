import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import pingslab from "/ping.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Products", path: "/products" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-0 rounded-lg ">
              <img src={pingslab} className="h-8 w-8 text-primary-foreground" />
              
            </div>
            <span className="font-bold text-lg">
              Ping's <span className="text-gradient">Lab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="hidden md:block">
              <Button className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Get Started
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
     <AnimatePresence>
  {isOpen && (
    <motion.div
      // We use opacity for the backdrop, but keep height simple
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="md:hidden glass-strong border-t border-border overflow-hidden"
    >
      <motion.div 
        // This container handles the "Slide Down" effect
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto px-4 py-6 space-y-2"
      >
        {navLinks.map((link, i) => (
          <motion.div
            key={link.path}
            // Staggering the links makes it feel faster and smoother
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: navLinks.length * 0.05 }}
        >
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-4 bg-gradient-primary text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}
