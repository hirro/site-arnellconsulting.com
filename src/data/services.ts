export interface Service {
  title: string;
  description: string;
  items: string[];
}

export const services: Service[] = [
  {
    title: 'Software Development',
    description:
      'Full stack development with modern frameworks and best practices. We build reliable, maintainable systems that scale. We cover infrastructure as code, CI/CD pipelines, and cloud-native solutions so you can build and operate with confidence — and we embed security thinking into every layer, from identity management to secure architecture.',
    items: [
      'Web Applications',
      'API Design',
      'System Architecture',
      'Code Review',
      'Azure',
      'Infrastructure as Code',
      'CI/CD',
      'Containerization',
      'Identity & Access (SAML)',
      'Secure Architecture',
      'Java',
      'Spring Boot',
    ],
  },
  {
    title: 'Business Controlling',
    description:
      'Financial steering, analysis, and reporting. We bring clarity to complex business operations.',
    items: [
      'Financial Analysis',
      'Budgeting & Forecasting',
      'Operational Steering',
      'Accounting',
    ],
  },
];
