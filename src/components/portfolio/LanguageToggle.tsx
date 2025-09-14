import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { Language } from "@/pages/Portfolio";

interface LanguageToggleProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export const LanguageToggle = ({ language, onLanguageChange }: LanguageToggleProps) => {
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    onLanguageChange(newLanguage);
    
    // Update document direction
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="glass-effect hover-lift gap-2"
    >
      <Languages className="h-4 w-4" />
      {language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};