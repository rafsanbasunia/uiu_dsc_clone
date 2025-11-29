export interface EventSpeaker {
  name: string;
  title: string;
  institution: string;
  bio: string;
  image: string;
  scholarLink?: string;
  websiteLink?: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  seats: string;
  image: string;
  isUpcoming: boolean;
  host?: string;
  topic?: string;
  openTo?: string;
  registrationStatus?: string;
  speaker?: EventSpeaker;
}
