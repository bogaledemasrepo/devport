import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { ContactHeader } from "@/components/contact-header";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <ContactHeader />

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <ContactInfo />
          <ContactForm />
        </div>

        <div className="mt-16 text-center">
          <div className="bg-accent/10 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Ready to Connect?
            </h3>
            <p className="text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
