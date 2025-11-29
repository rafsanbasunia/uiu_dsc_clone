import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen container mx-auto px-4 py-12 md:py-24 lg:py-32 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#00A9B9]">
          UIU Data Science Club
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto md:mx-0">
          Empowering students with data science skills, fostering innovation, and
          building a community of future data leaders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
          <Link href="/events">
          <Button className=" cursor-pointer rounded-full bg-[#00A9B9] hover:bg-[#008C99] text-white px-8 h-12 text-base">
            Events <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          </Link>
          <Link href="/team">
          <Button
            variant="outline"
            className=" cursor-pointer rounded-full border-gray-300 px-8 h-12 text-base hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Meet Our Team
          </Button>
          </Link>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 w-full max-w-[600px]">
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-muted-foreground">
                <span className="text-sm">Group Photo Placeholder</span>
            </div>
            <Image 
                src="https://stg-dsc-prod.monzim.com/dsc-cover.webp" 
                alt="UIU Data Science Club Team" 
                fill 
                className="object-cover"
            />
        </div>
      </div>
    </section>
  );
}
