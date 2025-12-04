export default function Projects() {
  const projects = [
    {
      title: "ChefiePie",
      description: "ChefiePie is an AI-powered mobile cooking assistant that revolutionizes home cooking through real-time voice guidance, ingredient recognition, and personalized recipe adaptation. Built with React Native, Firebase, and TensorFlow, it features hands-free voice control, computer vision for ingredient identification, intelligent substitution suggestions, and meal         planning tailored to dietary preferences. The app helps users of all skill levels cook confidently while reducing food waste and adapting recipes to available ingredients.",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      metrics: "",
      link: "https://github.com/Vambot07/ChefiePie",
      icon: "🚀"
    },
    {
      title: "FitPal",
      description: "FitPal is a feature-rich, user-centric health and fitness tracking application built using the MERN stack. The system helps users monitor daily workouts, track calorie intake, visualize progress, and manage personalized meal plans through intelligent recommendations powered by the Spoonacular API. With a clean UI and responsive design, FitPal empowers users to stay consistent in their fitness journey through structured routines, nutrition planning, and timely reminders.",
      technologies: ["React", "Boostrap", "Node.js", "MongoDB", "Spoocacular API"],
      metrics: "",
      link: "https://github.com/Calvern/FitPal",
      icon: "🛒"
    },
    {
      title: "Fect-Do",
      description: "An App for learning purposes to increase productivity students in their studies by managing their tasks effectively with a simple and intuitive interface.",
      technologies: ["Java"],
      metrics: "",
      link: "https://github.com/Wan2729/Fect-DO",
      icon: "📊"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Transforming ideas into production-ready solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2"
            >
              {/* Project Icon */}
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                {project.icon}
              </div>

              {/* Project Number */}
              <div className="absolute top-6 right-6 text-6xl font-bold text-gray-100 dark:text-gray-700">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white relative z-10">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Metrics */}
              <div className="mb-4 py-2 px-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg inline-block">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {project.metrics}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full border border-blue-200 dark:border-blue-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* View Project Link */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 font-semibold transition-all group/link"
              >
                <span>Explore Project</span>
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/Vambot07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
