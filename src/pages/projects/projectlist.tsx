import React, { useEffect, useState } from 'react';
import { Header } from '../../components/Project/Header';
import { Filters } from '../../components/Project/Filters';
import { ProjectCard } from '../../components/Project/ProjectCard';
import { ProjectModal } from '../../components/Project/ProjectModal';
import { projects } from '../../data/projects';
import { useProjectSearch } from '../../hooks/useProjectSearch';
import type { Project } from '../../types/index';
import axios from 'axios';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const {
    searchQuery,
    setSearchQuery,
    filters,
    handleFilterChange,
    filteredProjects
  } = useProjectSearch(projects);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="container mx-auto px-4 py-8">
        <Filters onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;

