import { Language } from "@/pages/Portfolio";

interface SkillsProps {
  language: Language;
}

const content = {
  en: {
    title: "Technical Skills",
    subtitle: "Technologies I work with",
    categories: {
      frontend: "Frontend Development",
      styling: "Styling & Design", 
      tools: "Tools & Version Control",
      programming: "Programming Languages"
    }
  },
  ar: {
    title: "المهارات التقنية",
    subtitle: "التقنيات التي أعمل بها",
    categories: {
      frontend: "تطوير الواجهات الأمامية",
      styling: "التصميم والأنماط",
      tools: "الأدوات وإدارة الإصدارات",
      programming: "لغات البرمجة"
    }
  }
};

const skills = {
  frontend: [
    { name: "HTML5", level: 95, icon: "🌐" },
    { name: "CSS3", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 85, icon: "⚡" },
    { name: "TypeScript", level: 80, icon: "📝" },
    { name: "React.js", level: 85, icon: "⚛️" }
  ],
  styling: [
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "Bootstrap", level: 85, icon: "🅱️" },
    { name: "Responsive Design", level: 95, icon: "📱" }
  ],
  tools: [
    { name: "Git & GitHub", level: 85, icon: "🔧" },
    { name: "VS Code", level: 95, icon: "💻" }
  ],
  programming: [
    { name: "C++", level: 75, icon: "⚙️" }
  ]
};

export const Skills = ({ language }: SkillsProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="skills" className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
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

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Frontend Development */}
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                {t.categories.frontend}
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="p-4 card-gradient rounded-lg hover-lift"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              {/* Styling & Design */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {t.categories.styling}
                </h3>
                <div className="space-y-4">
                  {skills.styling.map((skill, index) => (
                    <div 
                      key={skill.name}
                      className="p-4 card-gradient rounded-lg hover-lift"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {t.categories.tools}
                </h3>
                <div className="space-y-4">
                  {skills.tools.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-4 card-gradient rounded-lg hover-lift"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Programming Languages */}
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  {t.categories.programming}
                </h3>
                <div className="space-y-4">
                  {skills.programming.map((skill) => (
                    <div 
                      key={skill.name}
                      className="p-4 card-gradient rounded-lg hover-lift"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-medium text-foreground">{skill.name}</span>
                        </div>
                        <span className="text-sm text-foreground/70">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
