import { Solution, WorkspaceLocation, TeamLeader, CareerOpening } from './types';

export const SOLUTIONS: Solution[] = [
  {
    id: 'private-offices',
    title: 'Private Offices',
    tagline: 'A secure, private sanctuary designed for focus and collaboration.',
    description: 'Perfect for startups, SMEs, and established businesses seeking privacy and a space to call their own.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLv9UKYj6TpI1nKNSpQsddn6Qz4p3-LU69x_60EbWn4O5aXMgCdKodftOCqDgl48XXQHJ-TsaCzsw5vrQLJXNZjtp3II3s7RnIkIJd2scxEFm52bdYFHT41ncNxjNBvSCowoY3gfRlt1ApTYfyVhyNa9E2WL8azRP4ktXEXIaINXQKcKLkAMpCc9I6IhX9jHHC8yFM_QnrUbdOcRiCiAfD09DHx8LAzDx1otsKe3ZWMn4WkHOXo8VW_snhc',
    pricing: 'From $450 / month per desk',
    features: [
      '24/7 Access to secure private office suite',
      'Ergonomic tables and premium office chairs',
      'Business-grade high-speed Wi-Fi and ethernet connection',
      'Access to premium corporate business lounges',
      'Free allocation of monthly meeting room hours',
      'Daily professional housekeeping services',
      'Dedicated lockable filing cabinets'
    ]
  },
  {
    id: 'coworking',
    title: 'Coworking',
    tagline: 'Inspiring spaces that connect like-minded industry professionals.',
    description: 'Perfect for freelancers, remote workers, and those who need a professional, flexible workspace for one.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvYJg-hdrt367d65GCxXm2_KvKiamLWPQjF9qG54Lulbtr8Zm2SclVwL30gX351rLDbR10WhxpxpbMQpTH9nY5hin0N6btse7RugMTA2NbQhXk1fe8yOpJNUVIv_XPklDCeoRr6u_e3BVpJU5IJS4I7QO4fceTYL_6Hecq3McQ6oxeAmxGgoBFKjHPZkmoEEraXt8VYySflIB32OTueiFb37npfTYjn9d8An8AbuC4BXRVTjiUQa0Rf4FY',
    pricing: 'From $180 / month',
    features: [
      'Flexible hot-desking or dedicated desk options',
      'Access during standard business hours (or 24/7 for dedicated)',
      'High-speed secure Wi-Fi',
      'Complimentary premium roast coffee, tea, and micro-filtered water',
      'On-site community manager support',
      'Full access to regular member networking events',
      'Secure locker rentals available'
    ]
  },
  {
    id: 'meeting-rooms',
    title: 'Meeting Rooms & Event Spaces',
    tagline: 'Impress clients and power-up collaboration in high-tech spaces.',
    description: 'Book meeting rooms by the hour or day — for client meetings, team workshops and video conferences. Equipped with all you need.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLvQwPKtLsGRVmg_aDLXlGDKZmAdFtvzWjuSgekWSlNU_GB7QLsEnwCYv326DZ6qsnIu-pDBnSRLdC54A2JqV8Xhq3bZRgnM_zIoGGIg-FdaL64L4uxg37Dwh5NsrBYXKCFFSfylC27RGYupQ_BQund6VOPVx2GksYA9ruL9D5Pw0wwE77ncEgfDBJbVzgUPrVb29RUteIyPjoUaWDdH408JzvFt2ie71DBlTnqF-3TX8upn-LS948rbURU',
    pricing: 'From $45 / hour',
    features: [
      'Advanced AV equipment and high-definition presentation screens',
      'High-speed video conferencing gear (Polycom/Logitech)',
      'Whiteboards, markers, and premium stationery blocks',
      'On-site IT setup support and catering options',
      'Professional front-desk greeting for guests',
      'Configurations matching boardrooms, classrooms, or theater setups'
    ]
  },
  {
    id: 'virtual-offices',
    title: 'Virtual Offices',
    tagline: 'Establish a powerful local presence instantly.',
    description: 'Build a credible business presence with a premium address, mail handling, and optional workspace access.',
    image: 'https://lh3.googleusercontent.com/aida/AP1WRLtiOnSz2B8PpLpdfF2wUxr5cGzEgWxDVEMPl1-5Sl1V95x-ooUAkiH_EzwlF4eHgY5kPMGkKVkwBKo7bL9oKLWTVQBW6KDNMVBcvlbn--0_-lLasdLMd_Rc7BN6T9taXk7mqzvHIAz5fHDixxRSSA1Ar5vfcXaRMaOt6s3kL1h9Q8WHvvX8GHCRjj8GbnI6Hr5qXoFCYGzO46TQa4s1ttoF0e-W3f2JHae9jU-N8ocrlzqX5zSwvQViSg',
    pricing: 'From $35 / month',
    features: [
      'Premium CBD commercial mailing address for your company',
      'Secure mail and package handling and instant app notifications',
      'Mail forwarding or scanning services on-demand',
      'Dedicated local business telephone number setup',
      'Professional bilingual receptionist to answer guest calls',
      'Complementary hot desking tokens (1 day per month)'
    ]
  }
];

