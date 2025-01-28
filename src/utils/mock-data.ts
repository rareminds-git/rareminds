import { faker } from '@faker-js/faker';

export interface Intern {
  id: number;
  name: string;
  skills: string[];
  availability: 'Full-time' | 'Part-time' | 'Contract';
  avatar: string;
  hireDate: Date;
}

export interface Company {
  id: number;
  name: string;
  industry: string;
  openPositions: string[];
  logo: string;
}

export function generateMockData(count: number): { interns: Intern[], companies: Company[] } {
  const interns: Intern[] = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.person.fullName(),
    skills: Array.from({ length: faker.number.int({ min: 2, max: 5 }) }, () => faker.hacker.adjective()),
    availability: faker.helpers.arrayElement(['Full-time', 'Part-time', 'Contract']),
    avatar: faker.image.avatar(),
    hireDate: faker.date.past({ years: 2 }),
  }));

  const companies: Company[] = Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: faker.company.name(),
    industry: faker.company.buzzPhrase(),
    openPositions: Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, () => faker.person.jobTitle()),
    logo: faker.image.urlLoremFlickr({ category: 'business' }),
  }));

  return { interns, companies };
}

