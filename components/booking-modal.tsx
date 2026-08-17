"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  Video,
  X,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function BookingModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
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
            className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-card border-border/50 fixed top-1/2 left-1/2 z-[60] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[2.5rem] border shadow-2xl"
          >
            <button
              onClick={onClose}
              className="hover:bg-secondary absolute top-6 right-6 z-10 rounded-full p-2 transition-colors"
            >
              <X size={20} className="text-muted-foreground" />
            </button>

            <div className="grid h-full min-h-[500px] md:grid-cols-5">
              {/* Left Side: Info (2 Columns) */}
              <div className="bg-primary/5 border-border/40 flex flex-col justify-between border-r p-8 md:col-span-2 md:p-12">
                <div>
                  <div className="bg-primary/10 mb-8 flex h-16 w-16 items-center justify-center rounded-2xl">
                    <Video className="text-primary h-8 w-8" />
                  </div>
                  <h2 className="mb-4 text-3xl font-bold tracking-tight">
                    Discovery Call
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Let’s discuss your project goals, technical requirements,
                    and how we can work together.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Clock className="text-primary h-4 w-4" /> 30 Minutes
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <Video className="text-primary h-4 w-4" /> Google Meet /
                    Zoom
                  </div>
                </div>
              </div>

              {/* Right Side: Form (3 Columns) */}
              <div className="bg-card flex flex-col justify-center p-8 md:col-span-3 md:p-12">
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
                          className="bg-secondary/30 focus-visible:ring-primary h-12 rounded-xl border-none"
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
                          className="bg-secondary/30 focus-visible:ring-primary h-12 rounded-xl border-none"
                        />
                      </div>
                    </div>

                    <div className="bg-secondary/20 text-muted-foreground flex items-center gap-4 rounded-2xl p-4 text-xs italic">
                      <Calendar className="h-4 w-4 shrink-0" />
                      After booking, I will send a calendar invite with a custom
                      link to your email.
                    </div>

                    <Button
                      disabled={isSubmitting}
                      className="shadow-primary/20 h-14 w-full rounded-2xl text-lg font-semibold shadow-xl"
                    >
                      {isSubmitting ? (
                        <Loader2 className="mr-2 animate-spin" />
                      ) : (
                        <span className="flex items-center gap-2">
                          Confirm Booking <Send size={18} />
                        </span>
                      )}
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-4 text-center"
                  >
                    <div className="bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
                      <CheckCircle2 className="text-primary animate-in zoom-in h-10 w-10 duration-500" />
                    </div>
                    <h3 className="text-2xl font-bold">Booking Confirmed!</h3>
                    <p className="text-muted-foreground">
                      Check your inbox for the calendar invitation.
                    </p>
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
