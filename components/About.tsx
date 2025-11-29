import { Users, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function About() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              About Our Club
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The UIU Data Science Club is dedicated to promoting data science
              education, research, and applications among students at United
              International University.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Community Card */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-2">
              <Users className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Community</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Join a vibrant community of data enthusiasts, share knowledge,
                and collaborate on exciting projects.
              </p>
            </CardContent>
          </Card>

          {/* Learning Card */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-2">
              <BookOpen className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Learning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Access workshops, seminars, and hands-on training sessions led
                by industry experts and faculty members.
              </p>
            </CardContent>
          </Card>

          {/* Opportunities Card */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="pb-2">
              <Award className="h-12 w-12 text-primary mb-2" />
              <CardTitle className="text-xl">Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Participate in competitions, hackathons, and research projects
                to enhance your skills and portfolio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
