import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface ProjectsProps {
  language: Language;
}

const content = {
  en: {
    title: "My Projects",
    subtitle: "Things I've built",
    filters: {
      all: "All",
      javascript: "JavaScript",
      react: "React",
      csharp: "C#"
    },
    viewProject: "View Project",
    sourceCode: "Source Code"
  },
  ar: {
    title: "مشاريعي",
    subtitle: "الأشياء التي بنيتها",
    filters: {
      all: "الكل",
      javascript: "JavaScript",
      react: "React", 
      csharp: "C#"
    },
    viewProject: "عرض المشروع",
    sourceCode: "الكود المصدري"
  }
};

const projects = [
  {
    id: 1,
    title: "Memory Blocks Game",
    description: {
      en: "Responsive interactive card-matching game with timer, dark mode, difficulty levels, win/loss tracking.",
      ar: "لعبة تفاعلية متجاوبة لمطابقة البطاقات مع مؤقت، وضع داكن، مستويات صعوبة، وتتبع الفوز/الخسارة."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    link: "https://memory-blocks.vercel.app",
    github: "#",
    image: "🎮"
  },
  {
    id: 2,
    title: "ZeYad-World",
    description: {
      en: "Responsive minimalistic website with dark mode support and modern design.",
      ar: "موقع ويب بسيط ومتجاوب مع دعم الوضع الداكن والتصميم الحديث."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    link: "https://zeyadworld.vercel.app",
    github: "#",
    image: "🌍"
  },
  {
    id: 3,
    title: "World-Of-Watches",
    description: {
      en: "Modern responsive showcase website for watches with elegant design and smooth animations.",
      ar: "موقع عرض حديث ومتجاوب للساعات مع تصميم أنيق ورسوم متحركة سلسة."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    link: "https://world-of-watches.vercel.app",
    github: "#",
    image: "⌚"
  },
  {
    id: 4,
    title: "Flower Shop Website",
    description: {
      en: "E-commerce responsive UI for flower shop with modern design and user-friendly interface.",
      ar: "واجهة مستخدم متجاوبة للتجارة الإلكترونية لمحل الزهور مع تصميم حديث وواجهة سهلة الاستخدام."
    },
    technologies: ["HTML", "CSS", "JavaScript"],
    category: "javascript",
    link: "#",
    github: "#",
    image: "🌸"
  },
  {
    id: 5,
    title: "Windows Forms App",
    description: {
      en: "Desktop application for user management with SQL Server to MySQL database integration.",
      ar: "تطبيق سطح مكتب لإدارة المستخدمين مع تكامل قاعدة بيانات SQL Server إلى MySQL."
    },
    technologies: ["C#", "SQL"],
    category: "csharp",
    link: "#",
    github: "#",
    image: "🖥️"
  }
];

export const Projects = ({ language }: ProjectsProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const t = content[language];
  const isRTL = language === 'ar';

  const filteredProjects = projects.filter(project => 
    activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" className={`py-20 bg-surface ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-gradient mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-primary font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
            {Object.entries(t.filters).map(([key, label]) => (
              <Button
                key={key}
                variant={activeFilter === key ? "default" : "outline"}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === key 
                    ? "bg-primary text-primary-foreground glow-effect" 
                    : "hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="card-gradient hover-lift border-0 overflow-hidden animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-6xl">
                  {project.image}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description[language]}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2">
                  {project.link !== "#" && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      {t.viewProject}
                    </Button>
                  )}
                  {project.github !== "#" && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      {t.sourceCode}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};