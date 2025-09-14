import { Language } from "@/pages/Portfolio";

interface AboutProps {
  language: Language;
}

const content = {
  en: {
    title: "About Me",
    subtitle: "Passionate Developer & Designer",
    bio: "I'm a dedicated front-end developer with a strong foundation in modern web technologies. My journey in web development is driven by self-learning and a genuine passion for creating intuitive, beautiful user interfaces. I excel at transforming design concepts into responsive, interactive web applications using React.js, TypeScript, and modern CSS frameworks. My approach combines technical expertise with design sensibility to deliver exceptional user experiences.",
    highlights: [
      "Self-taught developer with strong problem-solving skills",
      "Passionate about clean code and best practices", 
      "Focus on responsive design and user experience",
      "Continuous learner staying updated with latest technologies"
    ]
  },
  ar: {
    title: "نبذة عني",
    subtitle: "مطور ومصمم شغوف",
    bio: "أنا مطور واجهات أمامية مخصص مع أساس قوي في تقنيات الويب الحديثة. رحلتي في تطوير الويب مدفوعة بالتعلم الذاتي والشغف الحقيقي لإنشاء واجهات مستخدم بديهية وجميلة. أتفوق في تحويل مفاهيم التصميم إلى تطبيقات ويب متجاوبة وتفاعلية باستخدام React.js و TypeScript وأطر CSS الحديثة. يجمع نهجي بين الخبرة التقنية والحس التصميمي لتقديم تجارب استخدام استثنائية.",
    highlights: [
      "مطور ذاتي التعلم مع مهارات قوية في حل المشاكل",
      "شغوف بالكود النظيف وأفضل الممارسات",
      "التركيز على التصميم المتجاوب وتجربة المستخدم",
      "متعلم مستمر يواكب أحدث التقنيات"
    ]
  }
};

export const About = ({ language }: AboutProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  return (
    <section id="about" className={`py-20 bg-surface ${isRTL ? 'rtl' : 'ltr'}`}>
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

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t.bio}
              </p>
              
              {/* Highlights */}
              <div className="space-y-4">
                {t.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 animate-slide-up"
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <p className="text-foreground/70">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center p-6 card-gradient rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-foreground/70 text-sm">
                  {language === 'en' ? 'Years Learning' : 'سنوات التعلم'}
                </div>
              </div>
              <div className="text-center p-6 card-gradient rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-foreground/70 text-sm">
                  {language === 'en' ? 'Projects Built' : 'المشاريع المنجزة'}
                </div>
              </div>
              <div className="text-center p-6 card-gradient rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-foreground/70 text-sm">
                  {language === 'en' ? 'Technologies' : 'التقنيات'}
                </div>
              </div>
              <div className="text-center p-6 card-gradient rounded-xl hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-foreground/70 text-sm">
                  {language === 'en' ? 'Certificates' : 'الشهادات'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};