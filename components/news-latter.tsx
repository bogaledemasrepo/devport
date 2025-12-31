"use client";

import { useRef, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function FooterNewsletter() {
  const emailRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribeToNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();

    const email = emailRef.current?.value;

    // Simple validation
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual newsletter API endpoint
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Welcome aboard!", {
          description: "You've successfully subscribed to our newsletter.",
        });
        // Clear the input using the ref
        if (emailRef.current) emailRef.current.value = "";
      } else {
        throw new Error("Failed to subscribe");
      }
    } catch (error) {
      console.log(error)
      toast.error("Subscription failed", {
        description: "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-bold uppercase tracking-widest text-foreground">
        Newsletter
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        Get notified about new projects and tech insights.
      </p>
      
      <form className="flex gap-2" onSubmit={handleSubscribeToNewsletter}>
        <Input 
          ref={emailRef}
          type="email"
          name="email"
          placeholder="Email address" 
          disabled={isSubmitting}
          className="bg-secondary/30 border-border/60 rounded-xl focus-visible:ring-primary h-11"
        />
        <Button 
          type="submit" 
          size="icon" 
          disabled={isSubmitting}
          className="shrink-0 rounded-xl shadow-lg shadow-primary/20 h-11 w-11 transition-all active:scale-95"
        >
          {isSubmitting ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <Send size={18} />
          )}
        </Button>
      </form>
    </div>
  );
}