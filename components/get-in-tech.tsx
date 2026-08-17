import React, { useState } from "react";
import { FadeIn } from "./motion-wrapper";
import { Button } from "./ui/button";
import Link from "next/link";

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { BookingModal } from "./booking-modal";
import { redirect, useRouter } from "next/navigation";

function GetInTech() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const gotoContact = () => {
    router.replace("/contact");
  };
  const gotoLinkedin = () => {
    redirect("https://linkedin.com/in/bogale-demas");
  };
  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <section className="relative overflow-hidden py-24">
      <div className="bg-primary/[0.02] absolute inset-0 -z-10" />
      <div className="container mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            Let&apos;s Create Together
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg">
            Ready to turn your vision into a scalable digital reality? I&apos;m
            currently available for new projects and collaborations.
          </p>

          <div className="mb-16 flex flex-wrap justify-center gap-6">
            {[
              {
                icon: Mail,
                label: "Email Me",
                color: "text-primary",
                border: "border-primary/20",
                fun: gotoContact,
              },
              {
                icon: MessageCircle,
                label: "LinkedIn",
                color: "text-blue-500",
                border: "border-blue-500/20",
                fun: gotoLinkedin,
              },
              {
                icon: Calendar,
                label: "Book a Call",
                color: "text-orange-500",
                border: "border-orange-500/20",
                fun: handleModalOpen,
              },
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }}>
                <Button
                  onClick={item.fun}
                  variant="outline"
                  className={`bg-background h-16 rounded-2xl px-8 shadow-sm ${item.border} hover:bg-secondary transition-all`}
                >
                  <item.icon className={`mr-3 h-5 w-5 ${item.color}`} />
                  <span className="font-semibold">{item.label}</span>
                </Button>
              </motion.div>
            ))}
          </div>
          <Link href={"/contact"}>
            <Button
              size="lg"
              className="shadow-primary/20 h-14 rounded-full px-10 text-lg shadow-xl"
            >
              Get In Touch
            </Button>
          </Link>
        </FadeIn>
      </div>
      <BookingModal isOpen={open} onClose={handleModalOpen} />
    </section>
  );
}

export default GetInTech;
