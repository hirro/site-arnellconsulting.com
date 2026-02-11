export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  linkedIn: string;
  /** Optional profile image path (in public/), e.g. "/images/team/jim-arnell.jpg" */
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: 'Jim Arnell',
    role: 'Senior Consultant — Technology',
    bio: 'Full stack developer with deep expertise in software development, computer security, and DevOps. Over 20 years of experience delivering robust technical solutions across industries.',
    expertise: [
      'Full Stack Development',
      'Cloud & Azure',
      'Security & SAML',
      'DevOps & IaC',
      'Python',
      'TypeScript',
    ],
    linkedIn: 'https://www.linkedin.com/in/jimarnell/',
    image: '/images/team/jim-arnell.png',
  },
  {
    name: 'Jonna Arnell',
    role: 'Senior Consultant — Business',
    bio: 'Experienced business controller and analyst with a strong track record in accounting, business process improvement, and operational steering. Brings clarity to complex financial landscapes.',
    expertise: [
      'Business Controlling',
      'Financial Analysis',
      'Accounting',
      'Process Improvement',
      'Business Analysis',
    ],
    linkedIn: 'https://www.linkedin.com/in/jonna-arnell-84abb95/',
    image: '/images/team/jonna-arnell.png',
  },
];
