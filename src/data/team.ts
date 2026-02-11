export interface TeamMember {
  name: string;
  role?: string;
  linkedIn: string;
}

export const team: TeamMember[] = [
  {
    name: 'Jim Arnell',
    linkedIn: 'https://www.linkedin.com/in/jimarnell/',
  },
  {
    name: 'Jonna Arnell',
    linkedIn: 'https://www.linkedin.com/in/jonna-arnell-84abb95/',
  },
];
