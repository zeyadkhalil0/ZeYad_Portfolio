import { Award, Calendar, Building } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface CertificatesProps {
  language: Language;
}

const content = {
  en: {
    title: "Certificates & Achievements",
    subtitle: "Continuous learning journey",
    certificates: [
      {
        title: "General English Level Five",
        issuer: "Mansoura University Digital Training Center",
        date: "2024",
        grade: "Excellent",
        description: "Advanced English language proficiency certification with excellent grade.",
        icon: "🏆"
      },
      {
        title: "JavaScript Certificate",
        issuer: "MaharaTech Platform (ITI)",
        date: "2024",
        grade: "Completed",
        description: "Comprehensive JavaScript programming course covering ES6+, DOM manipulation, and modern JavaScript concepts.",
        icon: "⚡"
      },
      {
        title: "TypeScript Certificate",
        issuer: "MaharaTech Platform (ITI)",
        date: "2024", 
        grade: "Completed",
        description: "Advanced TypeScript certification covering type systems, interfaces, generics, and modern TypeScript features.",
        icon: "📝"
      }
    ]
  },
  ar: {
    title: "الشهادات والإنجازات",
    subtitle: "رحلة التعلم المستمر",
    certificates: [
      {
        title: "اللغة الإنجليزية العامة المستوى الخامس",
        issuer: "مركز التدريب الرقمي - جامعة المنصورة",
        date: "2024",
        grade: "ممتاز",
        description: "شهادة إتقان اللغة الإنجليزية المتقدمة بدرجة ممتاز.",
        icon: "🏆"
      },
      {
        title: "شهادة JavaScript",
        issuer: "منصة مهارة تك (ITI)",
        date: "2024",
        grade: "مكتمل",
        description: "دورة شاملة في برمجة JavaScript تغطي ES6+ ومعالجة DOM ومفاهيم JavaScript الحديثة.",
        icon: "⚡"
      },
      {
        title: "شهادة TypeScript",
        issuer: "منصة مهارة تك (ITI)",
        date: "2024",
        grade: "مكتمل", 
        description: "شهادة TypeScript متقدمة تغطي أنظمة الأنواع والواجهات والعموميات وميزات TypeScript الحديثة.",
        icon: "📝"
      }
    ]
  }
};

export const Certificates = ({ language }: CertificatesProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="certificates" className={`py-20 bg-background ${isRTL ? 'rtl' : 'ltr'}`}>
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

          {/* Certificates Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.certificates.map((certificate, index) => (
              <div
                key={index}
                className="card-gradient p-6 rounded-xl hover-lift animate-slide-up border border-border/50"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Certificate Icon */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-2xl mb-4 glow-effect">
                    {certificate.icon}
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-success/10 text-success text-sm rounded-full border border-success/20">
                    <Award className="w-4 h-4" />
                    {certificate.grade}
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold text-foreground leading-tight">
                    {certificate.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-foreground/70">
                    <div className="flex items-center justify-center gap-2">
                      <Building className="w-4 h-4" />
                      <span>{certificate.issuer}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{certificate.date}</span>
                    </div>
                  </div>

                  <p className="text-foreground/60 text-sm leading-relaxed">
                    {certificate.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-primary/5 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 bg-accent/5 rounded-full"></div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            <div className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">3+</div>
              <div className="text-foreground/70 text-sm">
                {language === 'en' ? 'Certificates' : 'الشهادات'}
              </div>
            </div>
            <div className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <div className="text-foreground/70 text-sm">
                {language === 'en' ? 'Platforms' : 'المنصات'}
              </div>
            </div>
            <div className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-foreground/70 text-sm">
                {language === 'en' ? 'Completion Rate' : 'معدل الإتمام'}
              </div>
            </div>
            <div className="text-center p-6 card-gradient rounded-xl hover-lift">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-foreground/70 text-sm">
                {language === 'en' ? 'Latest Year' : 'أحدث سنة'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};