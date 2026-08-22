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
          firstName,
          lastName,
          email,
          subject,
          message,
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
    <main className="bg-background selection:bg-primary/10 min-h-screen">
      <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header Section */}
        <FadeIn className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="text-foreground mb-6 text-4xl font-bold tracking-tight lg:text-6xl">
            Let&apos;s <span className="text-primary">Connect</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Have a project in mind or just want to say hi? I&apos;m always open
            to discussing new opportunities and innovative ideas.
          </p>
        </FadeIn>

        <div className="grid items-start gap-16 lg:grid-cols-5">
          {/* Left Side: Info & Cards */}
          <div className="space-y-8 lg:col-span-2">
            <FadeIn delay={0.1}>
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold tracking-tight">
                <MessageSquare className="text-primary h-5 w-5" />
                Contact Information
              </h2>
            </FadeIn>

            <div className="grid gap-4">
              {CONTACTDETAIL.map((detail, index) => (
                <FadeIn key={detail.title || index} delay={0.2 + index * 0.1}>
                  <Card className="group border-border/50 bg-secondary/10 hover:border-primary/30 hover:bg-secondary/20 transition-all duration-300">
                    <CardContent className="flex items-start gap-4 p-5">
                      <div className="bg-background border-border group-hover:border-primary/50 rounded-xl border p-3 shadow-sm transition-colors">
                        <detail.icon className="text-primary h-5 w-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                          {detail.title}
                        </h3>
                        <p className="text-foreground text-base font-medium">
                          {detail.content}
                        </p>
                        <p className="text-muted-foreground/80 text-sm">
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
              className="bg-primary/5 border-primary/20 rounded-2xl border p-6 text-center"
            >
              <p className="text-primary text-sm font-medium">
                Available for freelance projects and full-time roles.
              </p>
            </FadeIn>
          </div>

          {/* Right Side: Form */}
          <FadeIn delay={0.3} className="lg:col-span-3">
            <Card className="border-border/60 shadow-primary/5 overflow-hidden rounded-3xl shadow-xl">
              <CardHeader className="bg-secondary/20 border-border/40 border-b p-8">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <p className="text-muted-foreground">
                  Expect a response within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Bogale"
                        required
                        disabled={isSubmitting}
                        className="bg-secondary/5 border-border/60 focus:ring-primary h-12 rounded-xl"
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
                        className="bg-secondary/5 border-border/60 focus:ring-primary h-12 rounded-xl"
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
                      className="bg-secondary/5 border-border/60 focus:ring-primary h-12 rounded-xl"
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
                      className="bg-secondary/5 border-border/60 focus:ring-primary h-12 rounded-xl"
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
                      className="bg-secondary/5 border-border/60 focus:ring-primary resize-none rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="shadow-primary/20 h-14 w-full rounded-xl text-lg font-semibold shadow-lg transition-all hover:scale-[1.01]"
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
