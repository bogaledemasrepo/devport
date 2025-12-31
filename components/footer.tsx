"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { VscGithubAlt } from "react-icons/vsc";
import { RiTelegramLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";
import { FOOTERNAV } from "@/constant";
import { FooterNewsletter } from "./news-latter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="relative bg-background border-t border-border/40 pt-16 pb-8 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              BOGALE<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building high-performance digital experiences with a focus on clean architecture and user-centric design.
            </p>
            <div className="flex gap-4">
              {[
                { name: "GitHub", href: "https://github.com/bogaledemasrepo", Icon: VscGithubAlt },
                { name: "LinkedIn", href: "https://linkedin.com/in/bogale-demas", Icon: CiLinkedin },
                { name: "Telegram", href: "https://bogaledemas.t.me", Icon: RiTelegramLine }
                ].map(({Icon,href}, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="p-2 rounded-lg bg-secondary/50 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTERNAV.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center group"
                    >
                      <span className="h-px w-0 bg-primary mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact Column */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Newsletter
            </h3>
            <p className="text-sm text-muted-foreground">
              Get notified about new projects and tech insights.
            </p>
           <FooterNewsletter />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Bogale Demas. All rights reserved. Built with Next.js & Tailwind.
          </p>
          
          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}