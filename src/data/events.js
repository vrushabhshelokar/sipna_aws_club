/**
 * Centralized Single Source of Truth for Sipna AWS Club Events.
 * Stores upcoming workshops, technical bootcamps, and community sessions.
 */

export const events = [
  {
    id: 'event-1',
    title: 'Cloud 101: Introduction to AWS & Cloud Computing',
    date: 'August 20, 2026',
    description: 'An introductory session for first-year students to get started with Cloud Computing, AWS Core Services, and cloud career paths.',
    location: 'Auditorium 2, Sipna COET / Hybrid',
    status: 'upcoming'
  },
  {
    id: 'event-2',
    title: 'Hands-on AWS EC2 & S3 Deployment Bootcamp',
    date: 'September 12, 2026',
    description: 'Practical workshop on creating cloud virtual machines, configuring security groups, and deploying static websites on AWS S3.',
    location: 'CC Lab 3, Department of CSE',
    status: 'upcoming'
  },
  {
    id: 'event-3',
    title: 'Serverless Architectures with AWS Lambda & API Gateway',
    date: 'October 05, 2026',
    description: 'Learn how to build event-driven serverless applications using AWS Lambda, DynamoDB, and API Gateway without managing servers.',
    location: 'Virtual / Google Meet',
    status: 'upcoming'
  }
];

/**
 * Returns all events with status set to 'upcoming'.
 */
export function getUpcomingEvents() {
  return events.filter((event) => event.status === 'upcoming');
}

/**
 * Returns all recorded events.
 */
export function getAllEvents() {
  return events;
}
