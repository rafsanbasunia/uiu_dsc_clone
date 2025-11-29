import Head from "next/head";
import Link from "next/link";
import {
  BadgeCheck,
  CircleCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Mail,
  Linkedin,
  Facebook,
} from "lucide-react";

export default function Partners() {
  return (
    <>
      <Head>
        <title>Our Partners - UIU Data Science Club</title>
        <meta
          name="description"
          content="UIU Data Science Club collaborates with industry leaders to provide our members with valuable resources and opportunities."
        />
      </Head>
      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="container py-16">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Our Partners
              </h1>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                UIU Data Science Club collaborates with industry leaders to
                provide our members with valuable resources and opportunities.
              </p>
            </div>

            {/* DataCamp Section */}
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 p-1">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
              <div className="relative rounded-[calc(1.5rem-0.25rem)] bg-white dark:bg-background p-8 md:p-12">
                <div className="grid gap-10 md:grid-cols-5">
                  <div className="md:col-span-3 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      <BadgeCheck className="h-4 w-4" /> Official Partnership
                    </div>
                    <h2 className="text-3xl font-bold text-primary">
                      DataCamp Donates Partnership
                    </h2>
                    <div className="prose prose-neutral dark:prose-invert max-w-3xl">
                      <p className="text-lg text-gray-700 dark:text-gray-300">
                        We are thrilled to announce that UIU Data Science Club
                        is now an official partner of DataCamp Donates! As part
                        of this partnership, our fellow members will receive a
                        1-year DataCamp subscription—absolutely FREE!
                      </p>
                      <h3 className="text-xl font-semibold text-primary mt-8 mb-4">
                        Why DataCamp?
                      </h3>
                      <ul className="space-y-3 mb-8">
                        <li className="flex items-start gap-3">
                          <CircleCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>
                            350+ courses on Python, SQL, R, Machine Learning &
                            more
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>
                            Hands-on coding experience in an interactive
                            environment
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>
                            Career tracks & skill tracks tailored for data
                            professionals
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>
                            Industry-recognized certifications that add value to
                            your resume
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CircleCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                          <span>
                            Learn at your own pace & boost your career in Data
                            Science & Analytics
                          </span>
                        </li>
                      </ul>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        DataCamp Certification = Job Market Advantage
                      </h3>
                      <p className="mb-8 text-gray-700 dark:text-gray-300">
                        Employers worldwide recognize DataCamp certifications as
                        proof of practical skills in data science and analytics.
                        With this opportunity, you can build a strong portfolio
                        and stand out in the competitive job market!
                      </p>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-8 flex items-center gap-3">
                        <Sparkles className="h-5 w-5 text-primary shrink-0" />
                        <p className="font-medium text-primary">
                          Stay tuned for more details on how to claim your free
                          subscription. Let's upskill together! 🚀📊
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <a
                          href="https://www.datacamp.com/donates"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground shadow h-9 px-4 py-2 bg-primary hover:bg-primary/90">
                            Learn About DataCamp Donates
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </button>
                        </a>
                        <Link href="/join">
                          <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background shadow-sm hover:text-accent-foreground h-9 px-4 py-2 border-primary/30 text-primary hover:bg-primary/5">
                            Join Our Club
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="sticky top-24 space-y-6">
                      <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-border">
                        <img
                          src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743113251/482350231_122118078644779406_7275636371460141339_n_o48wvb.jpg"
                          alt="DataCamp Partnership"
                          className="w-full h-auto rounded-lg mb-6"
                        />
                        <div className="text-center space-y-4">
                          <h4 className="text-lg font-semibold text-gray-800 dark:text-foreground">
                            Eligibility
                          </h4>
                          <p className="text-gray-600 dark:text-muted-foreground">
                            All active members of UIU Data Science Club are
                            eligible for the free DataCamp subscription.
                          </p>
                          <div
                            data-orientation="horizontal"
                            role="none"
                            className="shrink-0 bg-border h-px w-full"
                          ></div>
                          <div className="grid grid-cols-2 gap-4 py-4">
                            <div className="bg-white p-3 rounded-lg flex items-center justify-center border border-gray-100">
                              <img
                                src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743152299/DC_Donates_logo_regular_kilezb.png"
                                alt="DataCamp Donates Logo"
                                className="h-10 object-contain"
                              />
                            </div>
                            <div className="bg-[#05192D] p-3 rounded-lg flex items-center justify-center">
                              <img
                                src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743152299/DC_Donates_logo_inverted_mhlvl2.png"
                                alt="DataCamp Donates Logo Inverted"
                                className="h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl border bg-card text-card-foreground shadow overflow-hidden">
                        <div className="p-6">
                          <div className="rounded-lg overflow-hidden mb-4 bg-[#05192D] py-6">
                            <img
                              src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743152299/DC_Donates_logo_navy_bg_e4mxmd.png"
                              alt="DataCamp Donates"
                              className="object-contain w-full h-32"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">
                            DataCamp provides interactive learning experiences
                            for data skills, including data science, analytics,
                            and machine learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Section */}
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/10 p-8 md:p-12 mt-16">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-linear-to-br from-primary/5 to-transparent rounded-full"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
                <div className="space-y-6 text-center md:text-left md:max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    <Sparkles className="h-4 w-4" /> Collaboration Opportunities
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary">
                    Become Our Partner
                  </h2>
                  <p className="text-muted-foreground">
                    We're constantly looking for industry partners who share our
                    passion for data science and want to contribute to student
                    growth. Partner with UIU Data Science Club to access
                    talented students, promote your brand, and create meaningful
                    impact.
                  </p>
                  <div className="space-y-3 pt-2">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <div className="text-left">
                        <span className="font-medium">
                          Access Talented Students
                        </span>
                        <p className="text-sm text-muted-foreground">
                          Connect with motivated students passionate about data
                          science and AI
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <div className="text-left">
                        <span className="font-medium">Co-host Events</span>
                        <p className="text-sm text-muted-foreground">
                          Collaborate on workshops, hackathons, and industry
                          talks
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/10 p-1.5 rounded-full mt-0.5">
                        <CircleCheck className="h-4 w-4 text-primary shrink-0" />
                      </div>
                      <div className="text-left">
                        <span className="font-medium">Brand Visibility</span>
                        <p className="text-sm text-muted-foreground">
                          Promote your organization across our network and
                          events
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <div className="rounded-xl border bg-card text-card-foreground md:min-w-[350px] border-primary/10 shadow-lg">
                    <div className="p-8 space-y-6">
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-bold text-primary">
                          Get in Touch
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Interested in partnering with UIU Data Science Club?
                          Reach out to our partnership team through any of these
                          channels.
                        </p>
                      </div>
                      <div className="space-y-4 pt-2">
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-primary/10 bg-primary/5 transition-colors hover:bg-primary/10">
                          <div className="bg-white dark:bg-background p-2.5 rounded-full shadow">
                            <Mail className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Email Us</div>
                            <a
                              href="mailto:club@datascience.uiu.ac.bd"
                              className="text-primary hover:underline text-sm"
                            >
                              club@datascience.uiu.ac.bd
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-primary/10 bg-primary/5 transition-colors hover:bg-primary/10">
                          <div className="bg-white dark:bg-background p-2.5 rounded-full shadow">
                            <Linkedin className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">LinkedIn</div>
                            <a
                              href="https://www.linkedin.com/company/uiu-data-science-club"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              UIU Data Science Club
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 p-3 rounded-lg border border-primary/10 bg-primary/5 transition-colors hover:bg-primary/10">
                          <div className="bg-white dark:bg-background p-2.5 rounded-full shadow">
                            <Facebook className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">Facebook</div>
                            <a
                              href="https://www.facebook.com/profile.php?id=61573382191627"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              UIU Data Science Club
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
