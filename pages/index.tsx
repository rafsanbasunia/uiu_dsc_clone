import Head from "next/head";
import { Hero } from "@/components/Hero";
import { AdBanner } from "@/components/AdBanner";
import { About } from "@/components/About";
import { UpcomingEvents } from "@/components/UpcomingEvents";
import { JoinClub } from "@/components/JoinClub";

export default function Home() {
  return (
    <>
      <Head>
        <title>UIU Data Science Club</title>
        <meta name="description" content="UIU Data Science Club - Empowering students with data science skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <AdBanner />
      <About />
      <UpcomingEvents />
      <JoinClub />
    </>
  );
}

