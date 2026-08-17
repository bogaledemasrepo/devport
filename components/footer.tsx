"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
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
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <footer className="bg-background border-border/40 relative overflow-hidden border-t pt-16 pb-8">
      {/* Background Decorative Glow */}
      <div className="bg-primary/5 absolute bottom-0 left-1/2 -z-10 h-1/2 w-full -translate-x-1/2 blur-[120px]" />

      <div className="mx-auto px-6 py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-4"
        >
          {/* Brand Column */}
          <div className="space-y-6 md:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter transition-opacity hover:opacity-80"
            >
              BOGALE<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Building high-performance digital experiences with a focus on
              clean architecture and user-centric design.
            </p>
            <div className="flex gap-4">
              {[
                {
                  name: "GitHub",
                  href: "https://github.com/bogaledemasrepo",
                  Icon: VscGithubAlt,
                },
                {
                  name: "LinkedIn",
                  href: "https://linkedin.com/in/bogale-demas",
                  Icon: CiLinkedin,
                },
                {
                  name: "Telegram",
                  href: "https://bogaledemas.t.me",
                  Icon: RiTelegramLine,
                },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  whileHover={{ y: -3 }}
                  className="bg-secondary/50 border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 rounded-lg border p-2 transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTERNAV.map((group) => (
            <div key={group.title} className="space-y-6">
              <h3 className="text-foreground text-sm font-bold tracking-widest uppercase">
                {group.title}
              </h3>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-primary group flex items-center text-sm transition-colors"
                    >
                      <span className="bg-primary mr-0 h-px w-0 transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter / Contact Column */}
          <div className="space-y-6">
            <h3 className="text-foreground text-sm font-bold tracking-widest uppercase">
              Newsletter
            </h3>
            <p className="text-muted-foreground text-sm">
              Get notified about new projects and tech insights.
            </p>
            <FooterNewsletter />
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-border/40 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-muted-foreground text-xs">
            © {currentYear} Bogale Demas. All rights reserved. Built with
            Next.js & Tailwind.
          </p>

          <div className="flex items-center gap-8">
            <div className="text-muted-foreground flex gap-6 text-xs">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="bg-primary/10 text-primary hover:bg-primary rounded-full p-3 shadow-sm transition-all hover:text-white"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
