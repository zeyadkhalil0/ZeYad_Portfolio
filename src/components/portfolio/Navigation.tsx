import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface NavigationProps {
  language: Language;
}

const navItems = {
  en: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ],
  ar: [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'نبذة عني' },
    { id: 'skills', label: 'المهارات' },
    { id: 'projects', label: 'المشاريع' },
    { id: 'experience', label: 'الخبرة' },
    { id: 'education', label: 'التعليم' },
    { id: 'certificates', label: 'الشهادات' },
    { id: 'contact', label: 'التواصل' }
  ]
};

export const Navigation = ({ language }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const isRTL = language === 'ar';
  const items = navItems[language];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = items.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border/50' : 'bg-transparent'
    } ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-6">

        <div className="flex items-center  h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl font-bold text-black dark:text-white hover:scale-110 transition-transform duration-300">
            ZK
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center px-40 space-x-8">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-black' 
                    : 'text-foreground/70'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
            
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 animate-slide-up">
          <div className="container mx-auto px-6 py-4 space-y-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-foreground/70 hover:bg-secondary hover:text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};