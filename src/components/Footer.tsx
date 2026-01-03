import { Link } from "react-router-dom";
import {  Github, Linkedin, Youtube, Mail } from "lucide-react";
import pingslab from "/ping.png";

const footerLinks = {
  company: [
    { name: "About", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/services" },
    { name: "App Development", path: "/services" },
    { name: "Portfolio Design", path: "/services" },
  ],
  products: [
    { name: "Our Products", path: "/products" },
  ],
};

const socialLinks = [
  { icon: Github, href: "https://github.com/Pings-Lab", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/pings-lab", label: "LinkedIn" },
  { icon: Youtube, href: "https://youtube.com/@pingslab", label: "Twitter" },
  { icon: Mail, href: "mailto:thepingslab@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <img src={pingslab} className="h-8 w-8 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">
                Ping's <span className="text-gradient">Lab</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              An agile technology studio committed to innovation, clean code, and the Open Source ecosystem.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ping's Lab IT Solutions. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Udyam Registration: UDYAM-XX-00-0000000
          </p>
        </div>
      </div>
    </footer>
  );
}