export const WORKSPACES: WorkspaceLocation[] = [
  // Singapore
  {
    id: 'sg-marina-square',
    name: 'Marina Square',
    country: 'Singapore',
    city: 'Singapore',
    address: '6 Raffles Boulevard, Marina Square, Singapore 039594',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    metroAccess: '2 min walk from Esplanade & Promenade MRT Stations',
    amenities: ['Barista Café', 'Phone Booths', 'Interactive Lounge', 'Nursing Room', 'Event Hall'],
    capacity: 'Fits teams of 1 to 150+'
  },
  {
    id: 'sg-raffles-place',
    name: 'Raffles Place (OCBC Centre)',
    country: 'Singapore',
    city: 'Singapore',
    address: '65 Chulia Street, OCBC Centre, Singapore 049513',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
    metroAccess: '1 min walk from Raffles Place MRT Station',
    amenities: ['Premium Boardrooms', 'Barista Café', 'Panoramic City View', 'Dedicated Mailroom', 'Showers'],
    capacity: 'Fits teams of 1 to 200+'
  },
  {
    id: 'sg-orchard-road',
    name: 'Orchard Road (The Centrepoint)',
    country: 'Singapore',
    city: 'Singapore',
    address: '176 Orchard Road, The Centrepoint, Singapore 238843',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=800',
    metroAccess: '3 min walk from Somerset MRT Station',
    amenities: ['Gaming Room', 'Bistro Area', 'Dedicated Podcast Studio', 'Quiet Zones'],
    capacity: 'Fits teams of 1 to 100+'
  },
  // Australia
  {
    id: 'au-sydney-cbd',
    name: 'Sydney Pitt Street',
    country: 'Australia',
    city: 'Sydney',
    address: '175 Pitt Street, Sydney NSW 2000',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800',
    metroAccess: '3 min walk from Town Hall & Martin Place Stations',
    amenities: ['Rooftop Terrace', 'Wellness Studio', 'Barista Counter', 'Secure Bike Parking'],
    capacity: 'Fits teams of 1 to 120+'
  },
  {
    id: 'au-melbourne-collins',
    name: 'Melbourne Collins Street',
    country: 'Australia',
    city: 'Melbourne',
    address: '150 Collins Street, Melbourne VIC 3000',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    metroAccess: 'Direct Tram access on Collins St',
    amenities: ['Gourmet Pantry', 'Focus Pods', 'Collaborative Ampitheatre', 'Eco-friendly Green walls'],
    capacity: 'Fits teams of 1 to 180+'
  },
  // Japan
  {
    id: 'jp-tokyo-shibuya',
    name: 'Shibuya Hikarie',
    country: 'Japan',
    city: 'Tokyo',
    address: '2-21-1 Shibuya, Shibuya-ku, Tokyo 150-8510',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=800',
    metroAccess: 'Connected directly to Shibuya Station (JR & Metro lines)',
    amenities: ['Zen Relaxation Room', 'Biophilic Design Lounge', 'Creative Studios', 'Translator Concierge'],
    capacity: 'Fits teams of 1 to 90+'
  },
  // Korea
  {
    id: 'kr-seoul-gangnam',
    name: 'Gangnam Station Center',
    country: 'Korea',
    city: 'Seoul',
    address: '325 Teheran-ro, Gangnam-gu, Seoul 06151',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    metroAccess: '2 min walk from Gangnam Subway Station Exit 12',
    amenities: ['High-speed Tech Hub', 'Complimentary Craft Beer Tap', 'Sleeping Pods', 'Lounge Cafe'],
    capacity: 'Fits teams of 1 to 160+'
  },
  // India
  {
    id: 'in-bangalore-mg-road',
    name: 'MG Road Prestige Tower',
    country: 'India',
    city: 'Bangalore',
    address: '99 MG Road, Bangalore, Karnataka 560001',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800',
    metroAccess: '1 min walk from MG Road Metro Station',
    amenities: ['Chai Bar lounge', 'Hot-desking floor', 'Video Production studio', 'Indoor courtyard'],
    capacity: 'Fits teams of 1 to 250+'
  },
  // Malaysia
  {
    id: 'my-klcc-tower',
    name: 'Kuala Lumpur CC Tower',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    address: 'Level 32, Menara Petronas 3, KLCC, 50088 Kuala Lumpur',
    image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800',
    metroAccess: 'Connected directly to KLCC LRT Station',
    amenities: ['Twin Towers View Lounge', 'Private Phone Cabins', 'Premium Boardrooms', 'Dry Cleaning services'],
    capacity: 'Fits teams of 1 to 140+'
  }
];

export const LEADERS: TeamLeader[] = [
  {
    name: 'Kong Wan Sing',
    role: 'Founder & Chief Executive Officer',
    bio: 'Kong Wan Sing founded JustCo in 2011 with the vision of redefining working environments in Asia. He is passionate about scaling businesses, building vibrant startup communities, and expanding JustCo’s footprint across Asia-Pacific.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Luisa Lee',
    role: 'Chief Operating Officer',
    bio: 'Luisa oversees all day-to-day global operations, hospitality services, and design-build teams. With 15+ years in commercial real estate and luxury hospitality, she ensures every JustCo branch delivers premier member experiences.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  },
  {
    name: 'Hiroshi Tanaka',
    role: 'Head of Growth, North Asia',
    bio: 'Hiroshi directs growth strategies across Japan and Korea. He coordinates local developer alliances, building networks of premium CBD offices in Tokyo and Seoul, ensuring spaces reflect both international excellence and local needs.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400'
  }
];

export const CAREERS: CareerOpening[] = [
  {
    id: 'car-01',
    title: 'Senior Community Manager',
    department: 'Community Operations',
    location: 'Singapore',
    type: 'Full-Time'
  },
  {
    id: 'car-02',
    title: 'Enterprise Workspace Sales Consultant',
    department: 'Sales & Business Development',
    location: 'Sydney, Australia',
    type: 'Full-Time'
  },
  {
    id: 'car-03',
    title: 'Full-Stack Software Engineer (JustCo App)',
    department: 'Technology',
    location: 'Singapore',
    type: 'Full-Time'
  },
  {
    id: 'car-04',
    title: 'Interior Space Designer',
    department: 'Design & Workspace Build',
    location: 'Tokyo, Japan',
    type: 'Full-Time'
  }
];
