import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Calendar, Clock, MapPin, Users, Info, ChevronDown, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Event } from '../../types';

export default function EventDetails() {
  const router = useRouter();
  const { slug } = router.query;
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchEvent = async () => {
      try {
        const res = await fetch(`/api/events?slug=${slug}`);
        if (res.ok) {
          const data = await res.json();
          setEvent(data);
        } else {
          console.error('Event not found');
        }
      } catch (error) {
        console.error('Failed to fetch event:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-muted"></div>
          <div className="h-4 w-32 rounded bg-muted"></div>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background gap-4">
        <h1 className="text-2xl font-bold text-foreground">Event not found</h1>
        <Link href="/events" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Events
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title} - UIU Data Science Club</title>
      </Head>

      <div className="min-h-screen bg-background pb-12">
        {/* Top Warning Banner */}
        {event.isUpcoming ? (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-50 dark:bg-green-900/20 border-b border-green-100 dark:border-green-900/50 p-4"
          >
            <div className="container mx-auto flex items-start gap-3 text-green-800 dark:text-green-200">
              <Info className="h-5 w-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Registration Open</p>
                <p className="text-sm opacity-90">Register now to secure your spot!</p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-100 dark:border-yellow-900/50 p-4"
          >
            <div className="container mx-auto flex items-start gap-3 text-yellow-800 dark:text-yellow-200">
              <Clock className="h-5 w-5 mt-0.5 shrink-0" />
              <div>
                <p className="font-medium">Registration Closed</p>
                <p className="text-sm opacity-90">This event has already taken place.</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Back Button */}
            <Link href="/events" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Link>

            {/* Header Section */}
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                {event.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {event.description}
              </p>
            </div>

            {/* Main Content Card */}
            <div className="bg-cyan-50/30 dark:bg-cyan-900/10 rounded-3xl border border-cyan-100/50 dark:border-cyan-800/30 overflow-hidden p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-medium text-cyan-600 dark:text-cyan-400">Event Details</h2>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-card border border-border text-sm font-medium text-foreground shadow-sm">
                  <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                  {event.date}
                </div>
              </div>

              {/* Description Box */}
              <div className="bg-card rounded-xl p-6 shadow-sm border border-border/50 mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
                <button className="flex items-center text-sm text-muted-foreground mt-4 hover:text-primary transition-colors">
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Show more
                </button>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-y-6 gap-x-12 mb-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg h-fit">
                    <Calendar className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Date:</h3>
                    <p className="text-muted-foreground">{event.date}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-2 rounded-lg h-fit">
                    <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Host:</h3>
                    <p className="text-muted-foreground flex items-center gap-1">
                      {event.host || 'UIU Data Science Club'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg h-fit">
                    <Clock className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Time:</h3>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-cyan-100 dark:bg-cyan-900/30 p-2 rounded-lg h-fit">
                    <Info className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Topic:</h3>
                    <p className="text-muted-foreground">{event.topic || event.title}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-muted p-2 rounded-lg h-fit">
                    <MapPin className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Room:</h3>
                    <p className="text-muted-foreground">{event.location}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg h-fit">
                    <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">Open to:</h3>
                    <p className="text-muted-foreground">{event.openTo || 'All Students'}</p>
                  </div>
                </div>
              </div>

              {/* Registration Info */}
              <div className="bg-card rounded-xl p-4 border border-cyan-100/50 dark:border-cyan-800/30 flex items-start gap-3 text-sm text-muted-foreground mb-8">
                <Info className="w-5 h-5 text-cyan-500 dark:text-cyan-400 shrink-0 mt-0.5" />
                <p>
                  <span className="font-medium text-cyan-600 dark:text-cyan-400">
                    {event.isUpcoming ? 'Registration closes:' : 'Registration Status:'}
                  </span>{' '}
                  {event.isUpcoming 
                    ? `The day before the event or when we reach capacity (${event.seats})`
                    : 'Closed'}
                </p>
              </div>

              {/* Speaker Section */}
              {event.speaker && (
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" /> Speaker
                  </h3>
                  <div className="bg-card rounded-2xl p-6 border border-border/50 shadow-sm">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shrink-0 border-4 border-muted">
                        <img 
                          src={event.speaker.image || event.image} 
                          alt={event.speaker.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h4 className="text-xl font-bold text-foreground">{event.speaker.name}</h4>
                          <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                            {event.speaker.title}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{event.speaker.institution}</p>
                        <div className="flex gap-4 text-sm text-cyan-600 dark:text-cyan-400 font-medium pt-1">
                          <a href={event.speaker.scholarLink} className="hover:underline flex items-center gap-1">
                            Scholar
                          </a>
                          <a href={event.speaker.websiteLink} className="hover:underline flex items-center gap-1">
                            Website
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                          {event.speaker.bio}
                        </p>
                        <button className="text-cyan-500 dark:text-cyan-400 text-sm font-medium flex items-center gap-1 hover:underline">
                          View bio <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Status Bar */}
            <div className="mt-8 border border-border rounded-2xl p-6 text-center bg-muted/30">
              {event.isUpcoming ? (
                <div className="space-y-4">
                  <p className="text-muted-foreground mb-4">Registration is currently open for this event.</p>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 rounded-md px-8">
                    Register Now
                  </button>
                </div>
              ) : (
                <p className="text-muted-foreground">Registration for this event is no longer available.</p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
