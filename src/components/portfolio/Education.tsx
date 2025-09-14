import { GraduationCap, Calendar, BookOpen } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface EducationProps {
  language: Language;
}

const content = {
  en: {
    title: "Education",
    subtitle: "Academic background",
    education: {
      degree: "Bachelor of Information Systems (BIS)",
      institution: "Misr Higher Institute for Commerce & Computers",
      period: "2022 – 2026",
      status: "Current Student",
      description: "Pursuing a Bachelor's degree in Information Systems with a self-studied focus on Web Development and Graphic Design. Building a strong foundation in computer science fundamentals while specializing in modern web technologies and design principles.",
      focus: [
        "Web Development (Self-Studied)",
        "Graphic Design (Self-Studied)", 
        "Information Systems",
        "Database Management",
        "Software Engineering Principles"
      ]
    }
  },
  ar: {
    title: "التعليم",
    subtitle: "الخلفية الأكاديمية",
    education: {
      degree: "بكالوريوس نظم المعلومات (BIS)",
      institution: "معهد مصر العالي للتجارة والحاسبات",
      period: "2022 – 2026",
      status: "طالب حالي",
      description: "أسعى للحصول على درجة البكالوريوس في نظم المعلومات مع التركيز الذاتي على تطوير الويب والتصميم الجرافيكي. بناء أساس قوي في أساسيات علوم الكمبيوتر مع التخصص في تقنيات الويب الحديثة ومبادئ التصميم.",
      focus: [
        "تطوير الويب (دراسة ذاتية)",
        "التصميم الجرافيكي (دراسة ذاتية)",
        "نظم المعلومات",
        "إدارة قواعد البيانات",
        "مبادئ هندسة البرمجيات"
      ]
    }
  }
};

export const Education = ({ language }: EducationProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="education" className={`py-20 bg-surface ${isRTL ? 'rtl' : 'ltr'}`}>
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

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent"></div>
            
            {/* Education Item */}
            <div className="relative flex items-start gap-8 animate-slide-up">
              {/* Timeline Dot */}
              <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 glow-effect">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-12">
                <div className="card-gradient p-8 rounded-xl hover-lift">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {t.education.degree}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-4">
                      {t.education.institution}
                    </h4>
                    
                    {/* Meta Info */}
                    <div className="flex flex-wrap gap-4 text-sm text-foreground/70 mb-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {t.education.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        {t.education.status}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">
                    {t.education.description}
                  </p>

                  {/* Focus Areas */}
                  <div>
                    <h5 className="font-semibold text-foreground mb-4">
                      {language === 'en' ? 'Areas of Focus:' : 'مجالات التركيز:'}
                    </h5>
                    <div className="grid md:grid-cols-2 gap-3">
                      {t.education.focus.map((area, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-3 text-foreground/70"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
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