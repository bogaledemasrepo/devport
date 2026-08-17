"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send, MessageSquare, Loader2 } from "lucide-react";

import { FadeIn } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CONTACTDETAIL } from "@/constant";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: `Portfolio Contact: ${subject}`,
          message: `From: ${firstName} ${lastName} <${email}>\n\n${message}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent!", {
          description: "Thank you, Bogale will get back to you shortly.",
        });
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Failed to submit contact form:", error);
      toast.error("Failed to connect to the server.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background selection:bg-primary/10">
      <div className="container mx-auto px-6 py-20 lg:py-28 max-w-7xl">
        {/* Header Section */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;m always open
            to discussing new opportunities and innovative ideas.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Side: Info & Cards */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn delay={0.1}>
              <h2 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Contact Information
              </h2>
            </FadeIn>

            <div className="grid gap-4">
              {CONTACTDETAIL.map((detail, index) => (
                <FadeIn key={detail.title || index} delay={0.2 + index * 0.1}>
                  <Card className="group border-border/50 bg-secondary/10 hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300">
                    <CardContent className="p-5 flex items-start gap-4">
                      <div className="bg-background border border-border group-hover:border-primary/50 p-3 rounded-xl transition-colors shadow-sm">
                        <detail.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          {detail.title}
                        </h3>
                        <p className="text-base font-medium text-foreground">
                          {detail.content}
                        </p>
                        <p className="text-sm text-muted-foreground/80">
                          {detail.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            {/* Availability Badge */}
            <FadeIn
              delay={0.5}
              className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center"
            >
              <p className="text-sm font-medium text-primary">
                Available for freelance projects and full-time roles.
              </p>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={0.3} className="lg:col-span-3">
            <Card className="border-border/60 shadow-xl shadow-primary/5 rounded-3xl overflow-hidden">
              <CardHeader className="bg-secondary/20 border-b border-border/40 p-8">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Expect a response within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Bogale"
                        required
                        disabled={isSubmitting}
                        className="h-12 bg-secondary/5 border-border/60 focus:ring-primary rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Demas"
                        required
                        disabled={isSubmitting}
                        className="h-12 bg-secondary/5 border-border/60 focus:ring-primary rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="hello@example.com"
                      required
                      disabled={isSubmitting}
                      className="h-12 bg-secondary/5 border-border/60 focus:ring-primary rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      disabled={isSubmitting}
                      className="h-12 bg-secondary/5 border-border/60 focus:ring-primary rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can I help you?"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="bg-secondary/5 border-border/60 focus:ring-primary rounded-xl resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01]"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}