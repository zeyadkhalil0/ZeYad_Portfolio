import { useState } from "react";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Navigation } from "@/components/portfolio/Navigation";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";
import { LanguageToggle } from "@/components/portfolio/LanguageToggle";

export type Language = 'en' | 'ar';

const Portfolio = () => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-background">
      <Navigation language={language} />
      
      {/* Fixed Controls */}
<div
  className={`fixed top-4 z-50 flex gap-2 
    ${language === "ar" ? "left-4" : "right-4"}`}
>
  <ThemeToggle />
  <LanguageToggle language={language} onLanguageChange={setLanguage} />
</div>


      {/* Main Content */}
      <main>
        <Hero language={language} />
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Certificates language={language} />
        <Contact language={language} />
      </main>
    </div>
  );
};

export default Portfolio;