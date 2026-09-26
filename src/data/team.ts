export interface TeamMember {
  name: string;
  /** Short discipline label shown above the name. */
  area: string;
  role: string;
  bio: string;
  expertise: string[];
  email: string;
  linkedIn: string;
  /** Optional profile image path (in public/), e.g. "/images/team/jim-arnell.jpg" */
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Jim Arnell',
    area: 'Technology',
    role: 'Senior Consultant — Technology',
    bio: 'Full stack developer with deep expertise in software development, computer security and DevOps. Over 20 years delivering robust technical solutions across industries.',
    expertise: [
      'Full stack',
      'Cloud & Azure',
      'Security & SAML',
      'DevOps & IaC',
      'Python',
      'TypeScript',
    ],
    email: 'jim@arnellconsulting.com',
    linkedIn: 'https://www.linkedin.com/in/jimarnell/',
    image: '/images/team/jim-arnell.png',
  },
  {
    name: 'Jonna Arnell',
    area: 'Business',
    role: 'Senior Consultant — Business',
    bio: 'Experienced business controller and analyst with a strong track record in accounting, business process improvement and operational steering.',
    expertise: [
      'Business controlling',
      'Financial analysis',
      'Accounting',
      'Process improvement',
      'Business analysis',
    ],
    email: 'jonna@arnellconsulting.com',
    linkedIn: 'https://www.linkedin.com/in/jonna-arnell-84abb95/',
    image: '/images/team/jonna-arnell.png',
  },
];
