import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Language } from "@/pages/Portfolio";
import heroimg from "@/assets/me-2.jpeg"

interface HeroProps {
  language: Language;
}

const content = {
  en: {
    name: "Zeyad Muhammad Khalil",
    title: "Front-end Developer",
    subtitle: "React.js Developer & UI/UX Enthusiast",
    description: "Passionate about creating beautiful, responsive web applications with modern technologies and clean code.",
    downloadCV: "Download CV",
    contactMe: "Contact Me",
    location: "Mansoura, Dakahlia, Egypt"
  },
  ar: {
    name: "زياد محمد خليل",
    title: "مطور واجهات أمامية",
    subtitle: "مطور React.js و مهتم بتصميم تجربة المستخدم",
    description: "شغوف بإنشاء تطبيقات ويب جميلة ومتجاوبة باستخدام التقنيات الحديثة والكود النظيف.",
    downloadCV: "تحميل السيرة الذاتية",
    contactMe: "تواصل معي",
    location: "المنصورة، الدقهلية، مصر"
  }
};

export const Hero = ({ language }: HeroProps) => {
  const t = content[language];
  const isRTL = language === 'ar';

  const handleDownloadCV = () => {
    // Create a link to download CV
    const link = document.createElement('a');
    link.href = '/cv.pdf'; // This would be the actual CV file
    link.download = 'Zeyad_Muhammad_Khalil_CV.pdf';
    link.click();
  };

  return (
    <section 
      id="home" 
      className={`min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden ${isRTL ? 'rtl' : 'ltr'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Profile Image Placeholder */}
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-slide-up">
            <div className="w-full h-full rounded-full bg-red-500 flex items-center justify-center text-4xl font-bold text-gradient">
              <img src={heroimg} alt="" className="w-full h-full rounded-full bg-red-500 flex items-center justify-center text-4xl font-bold text-gradient"/>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-responsive-xl font-bold text-gradient animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {t.name}
            </h1>
            <h2 className="text-responsive-lg font-semibold text-foreground/90 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              {t.title}
            </h2>
            <p className="text-responsive-md text-primary font-medium animate-slide-up" style={{ animationDelay: '0.6s' }}>
              {t.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.8s' }}>
            {t.description}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-foreground/70 animate-slide-up" style={{ animationDelay: '1s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              connectwithzeyad@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +20 1050076851
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3 rounded-full hover-lift glow-effect"
              onClick={handleDownloadCV}
            >
              <Download className="w-5 h-5 mr-2" />
              {t.downloadCV}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-full hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t.contactMe}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up" style={{ animationDelay: '1.4s' }}>
            <a 
              href="https://github.com/zeyadkhalil0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 hover-lift glass-effect"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/zeyadkhalill" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 hover-lift glass-effect"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:connectwithzeyad@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary text-foreground hover:text-primary-foreground transition-all duration-300 hover-lift glass-effect"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-foreground/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};