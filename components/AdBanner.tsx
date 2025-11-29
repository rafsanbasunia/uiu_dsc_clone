import Link from "next/link";
import { BadgeCheck, ChevronRight, Users } from "lucide-react";

export function AdBanner() {
  return (
    <section className="w-full py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary to-primary/80">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/20"></div>
            <div className="absolute top-1/2 -left-24 w-48 h-48 rounded-full bg-white/15"></div>
            <div className="absolute -bottom-20 right-1/4 w-40 h-40 rounded-full bg-white/10"></div>
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <pattern
                id="grid"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 8 0 L 0 0 0 8"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="0.5"
                ></path>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)"></rect>
            </svg>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="flex-1 space-y-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium backdrop-blur-sm">
                  <BadgeCheck className="h-4 w-4" /> Official Partnership
                </div>
                <span className="animate-pulse inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                <span className="text-sm text-white/80">Just Announced</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                DataCamp Donates Partnership
              </h2>
              <p className="max-w-xl text-white/90 text-lg">
                Get a{" "}
                <span className="font-bold underline decoration-2 underline-offset-4">
                  FREE 1-year DataCamp subscription
                </span>{" "}
                with 350+ courses on Python, SQL, R, and Machine Learning. Boost
                your data science skills!
              </p>
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link href="/partners" className="inline-block">
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow h-10 rounded-md px-8 bg-white text-primary hover:bg-white/90">
                    Learn More
                    <ChevronRight className="ml-1.5 h-4 w-4" />
                  </button>
                </Link>
                <div className="hidden md:flex items-center gap-2 text-white/80">
                  <Users className="h-4 w-4" />
                  <span>Exclusive for club members</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:w-1/2 items-center gap-4 ">
              <Link href="/partners">
                <div className="shrink-0 bg-white rounded-2xl p-4 shadow-lg transform rotate-1 hover:rotate-0 transition-transform">
                  <img
                    src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743152299/DC_Donates_logo_regular_kilezb.png"
                    alt="DataCamp Donates"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </Link>
              <Link href="/partners">
                <div className="shrink-0 bg-[#05192D] rounded-2xl p-4 shadow-lg transform -rotate-1 hover:rotate-0 transition-transform">
                  <img
                    src="https://res.cloudinary.com/drrhtmzpk/image/upload/v1743152299/DC_Donates_logo_inverted_mhlvl2.png"
                    alt="DataCamp Partnership"
                    className="h-24 w-auto object-contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
