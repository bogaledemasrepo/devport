"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, Video, X, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation of API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Meeting Scheduled!");
    
    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl bg-card border border-border/50 shadow-2xl rounded-[2.5rem] z-[60] overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute right-6 top-6 p-2 rounded-full hover:bg-secondary transition-colors z-10"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            <div className="grid md:grid-cols-5 h-full min-h-[500px]">
              {/* Left Side: Info (2 Columns) */}
              <div className="md:col-span-2 bg-primary/5 p-8 md:p-12 border-r border-border/40 flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8">
                    <Video className="text-primary w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Discovery Call</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Let’s discuss your project goals, technical requirements, and how we can work together.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Clock className="text-primary w-4 h-4" /> 30 Minutes
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Video className="text-primary w-4 h-4" /> Google Meet / Zoom
                  </div>
                </div>
              </div>

              {/* Right Side: Form (3 Columns) */}
              <div className="md:col-span-3 p-8 md:p-12 bg-card flex flex-col justify-center">
                {!isSuccess ? (
                  <motion.form 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    onSubmit={handleBooking}
                    className="space-y-6"
                  >
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input 
                          ref={nameRef}
                          id="name" 
                          placeholder="What should I call you?" 
                          required
                          className="rounded-xl h-12 bg-secondary/30 border-none focus-visible:ring-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          ref={emailRef}
                          id="email" 
                          type="email"
                          placeholder="Where can I reach you?" 
                          required
                          className="rounded-xl h-12 bg-secondary/30 border-none focus-visible:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="bg-secondary/20 p-4 rounded-2xl flex items-center gap-4 text-xs text-muted-foreground italic">
                      <Calendar className="w-4 h-4 shrink-0" />
                      After booking, I will send a calendar invite with a custom link to your email.
                    </div>

                    <Button 
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-2xl text-lg font-semibold shadow-xl shadow-primary/20"
                    >
                      {isSubmitting ? (
                        <Loader2 className="animate-spin mr-2" />
                      ) : (
                        <span className="flex items-center gap-2">Confirm Booking <Send size={18} /></span>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-primary animate-in zoom-in duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">Check your inbox for the calendar invitation.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}