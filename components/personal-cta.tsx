import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageCircle, Calendar } from "lucide-react"

export function PersonalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to chat about technology and
            creativity, I'd love to hear from you.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Email Me</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drop me a line for project inquiries or collaborations
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Let's Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me on social media or messaging platforms
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-secondary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Schedule Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a time that works for both of us to discuss your project
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Book Call
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Get In Touch
            </Button>
            <p className="text-sm text-muted-foreground">
              Usually respond within 24 hours • Available for freelance and full-time opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
