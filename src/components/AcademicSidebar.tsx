import { Link, useLocation } from "react-router-dom";
import profileImg from "@/assets/profile-placeholder.png";
import { Mail, Github, GraduationCap, FileDown } from "lucide-react";

const navItems = [
  { label: "About", path: "/" },
  { label: "CV", path: "/cv" },
  { label: "Publications", path: "/publications" },
  { label: "Projects", path: "/projects" },
];

const AcademicSidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-full lg:w-72 lg:min-h-screen bg-card border-b lg:border-b-0 lg:border-r border-border p-6 lg:p-8 flex flex-col items-center lg:items-start lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:overflow-y-auto">
      <div className="flex flex-col items-center lg:items-center w-full">
        <img
          src={profileImg}
          alt="Profile photo"
          className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-border"
        />
        <h1 className="font-heading text-xl font-bold text-foreground text-center">
          Your Name
        </h1>
        <p className="text-sm text-muted-foreground text-center mt-1">
          Ph.D. Candidate
        </p>
        <p className="text-sm text-muted-foreground text-center">
          Department of Computer Science
        </p>
        <p className="text-sm text-muted-foreground text-center">
          University Name
        </p>
      </div>

      <div className="flex gap-3 mt-4 justify-center w-full">
        <a href="mailto:your.email@university.edu" className="text-[#ea4335] hover:opacity-70 transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
        <a href="https://github.com/yourusername" className="text-[#24292e] hover:opacity-70 transition-colors" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <Github size={18} />
        </a>
        <a href="https://scholar.google.com/" className="text-[#4285f4] hover:opacity-70 transition-colors" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer">
          <GraduationCap size={18} />
        </a>
      </div>

      <nav className="mt-6 w-full">
        <ul className="flex flex-row lg:flex-col gap-1 justify-center lg:justify-start flex-wrap">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`block px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AcademicSidebar;
