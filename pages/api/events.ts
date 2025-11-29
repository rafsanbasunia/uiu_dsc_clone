import type { NextApiRequest, NextApiResponse } from 'next';
import { Event } from '../../types';

const events: Event[] = [
  {
    id: '8',
    slug: 'future-of-ai-workshop',
    title: 'Future of AI: Generative Models & Beyond',
    description: 'Join us for an immersive workshop on the latest advancements in Generative AI. Learn about LLMs, diffusion models, and how they are reshaping the tech landscape.',
    date: 'December 15, 2025',
    time: '10:00 AM - 2:00 PM',
    location: 'UIU Auditorium',
    seats: '150 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1742056303/Seminar-01_jo8h3h.jpg', 
    isUpcoming: true,
    host: 'UIU Data Science Club',
    topic: 'Generative AI Workshop',
    openTo: 'All Students',
    registrationStatus: 'open'
  },
  {
    id: '1',
    slug: 'data-science-prospects',
    title: 'Data Science Prospects Seminar',
    description: 'Join us for our interactive seminar on Data Science Prospects, guided by Dr. Md. Golam Rabiul Alam. This session will explore career opportunities in Data Science and AI.',
    date: 'March 19, 2025',
    time: '2:00 PM - 3:30 PM',
    location: 'Room 126',
    seats: '50 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1742056303/Seminar-01_jo8h3h.jpg',
    isUpcoming: false,
    host: 'Md. Golam Rabiul Alam, Ph.D.',
    topic: 'Data Science Prospects Seminar',
    openTo: 'All UIU Students',
    registrationStatus: 'closed',
    speaker: {
      name: 'Md. Golam Rabiul Alam, Ph.D.',
      title: 'Professor',
      institution: 'Department of Computer Science and Engineering, BRAC University',
      bio: 'Dr. Md. Golam Rabiul Alam is a Professor in the Computer Science and Engineering Department at BRAC University. He earned his Ph.D. in Computer Engineering from Kyung Hee University, South Korea.',
      image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1742056303/Seminar-01_jo8h3h.jpg', 
      scholarLink: '#',
      websiteLink: '#'
    }
  },
  {
    id: '2',
    slug: 'deep-learning-biology-workshop',
    title: 'Deep Learning in Computational and Spatial Biology',
    description: 'A workshop on Deep Learning applications in computational and spatial biology from April 26 to May 10, 2025',
    date: 'April 26 - May 10, 2025',
    time: 'Various sessions (see schedule)',
    location: 'Room #126/628, UIU and Online (Google Meet)',
    seats: '100 seats',
    image: 'https://stg-dsc-prod.monzim.com/events-assets/deep-learning-biology-workshop.webp',
    isUpcoming: false,
    openTo: 'All Students',
    registrationStatus: 'closed'
  },
  {
    id: '3',
    slug: 'data-analysis-google-sheets',
    title: 'ENVISE: Storytelling with Excel and Power BI!',
    description: 'This event, presented by the UIU Data Science Club, is a two-chapter workshop designed to enhance your data analysis skills.',
    date: 'August 10-19, 2025',
    time: '12:30 PM - 4:00 PM',
    location: 'Room TBD, UIU',
    seats: '35 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1754651273/envise.jpg',
    isUpcoming: false,
    openTo: 'UIU Students',
    registrationStatus: 'closed'
  },
  {
    id: '4',
    slug: 'uiu-football-tournament-player-auction-2025',
    title: "Data Scientist's Futsal Championship 2.0",
    description: 'Join the most exciting football tournament featuring a unique player auction system',
    date: 'August 12 - 17, 2025',
    time: 'Will be announced',
    location: 'UIU Field',
    seats: '200 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1753891854/1753891674270_rlzaju.jpg',
    isUpcoming: false,
    openTo: 'Club Members',
    registrationStatus: 'closed'
  },
  {
    id: '5',
    slug: 'augmedix-data-analytics-career-session',
    title: 'Analytics for All: Data Fluency Career Session by Augmedix',
    description: 'Join Augmedix Bangladesh for an exclusive career session on data fluency and analytics career opportunities',
    date: 'July 30, 2025',
    time: '2:30 PM',
    location: 'Seminar Room #126',
    seats: '150 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1753892270/525064190_122143005380779406_1084549462066180302_n_ctolyh.jpg',
    isUpcoming: false,
    openTo: 'All Students',
    registrationStatus: 'closed'
  },
  {
    id: '6',
    slug: 'envise-visualize-power-bi',
    title: 'ENVISE! Visualize with Power BI',
    description: 'An advanced Power BI workshop focused on data visualization and storytelling techniques.',
    date: 'August 19, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'Seminar Room #628, UIU',
    seats: '100 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/v1754651273/envise.jpg',
    isUpcoming: false,
    openTo: 'UIU Students',
    registrationStatus: 'closed'
  },
  {
    id: '7',
    slug: 'rnd-career-paths-emerging-tech',
    title: 'Seminar on Research & Development (R&D) and Career Paths in Emerging Technologies',
    description: 'Explore R&D and career opportunities in Data Science, AI, Cybersecurity, IoT, XR, and Cloud Computing with Prof. Dr. Karim Mohammed Rezaul.',
    date: 'August 31, 2025',
    time: '2:00 PM - 4:30 PM',
    location: 'Room 126, UIU',
    seats: '200 seats',
    image: 'https://res.cloudinary.com/drrhtmzpk/image/upload/SeminarOnResearchAndDevelopment.jpg',
    isUpcoming: false,
    openTo: 'All Students',
    registrationStatus: 'closed'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Event[] | Event | { message: string }>
) {
  const { slug } = req.query;

  if (slug) {
    const event = events.find((e) => e.slug === slug);
    if (event) {
      res.status(200).json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } else {
    res.status(200).json(events);
  }
}
