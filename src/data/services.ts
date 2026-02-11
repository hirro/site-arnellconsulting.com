export interface Service {
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Software Development',
    description: 'Full stack development with modern frameworks and best practices. We build reliable, maintainable systems that scale.',
    items: ['Web Applications', 'API Design', 'System Architecture', 'Code Review'],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Infrastructure as code, CI/CD pipelines, and cloud-native solutions. We help you build and operate with confidence.',
    items: ['Azure', 'Infrastructure as Code', 'CI/CD', 'Containerization'],
  },
  {
    title: 'Security',
    description: 'From identity management to secure architecture. We embed security thinking into every layer of your systems.',
    items: ['Identity & Access (SAML)', 'Secure Architecture', 'Threat Modeling', 'Compliance'],
  },
  {
    title: 'Business Controlling',
    description: 'Financial steering, analysis, and reporting. We bring clarity to complex business operations.',
    items: ['Financial Analysis', 'Budgeting & Forecasting', 'Operational Steering', 'Accounting'],
  },
];
