import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Mail,
      title: "Email",
      content: "bogidemas@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+251923872187",
      description: "Mon-Fri from 8am to 5pm",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "123 Business Ave, Suite 100",
      description: "San Francisco, CA 94105",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Monday - Friday",
      description: "8:00 AM - 5:00 PM PST",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Contact Information
        </h2>
        <p className="text-muted-foreground mb-8">
          Reach out to us through any of these channels. We're always happy to
          help.
        </p>
      </div>

      <div className="grid gap-4">
        {contactDetails.map((detail, index) => (
          <Card
            key={index}
            className="border-border hover:shadow-md transition-shadow"
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <detail.icon className="h-5 w-5 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-card-foreground mb-1">
                    {detail.title}
                  </h3>
                  <p className="text-foreground font-medium mb-1">
                    {detail.content}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {detail.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
