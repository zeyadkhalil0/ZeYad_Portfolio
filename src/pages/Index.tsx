import Portfolio from "./Portfolio";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set document metadata for SEO
    document.title = "Zeyad Muhammad Khalil - Front-end Developer | React.js Developer";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional portfolio of Zeyad Muhammad Khalil - Front-end Developer specializing in React.js, TypeScript, and modern web technologies. View my projects, skills, and experience.');
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Zeyad Muhammad Khalil",
      "jobTitle": "Front-end Developer",
      "description": "React.js Developer & UI/UX Enthusiast",
      "url": window.location.href,
      "sameAs": [
        "https://linkedin.com/in/zeyadkhalill",
        "https://github.com/zeyadkhalil0"
      ],
      "email": "connectwithzeyad@gmail.com",
      "telephone": "+20 1050076851",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mansoura",
        "addressRegion": "Dakahlia",
        "addressCountry": "Egypt"
      },
      "knowsAbout": ["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Git", "GitHub", "C++"],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Misr Higher Institute for Commerce & Computers"
      }
    };

    // Add structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const existingScript = document.querySelector('script[type="application/ld+json"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return <Portfolio />;
};

export default Index;
