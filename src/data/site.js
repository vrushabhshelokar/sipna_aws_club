/**
 * Centralized Single Source of Truth for Global Site Configuration & Home Page Content.
 * Contains site identity, mission/vision statements, benefits, and contact metadata.
 */

export const siteConfig = {
  name: 'Sipna AWS Club',
  shortName: 'AWS Club',
  college: 'Sipna College of Engineering & Technology, Amravati',
  tagline: 'Empowering Future Cloud Innovators',
  description: 'The official AWS Student Club at Sipna COET. A vibrant student community dedicated to fostering cloud computing skills, AWS certifications, and hands-on technical workshops.',
  contact: {
    email: 'awsclub@sipnaengg.ac.in',
    address: 'Sipna College of Engineering & Technology, In front of Nemani Godown, Badnera Road, Amravati, Maharashtra 444607'
  },
  socialLinks: {
    linkedin: 'https://linkedin.com/company/sipna-aws-club',
    github: 'https://github.com/sipna-aws-club',
    instagram: 'https://instagram.com/sipna_aws_club'
  },
  footerInfo: {
    copyright: 'Sipna AWS Club. All rights reserved.',
    subtext: 'Student Community Chapter — Sipna COET'
  }
};

export const homeContent = {
  hero: {
    badge: 'Official Student Community',
    title: 'Discover the Power of Cloud Computing with AWS',
    subtitle: 'Join Sipna AWS Club to master Amazon Web Services, participate in hands-on cloud bootcamps, and connect with peer developers.',
    primaryCtaText: 'Explore Team',
    primaryCtaPath: '/team'
  },
  about: {
    badge: 'About The Club',
    title: 'Building Cloud Excellence at Sipna COET',
    overview: 'Sipna AWS Club is an official student-led technical organization dedicated to making cloud technology accessible to engineering students of all years and branches.',
    objectives: [
      'Deliver practical hands-on workshops on core AWS services',
      'Guide students toward industry-recognized AWS Certifications',
      'Foster collaboration, open-source projects, and cloud hackathons',
      'Connect students with industry professionals and cloud experts'
    ]
  },
  mission: {
    badge: 'Our Mission',
    title: 'Bridge Theory and Real-World Cloud Practice',
    description: 'To provide students with continuous cloud education, practical labs, and mentorship, preparing them for successful careers in cloud architecture, DevOps, and software engineering.'
  },
  vision: {
    badge: 'Our Vision',
    title: 'A Campus Hub for Cloud Innovation',
    description: 'To establish Sipna COET as a premier technical hub where every student gains fundamental cloud literacy and builds real-world serverless applications.'
  },
  benefits: [
    {
      id: 'benefit-1',
      title: 'AWS Learning Opportunities',
      description: 'Gain structured learning paths covering cloud fundamentals, EC2, S3, Lambda, and DevOps.'
    },
    {
      id: 'benefit-2',
      title: 'Hands-on Workshops',
      description: 'Participate in step-by-step interactive labs building real cloud infrastructure.'
    },
    {
      id: 'benefit-3',
      title: 'Community & Networking',
      description: 'Connect with senior students, cloud mentors, and fellow tech enthusiasts.'
    },
    {
      id: 'benefit-4',
      title: 'Career & Skill Growth',
      description: 'Build a strong portfolio of cloud projects and prepare for AWS certifications.'
    }
  ]
};
