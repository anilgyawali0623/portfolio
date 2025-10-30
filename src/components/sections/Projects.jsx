import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import {
  SiChartdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";
import RevealComponent from "../RevealComponent";

export const Projects = () => {
  const projects = [
    {
      title: "National Health Monitoring System",
      role: "Frontend Developer",
      description:
        "Developed during a hackathon — a real-time web system to monitor and analyze hospital disease data. Built an interactive dashboard using React.js and Chart.js for visualizing outbreak trends and patient cases. Collaborated with a Node.js + PostgreSQL backend team to ensure smooth, real-time data synchronization and responsive performance.",
      techStack: [
        { name: "React.js", icon: <FaReact className='text-sky-400' /> },
        { name: "Chart.js", icon: <SiChartdotjs className='text-pink-400' /> },
        { name: "Node.js", icon: <FaNodeJs className='text-green-500' /> },
        { name: "PostgreSQL", icon: <SiPostgresql className='text-sky-500' /> },
      ],
      link: "https://nha.khanalnischal.com.np/",
      code: "https://github.com/Hunter-420/NHA-National-Health-Agency",
    },
    {
      title: "Blog Website",
      role: "Full-Stack Developer",
      description:
        "Dynamic MERN-based blog platform where users can create, read, update, and delete posts. Implemented secure JWT authentication, role-based access, and real-time updates. Designed a responsive React frontend with a scalable Node.js + Express + MongoDB backend, ensuring smooth and secure user experience.",
      techStack: [
        { name: "React.js", icon: <FaReact className='text-sky-400' /> },
        { name: "Node.js", icon: <FaNodeJs className='text-green-500' /> },
        { name: "Express.js", icon: <SiExpress className='text-gray-300' /> },
        { name: "MongoDB", icon: <SiMongodb className='text-green-400' /> },
      ],
      link: "#",
      code: "https://github.com/anilgyawali0623/mern-blog",
    },
    {
      title: "Real-Time Chat Application",
      role: "Full-Stack Developer",
      description:
        "Built a responsive, real-time chat app enabling instant communication via Socket.io. Designed the frontend using React and TailwindCSS, with Node.js + Express handling real-time backend communication and MongoDB for message persistence. Used Zustand for state management and secure authentication.",
      techStack: [
        { name: "React.js", icon: <FaReact className='text-sky-400' /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className='text-cyan-400' /> },
        { name: "Socket.io", icon: <SiSocketdotio className='text-gray-300' /> },
        { name: "MongoDB", icon: <SiMongodb className='text-green-400' /> },
      ],
      link: "#",
      code: "https://github.com/anilgyawali0623/collegechat",
    },
    {
      title: "AI Interview Assistant",
      role: "Full-Stack Developer",
      description:
        "An AI-powered web app that conducts voice-based interviews and evaluates performance. Built using Next.js and TypeScript, integrated Google Gemini API for NLP-based question generation, and used Vapi for real-time voice interaction. Implemented Firebase for authentication, data storage, and deployed the app on Vercel.",
      techStack: [
        { name: "Next.js", icon: <SiNextdotjs className='text-gray-200' /> },
        { name: "TypeScript", icon: <SiTypescript className='text-blue-500' /> },
        { name: "Firebase", icon: <SiFirebase className='text-amber-400' /> },
        { name: "Python (AI)", icon: <FaPython className='text-yellow-300' /> },
      ],
      link: "https://interviewai-sandy.vercel.app/sign-in",
      code: "https://github.com/anilgyawali0623/interviewai",
    },
  ];

  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealComponent>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            Featured Projects
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {projects.map((project, i) => (
              <div
                key={i}
                className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'
              >
                <h3 className='text-xl font-bold mb-1'>{project.title}</h3>
                <p className='text-sm text-blue-400 mb-2'>{project.role}</p>
                <p className='text-gray-400 mb-4'>{project.description}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className='flex items-center gap-2 bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition'
                    >
                      {tech.icon}
                      {tech.name}
                    </span>
                  ))}
                </div>

                <div className='flex justify-between items-center'>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-400 hover:text-blue-300 transition-colors'
                  >
                    View Project →
                  </a>
                  <a
                    href={project.code}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-1 text-gray-400 hover:text-gray-200 transition-colors'
                  >
                    <FaGithub /> View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealComponent>
    </section>
  );
};
