import { projects } from "../constants";
  const Projects = () => {
    return (
      <div id="projects" className="border-b border-neutral-800 pb-4">
        <h1 className="my-20 text-center text-4xl">Projects</h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-lg border border-neutral-700 p-6 shadow-md transition-transform hover:scale-105"
            >
              <div>
                <h6 className="mb-4 text-xl font-thin text-purple-50">
                  {project.title}
                </h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
              </div>
              <div>
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-neutral-800 px-2 py-1 text-sm font-medium text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <div class="relative group">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-600 rounded-lg blur opacity-45 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                  <button class="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <span class="pr-1 text-neutral-300 hover:text-white">Github</span></a>
                  </button>
                </div>
                <div class="relative group">
                  <div class="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-purple-600 rounded-lg blur opacity-45 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <button class="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
                      <a href={project.deployment} target="_blank" rel="noopener noreferrer">
                        <span class="pr-1 text-neutral-300 hover:text-white">Deployment</span>
                      </a>                        
                    </button>
                  </div>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  