import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaStripe,
  FaGithub,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiD3Dotjs,
  SiFlask,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiSocketdotio,
  SiExpress,
  SiRedis,
} from "react-icons/si";

export const Projects = () => {
  const projects = [
    {
      title: "Cloud Platform",
      description:
        "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
      techStack: [
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "AWS", icon: <FaNodeJs className="text-yellow-400" /> },
        { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
      ],
      link: "#",
      code: "https://github.com/Hunter-420/NHA-National-Health-Agency?tab=readme-ov-file",
    },
    {
      title: "AI Analytics Dashboard",
      description:
        "ML-powered data visualization platform with predictive analytics and interactive reports.",
      techStack: [
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400" /> },
        { name: "D3.js", icon: <SiD3Dotjs className="text-amber-500" /> },
        { name: "Flask", icon: <SiFlask className="text-gray-300" /> },
      ],
      link: "#",
      code: "https://github.com/Hunter-420/NHA-National-Health-Agency?tab=readme-ov-file",
    },
    {
      title: "E-Commerce Web App",
      description:
        "Full-stack e-commerce app with modern UI, secure payment integration, and product management.",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
        { name: "Stripe", icon: <FaStripe className="text-purple-400" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
      ],
      link: "#",
      code: "https://github.com/Hunter-420/NHA-National-Health-Agency?tab=readme-ov-file",
    },
    {
      title: "Real-Time Chat App",
      description:
        "Scalable chat app supporting real-time messaging, presence, and group chat features.",
      techStack: [
        { name: "Socket.IO", icon: <SiSocketdotio className="text-gray-300" /> },
        { name: "Express", icon: <SiExpress className="text-gray-300" /> },
        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Redis", icon: <SiRedis className="text-red-500" /> },
      ],
      link: "https://nha.khanalnischal.com.np/",
      code: "https://github.com/Hunter-420/NHA-National-Health-Agency?tab=readme-ov-file",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, key) => (
                  <span
                    key={key}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                  >
                    {tech.icon}
                    {tech.name}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
