import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaJava,
  FaPython,
  FaDatabase,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiMongoose,
  SiTypescript,
  SiJavascript,
  SiGitlab,
  SiExpress,
  SiPostman,
  SiVercel,
  SiTailwindcss 
} from "react-icons/si";
import { TbCloudComputing } from "react-icons/tb";
import { TbBrandCSharp } from "react-icons/tb";
import RevealComponent from "../RevealComponent";

export const About = () => {
  const skillCategories = [
    {
      title: "🖥️ Frontend",
      skills: [
        { name: "Html", icon: <FaHtml5 className="text-gray-200" /> },
        { name: "Css", icon: <FaCss3 className="text-gray-200" /> },
        { name: "Tailwind Css", icon: <SiTailwindcss className="text-gray-200" /> },

        { name: "React", icon: <FaReact className="text-sky-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
      ],
    },
    {
      title: "🧠 Backend & Frameworks",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
        {
          name: "Bun.js",
          icon: <TbCloudComputing className="text-yellow-400" />,
        }, // replacement for Bun
      ],
    },
    {
      title: "🗄️ Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-500" /> },
        {
          name: "SQL Server",
          icon: <FaDatabase className="text-purple-400" />,
        },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
        { name: "Mongoose", icon: <SiMongoose className="text-red-600" /> },
      ],
    },
    {
      title: "💻 Programming Languages",
      skills: [
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-yellow-400" />,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="text-blue-500" />,
        },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
        { name: "Java", icon: <FaJava className="text-orange-600" /> },
        
      ],
    },
    {
      title: "🔧 Version Control & Collaboration",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
        { name: "GitLab", icon: <SiGitlab className="text-orange-400" /> },
      ],
    },
    {
      title: "🧪 Testing & Debugging",
      skills: [
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        {
          name: "Thunder Client",
          icon: <FaDatabase className="text-sky-400" />,
        }, // placeholder (no official icon)
      ],
    },
    {
      title: "⚙️ DevOps & Deployment",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-sky-400" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ],
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealComponent>

      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6 text-center">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, i) => (
              <div
              key={i}
              className="rounded-xl p-6 border border-white/10 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, key) => (
                    <span
                    key={key}
                    className="flex items-center gap-2 bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {skill.icon}
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Bachelors in Computer Engineering</strong> - Cosmos College Of Management & Technology
                (2021–2025)
              </li>
            
            </ul>
          </div>
        </div>
      </div>
            </RevealComponent>
    </section>
  );
};
