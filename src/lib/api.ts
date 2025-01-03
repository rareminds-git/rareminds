import { ProjectsResponse, Project } from '../types/project'

const dummyProjects: Project[] = [
  {
    id: '1',
    name: 'Naan Mudhalvan 2024',
    description: 'Naan Mudhalvan and Oracle Upskilling Platform A massive industry relevant skill enhancement initiative for the Youth of Tamil Nadu.',
    thumbnail: '/src/assets/images/projects/nanmudhalvan.jpg?height=400&width=600',
    category: ['Naan Mudhalvan'],
    technologies: [],
    completionStatus: 'Completed',
    date: '2023-05-15',
    githubUrl: '',
    liveDemo: '',
    metrics: {
      linesOfCode: 0,
      contributors: 0,
      downloads: 0,
    },
  },
  {
    id: '2',
    name: 'Naan Mudhalvan 2025',
    description: 'Naan Mudhalvan and Oracle Upskilling Platform A massive industry relevant skill enhancement initiative for the Youth of Tamil Nadu.',
    thumbnail: '/src/assets/images/projects/nanmudhalvan.jpg?height=400&width=600',
    category: ['Naan Mudhalvan'],
    technologies: [],
    completionStatus: 'In Progress',
    date: '2025-01-15',
    githubUrl: '',
    metrics: {
      linesOfCode: 0,
      contributors: 0,
      downloads: 0,
    },
  },
  {
    id: '3',
    name: 'KSDC',
    description: '',
    thumbnail: '?height=400&width=600',
    category: ['KSDC'],
    technologies: [],
    completionStatus: 'In Progress',
    date: '',
    githubUrl: '',
    metrics: {
      linesOfCode: 0,
      contributors: 0,
      downloads: 0,
    },
  },
  // Add more dummy projects here...
]

export async function fetchProjects(
  page: number, 
  search: string = '', 
  category: string = '', 
  status: string = ''
): Promise<ProjectsResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  let filteredProjects = dummyProjects

  // Apply search filter
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProjects = filteredProjects.filter(project => 
      project.name.toLowerCase().includes(searchLower) ||
      project.description.toLowerCase().includes(searchLower) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchLower))
    )
  }

  // Apply category filter
  if (category) {
    filteredProjects = filteredProjects.filter(project => 
      project.category.includes(category)
    )
  }

  // Apply status filter
  if (status) {
    filteredProjects = filteredProjects.filter(project => 
      project.completionStatus === status
    )
  }

  // Paginate results
  const pageSize = 6
  const startIndex = (page - 1) * pageSize
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + pageSize)

  return {
    projects: paginatedProjects,
    totalCount: filteredProjects.length,
  }
}

