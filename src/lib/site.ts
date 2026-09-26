/**
 * Site-wide content configuration.
 * Keeping copy and structure here (not inline in components) makes the marketing
 * surface editable without touching layout code — and later CMS-swappable.
 */

export const site = {
  name: 'KC Digital',
  legalName: 'KC Digital Marketing Services',
  tagline: 'The digital headquarters of the KC ecosystem.',
  description:
    'A premium digital marketing group connecting brands, creators, and strategic partners through campaigns, technology, and a growing ecosystem of companies.',
  url: 'https://kcdigital.example',
  email: 'hello@kcdigital.example',
} as const;

export const mainNav = [
  { title: 'Services', href: '/services' },
  { title: 'Portfolio', href: '/portfolio' },
  { title: 'Our Companies', href: '/companies' },
  { title: 'Academy', href: '/academy' },
  { title: 'Partners', href: '/partners' },
  { title: 'Announcements', href: '/announcements' },
  { title: 'About', href: '/about' },
] as const;

export type NavItem = (typeof mainNav)[number];

export const services = [
  {
    title: 'Social Media Management',
    description:
      'Always-on management of Facebook, Instagram, and TikTok that turns audiences into communities and communities into customers.',
    icon: 'MessageCircle',
  },
  {
    title: 'Influencer & Creator Marketing',
    description:
      'A vetted network of creators and brand ambassadors matched to brands through data, not guesswork.',
    icon: 'Users',
  },
  {
    title: 'Ads & Performance Marketing',
    description:
      'Meta, TikTok, and Google Ads engineered with funnels and analytics to compound return on every peso spent.',
    icon: 'TrendingUp',
  },
  {
    title: 'Content & Production',
    description:
      'Studio-grade video, photography, live selling, and TV & commercial production that make premium brands look premium.',
    icon: 'Clapperboard',
  },
  {
    title: 'Web, E-commerce & Technology',
    description:
      'High-performance websites, landing pages, and Shopee, Lazada & TikTok Shop stores engineered for scale and speed.',
    icon: 'Code2',
  },
  {
    title: 'AI & Automation',
    description:
      'AI image, video, and product generation, chatbots, and marketing automation that multiply your team’s output.',
    icon: 'Sparkles',
  },
] as const;

export const ecosystem = [
  {
    name: 'KC Digital Marketing Services',
    status: 'Live',
    description: 'The mother company and flagship agency powering brands, creators, and partners.',
  },
  {
    name: 'KC Academy',
    status: 'Launching',
    description:
      'Courses, certifications, coaching, and corporate training for creators and entrepreneurs.',
  },
  {
    name: 'KC Travel & Tour Services',
    status: 'Live',
    description: 'Curated travel and tour experiences across the region.',
  },
  {
    name: 'KC Boosting Services',
    status: 'Live',
    description: 'Growth and boosting services for digital-first businesses.',
  },
  {
    name: 'Cleah Shop',
    status: 'Live',
    description: 'A modern e-commerce brand within the KC family.',
  },
  {
    name: 'Cleah Future Companies',
    status: 'Roadmap',
    description: 'A modular platform ready for the next wave of KC ventures.',
  },
] as const;

export const stats = [
  { value: '1,000+', label: 'Local & international brand collaborations' },
  { value: '500+', label: 'Creators in network' },
  { value: '40+', label: 'Services under one roof' },
  { value: '5', label: 'Companies in the ecosystem' },
] as const;

export const company = {
  founded: '2024',
  founder: 'Cleah Araujo Belloga',
  aka: 'Knowingly Creative Agency',
  location: 'Surallah, South Cotabato',
  registration: 'DTI & Barangay registered',
  photo: '/company/office-surallah.png',
  photoCaption: 'Our office in Surallah, South Cotabato',
  story: [
    'Founded in 2024 by Cleah Araujo Belloga, Knowingly Creative Agency — also known as KC Digital Marketing Services — is dedicated to providing high-quality digital marketing and creative solutions in collaboration with skilled content creators.',
    'In just a short time, the agency has partnered with over 1,000 local and international brands, from emerging startups to well-established businesses, helping them grow and build a stronger online presence.',
    'Knowingly Creative is DTI and Barangay-registered in Surallah, South Cotabato, and operates primarily online — allowing it to serve clients nationwide and abroad. Recognized for its creativity, reliability, and results-driven approach, KC Digital continues to expand as one of the most trusted agencies in the field.',
  ],
  facts: [
    { label: 'Founded', value: '2024' },
    { label: 'Registration', value: 'DTI-registered' },
    { label: 'Based in', value: 'Surallah, South Cotabato' },
    { label: 'Brands served', value: '1,000+' },
  ],
} as const;

export const team = [
  {
    name: 'Cleah Araujo Belloga',
    role: 'Founder & CEO · SMM, Graphic Artist & Project Manager',
    photo: '/team/cleah-belloga.png',
    bio: 'A BSIT graduate who leads the agency’s creative direction and strategy. Cleah has collaborated with 1,000+ local and international brands, blending business analysis and design to drive engagement and growth.',
  },
  {
    name: 'John Eric Agudo',
    role: 'COO · IT Solutions Specialist & Editor',
    photo: '/team/john-eric-agudo.png',
    bio: 'A BSIT graduate specializing in technical solutions for web development and digital marketing. He pairs technical precision with creative execution across photo and video editing and content optimization.',
  },
  {
    name: 'Rey Mark Tinaja',
    role: 'Software Programmer & Web Developer',
    photo: '/team/rey-mark-tinaja.png',
    bio: 'A Cum Laude BSIT graduate handling website and system development for local and international clients, including UK and global partners — known for professionalism, precision, and a passion for technology.',
  },
  {
    name: 'Angela Caido',
    role: 'Administrator, Graphic Artist & Executive Assistant',
    photo: '/team/angela-caido.png',
    bio: 'Oversees administrative operations across multiple brand campaigns, ensuring smooth coordination and timely deliverables — and a skilled graphic artist contributing to campaign materials and brand assets.',
  },
  {
    name: 'Niel Martinez',
    role: 'Media Buyer & Ads Meta Specialist',
    photo: '/team/niel-martinez.png',
    bio: 'A performance-driven media buyer specializing in Meta (Facebook & Instagram) ads, with experience across Google, Microsoft, and Amazon Ads — driving leads, conversions, and ROI through data-led strategy.',
  },
  {
    name: 'Denise Margarette L. Cube',
    role: 'Public Relations & Content Strategy Manager',
    photo: '/team/denise-cube.png',
    bio: 'Oversees creator coordination and relationship management, ensuring clear communication and smooth campaign execution while shaping campaign visuals, presentations, and content direction.',
  },
] as const;

export const testimonials = [
  {
    quote:
      'KC Digital treated our launch like it was their own product. The craft and the numbers both showed up.',
    author: 'Marketing Director',
    company: 'Consumer Brand',
  },
  {
    quote:
      'The most organized agency we have worked with. Everything runs through their portal — nothing gets lost.',
    author: 'Founder',
    company: 'D2C Startup',
  },
  {
    quote:
      'They found the right creators for us in days, not weeks. The match quality was noticeably better.',
    author: 'Head of Growth',
    company: 'Fintech',
  },
] as const;
