import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Loader2, CheckCircle2, XCircle } from 'lucide-react';

declare global {
  interface Window {
    turnstile: any;
  }
}

export default function TrackApplication() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState<any>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);

  useEffect(() => {

    const renderWidget = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetId.current) {
        try {
          widgetId.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: '1x00000000000000000000AA', 
            callback: (token: string) => {
              setTurnstileToken(token);
            },
            'expired-callback': () => {
              setTurnstileToken(null);
            },
          });
        } catch (e) {
          console.error("Turnstile render error:", e);
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderWidget();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (window.turnstile && widgetId.current) {
        try {
          window.turnstile.remove(widgetId.current);
        } catch (e) {
        }
        widgetId.current = null;
      }
    };
  }, []);

  const handleTrack = async () => {
    if (!trackingNumber || !turnstileToken) return;

    setStatus('loading');
    setResult(null);

    setTimeout(() => {

      if (trackingNumber.toLowerCase() !== 'error') {
         setResult({
            status: 'Under Review',
            submittedAt: new Date().toLocaleDateString(),
            applicantName: 'Student Applicant',
            event: 'UIU DSC Recruitment 2025',
            message: 'Your application is currently being reviewed by our team. You will be notified via email once a decision has been made.'
         });
         setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Head>
        <title>Track Application | UIU DSC</title>
        <meta name="description" content="Track your application status" />
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>

      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="container py-10">
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
                Track Your Application
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Enter your tracking number to check the status of your application.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Application Tracker</CardTitle>
                <CardDescription>
                  Enter the tracking number you received after submitting your application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    placeholder="e.g. 60803"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    disabled={status === 'loading'}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && trackingNumber && turnstileToken && status !== 'loading') {
                        handleTrack();
                      }
                    }}
                  />
                  
                  <div className="flex justify-center">
                     <div ref={turnstileContainerRef} className="min-h-[65px]" />
                  </div>

                  <Button 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                    onClick={handleTrack}
                    disabled={!trackingNumber || !turnstileToken || status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Tracking...
                      </>
                    ) : (
                      <>
                        <Search className="mr-2 h-4 w-4" />
                        Track
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {status === 'success' && result && (
              <Card className="border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 shrink-0" />
                    <div className="space-y-1 w-full">
                      <h3 className="font-semibold text-green-900 dark:text-green-100 text-lg">Application Found</h3>
                      <div className="grid gap-2 mt-3 text-sm text-green-800 dark:text-green-200">
                        <div className="grid grid-cols-3 gap-1">
                          <span className="font-medium opacity-70">Status:</span>
                          <span className="col-span-2 font-semibold">{result.status}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <span className="font-medium opacity-70">Event:</span>
                          <span className="col-span-2">{result.event}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <span className="font-medium opacity-70">Applicant:</span>
                          <span className="col-span-2">{result.applicantName}</span>
                        </div>
                        <div className="grid grid-cols-3 gap-1">
                          <span className="font-medium opacity-70">Submitted:</span>
                          <span className="col-span-2">{result.submittedAt}</span>
                        </div>
                      </div>
                      {result.message && (
                        <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/40 rounded-md text-sm">
                          {result.message}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {status === 'error' && (
              <Card className="border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-900 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 dark:text-red-100">Application Not Found</h3>
                      <p className="text-sm text-red-800 dark:text-red-200 mt-1">
                        We couldn't find an application with that tracking number. Please check the number and try again.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
