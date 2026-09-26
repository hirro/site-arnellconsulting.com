export type IconName =
  | 'code'
  | 'cloud'
  | 'shield'
  | 'chart'
  | 'calendar'
  | 'compass'
  | 'ledger';

export interface ServiceGroup {
  title: string;
  icon: IconName;
  items: string[];
}

export interface ServiceItem {
  label: string;
  icon: IconName;
}

export interface Service {
  title: string;
  description: string;
  /** Rendered as a set of titled cards (used for broad disciplines). */
  groups?: ServiceGroup[];
  /** Rendered as single-line tiles. */
  items?: ServiceItem[];
}

export const services: Service[] = [
  {
    title: 'Software development',
    description:
      'Reliable, maintainable systems that scale — with infrastructure as code, CI/CD and security thinking built into every layer, from identity management to architecture.',
    groups: [
      {
        title: 'Build',
        icon: 'code',
        items: [
          'Java · Spring Boot',
          'Python · TypeScript',
          'API design',
          'System architecture',
          'Web apps — React, Svelte',
        ],
      },
      {
        title: 'Run',
        icon: 'cloud',
        items: ['Azure & cloud-native', 'Infrastructure as code', 'CI/CD pipelines', 'Containerization'],
      },
      {
        title: 'Secure',
        icon: 'shield',
        items: ['SAML · OIDC · OAuth2', 'PKI · PKCS', 'RADIUS · LDAP', 'Secure architecture'],
      },
    ],
  },
  {
    title: 'Business controlling',
    description:
      'Financial steering, analysis and reporting that bring clarity to complex business operations.',
    items: [
      { label: 'Financial analysis', icon: 'chart' },
      { label: 'Budgeting & forecasting', icon: 'calendar' },
      { label: 'Operational steering', icon: 'compass' },
      { label: 'Accounting', icon: 'ledger' },
    ],
  },
];
