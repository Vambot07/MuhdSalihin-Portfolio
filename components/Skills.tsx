export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      skills: [
        { name: "React & Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "State Management", level: 88 },
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js & Express", level: 90 },
        { name: "Python & FastAPI", level: 85 },
        { name: "PostgreSQL & MongoDB", level: 88 },
        { name: "REST & GraphQL APIs", level: 92 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: "☁️",
      skills: [
        { name: "AWS & Azure", level: 82 },
        { name: "Docker & Kubernetes", level: 80 },
        { name: "CI/CD Pipelines", level: 85 },
        { name: "Git & GitHub Actions", level: 93 },
      ]
    },
    {
      title: "Software Engineering",
      icon: "🛠️",
      skills: [
        { name: "System Design", level: 87 },
        { name: "Testing (Jest, Cypress)", level: 88 },
        { name: "Agile & Scrum", level: 90 },
        { name: "Code Review", level: 92 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Mastering the tools that power modern applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React", "Next.js", "TypeScript", "Node.js", "Python",
              "PostgreSQL", "MongoDB", "Redis", "Docker", "Kubernetes",
              "AWS", "Azure", "Git", "Jest", "Cypress", "GraphQL",
              "Tailwind", "Prisma", "tRPC", "Vercel"
            ].map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
