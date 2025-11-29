import Link from "next/link";
import { Calendar, ArrowRight, ExternalLink, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UpcomingEvents() {
  return (
    <section className="w-full bg-linear-to-b from-primary/5 to-background/50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-primary">
              Upcoming Events
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Join us for our exciting events and activities throughout the
              semester.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl">
          <div className="bg-background border border-border/40 rounded-3xl shadow-sm p-8 md:p-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-primary/80" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">
                  No Upcoming Events
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We're currently planning our next batch of exciting events.
                  Check back soon or follow us on social media for announcements!
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md pt-4">
                <Link href="/events" className="w-full">
                  <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5">
                    View Past Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="https://www.facebook.com/profile.php?id=61573382191627"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-linear-to-r from-primary to-primary/90">
                    Follow Updates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
              <div className="w-full h-px bg-linear-to-r from-transparent via-border to-transparent my-2"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CircleAlert className="h-4 w-4" />
                <span>
                  Want to suggest an event? Contact our team at{" "}
                  <a
                    href="mailto:club@datascience.uiu.ac.bd"
                    className="text-primary hover:underline"
                  >
                    club@datascience.uiu.ac.bd
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="/events">
              <Button variant="outline" className="border-2 hover:bg-primary/5 group px-8">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
