import React, { useState } from 'react'
import { FadeIn } from './motion-wrapper'
import { Button } from './ui/button'
import Link from 'next/link'

import { motion } from "framer-motion";
import { Calendar, MessageCircle, Mail } from "lucide-react";
import { BookingModal } from './booking-modal';
import { redirect, useRouter } from 'next/navigation';

function GetInTech() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const gotoContact = () => { 
        router.replace("/contact")
    }
    const gotoLinkedin = () => { 
        redirect("https://linkedin.com/in/bogale-demas")
    }
    const handleModalOpen = () => {
        setOpen((prev) => !prev)
    }
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
            <div className="container mx-auto px-6 text-center">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Create Together</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Ready to turn your vision into a scalable digital reality? I'm currently available for new projects and collaborations.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mb-16">
                        {[
                            { icon: Mail, label: "Email Me", color: "text-primary", border: "border-primary/20", fun: gotoContact },
                            { icon: MessageCircle, label: "LinkedIn", color: "text-blue-500", border: "border-blue-500/20",fun:gotoLinkedin },
                            { icon: Calendar, label: "Book a Call", color: "text-orange-500", border: "border-orange-500/20",fun:handleModalOpen }
                        ].map((item, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }}>
                                <Button onClick={item.fun} variant="outline" className={`h-16 px-8 rounded-2xl bg-background shadow-sm ${item.border} hover:bg-secondary transition-all`}>
                                    <item.icon className={`w-5 h-5 mr-3 ${item.color}`} />
                                    <span className="font-semibold">{item.label}</span>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                    <Link href={"/contact"}>
                        <Button size="lg" className="h-14 px-10 rounded-full text-lg shadow-xl shadow-primary/20">
                            Get In Touch
                        </Button>
                    </Link>
                </FadeIn>
            </div>
            <BookingModal isOpen={open} onClose={handleModalOpen} />
        </section>
    )
}

export default GetInTech