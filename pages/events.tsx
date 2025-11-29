import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../types';

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data);
      } catch (error) {
        console.error('Failed to fetch events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const upcomingEvents = events.filter(e => e.isUpcoming);
  const pastEvents = events.filter(e => !e.isUpcoming);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-muted"></div>
          <div className="h-4 w-32 rounded bg-muted"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Events - UIU Data Science Club</title>
        <meta name="description" content="Join us for exciting events and activities organized by the UIU Data Science Club" />
      </Head>

      <main className="container mx-auto px-4 py-8 min-h-screen">
        <div className="container py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-12"
          >
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">Events</h1>
              <p className="max-w-[800px] mx-auto text-muted-foreground md:text-xl">
                Join us for exciting events and activities organized by the UIU Data Science Club
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary">Upcoming Events</h2>
              {upcomingEvents.length > 0 ? (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid gap-10 md:grid-cols-2"
                >
                  {upcomingEvents.map((event) => (
                    <motion.div variants={item} key={event.id}>
                      <EventCard event={event} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <p className="text-muted-foreground py-8">No upcoming events at the moment. Check back soon!</p>
              )}
            </div>

            <div className="space-y-6 mt-12">
              <h2 className="text-2xl font-bold text-primary">Past Events</h2>
              <motion.div 
                variants={container}
                initial="hidden"
                animate="show"
                className="grid gap-10 md:grid-cols-2"
              >
                {pastEvents.map((event) => (
                  <motion.div variants={item} key={event.id}>
                    <EventCard event={event} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}

function EventCard({ event }: { event: Event }) {
  return (
    <div className="group relative rounded-3xl overflow-hidden bg-card border border-border/50 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-card/50">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="relative h-72 w-full overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className={`object-cover h-72 w-full transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105 ${event.isUpcoming ? '' : 'grayscale'}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80"></div>
        <div className="absolute top-4 left-4 z-20">
          <div className="inline-flex items-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary/90 backdrop-blur-sm text-secondary-foreground hover:bg-secondary/80 px-3 py-1 text-sm font-medium shadow-sm">
            {event.isUpcoming ? 'Upcoming Event' : 'Past Event'}
          </div>
        </div>
      </div>
      <div className="p-6 space-y-6 relative z-10">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight opacity-90 group-hover:opacity-100 transition-opacity text-card-foreground">{event.title}</h2>
          <p className="text-muted-foreground line-clamp-2">{event.description}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4 text-primary" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 text-primary" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4 text-primary" />
            <span>{event.seats}</span>
          </div>
        </div>
        <div className="pt-2 relative z-20">
          <Link href={`/events/${event.slug}`} className="w-full block">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border bg-background shadow-sm hover:text-accent-foreground h-10 rounded-md px-8 w-full border-primary/30 hover:bg-primary/5 dark:hover:bg-primary/20">
              View {event.isUpcoming ? 'Event' : 'Past Event'} Details
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-20 h-20 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full z-0"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-linear-to-tr from-primary/10 to-transparent rounded-tr-full z-0"></div>
    </div>
  );
}
