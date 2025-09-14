import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface ExperienceProps {
  language: Language;
}

const content = {
  en: {
    title: "Work Experience",
    subtitle: "My professional journey",
    experience: {
      title: "Front-end Developer Intern (React.js)",
      company: "Digital Egypt Pioneers Initiative (DEPI)",
      period: "Jul 2024 – Present", 
      location: "El Mansoura",
      description: "Working as a React.js developer intern in the MCIT initiative to empower youth. Focused on developing responsive web applications, learning UI/UX fundamentals, and participating in collaborative projects to build modern web solutions.",
      responsibilities: [
        "React.js development and component architecture",
        "UI/UX fundamentals and responsive design implementation", 
        "Building responsive applications with modern technologies",
        "Collaboration in MCIT initiative for youth empowerment",
        "Learning best practices in front-end development"
      ]
    }
  },
  ar: {
    title: "الخبرة العملية",
    subtitle: "رحلتي المهنية",
    experience: {
      title: "متدرب مطور واجهات أمامية (React.js)",
      company: "مبادرة رواد مصر الرقمية (DEPI)",
      period: "يوليو 2024 – حتى الآن",
      location: "المنصورة",
      description: "أعمل كمتدرب مطور React.js في مبادرة وزارة الاتصالات لتمكين الشباب. أركز على تطوير تطبيقات ويب متجاوبة، وتعلم أساسيات UI/UX، والمشاركة في مشاريع تعاونية لبناء حلول ويب حديثة.",
      responsibilities: [
        "تطوير React.js وهندسة المكونات",
        "أساسيات UI/UX وتنفيذ التصميم المتجاوب",
        "بناء تطبيقات متجاوبة بالتقنيات الحديثة",
        "التعاون في مبادرة وزارة الاتصالات لتمكين الشباب",
        "تعلم أفضل الممارسات في تطوير الواجهات الأمامية"
      ]
    }
  }
};

export const Experience = ({ language }: ExperienceProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="experience" className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-responsive-lg font-bold text-gradient mb-4">
              {t.title}
            </h2>
            <p className="text-xl text-primary font-medium">
              {t.subtitle}
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {/* Experience Item */}
            <div className="relative flex items-start gap-8 animate-slide-up">
              {/* Timeline Dot */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-12">
                <div className="card-gradient p-8 rounded-xl hover-lift">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t.experience.title}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">
                      {t.experience.company}
                    </h4>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {t.experience.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {t.experience.location}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {t.experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-4">
                      {language === 'en' ? 'Key Responsibilities:' : 'المسؤوليات الرئيسية:'}
                    </h5>
                    <ul className="space-y-2">
                      {t.experience.responsibilities.map((responsibility, index) => (
                        <li 
                          key={index}
                          className="flex items-start gap-3 text-foreground/70"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};