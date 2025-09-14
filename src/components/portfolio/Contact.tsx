import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Language } from "@/pages/Portfolio";

interface ContactProps {
  language: Language;
}

const content = {
  en: {
    title: "Get In Touch",
    subtitle: "Let's work together",
    form: {
      name: "Your Name",
      email: "Your Email",
      subject: "Subject",
      message: "Your Message",
      send: "Send Message",
      sending: "Sending..."
    },
    info: {
      email: "Email",
      phone: "Phone",
      location: "Location"
    },
    success: "Message sent successfully! I'll get back to you soon.",
    error: "Failed to send message. Please try again."
  },
  ar: {
    title: "تواصل معي",
    subtitle: "لنعمل معًا",
    form: {
      name: "اسمك",
      email: "بريدك الإلكتروني",
      subject: "الموضوع",
      message: "رسالتك",
      send: "إرسال الرسالة",
      sending: "جاري الإرسال..."
    },
    info: {
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      location: "الموقع"
    },
    success: "تم إرسال الرسالة بنجاح! سأتواصل معك قريباً.",
    error: "فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى."
  }
};

export const Contact = ({ language }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const t = content[language];
  const isRTL = language === 'ar';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission - in real implementation, this would send to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:connectwithzeyad@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: language === 'en' ? "Success!" : "نجح!",
        description: t.success,
      });
      
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: language === 'en' ? "Error!" : "خطأ!",
        description: t.error,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`py-20 bg-surface ${isRTL ? 'rtl' : 'ltr'}`}>
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

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-gradient border-0 hover-lift animate-slide-up">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {language === 'en' ? 'Send Message' : 'إرسال رسالة'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder={t.form.name}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder={t.form.email}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Input
                      name="subject"
                      placeholder={t.form.subject}
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder={t.form.message}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border min-h-[120px]"
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-primary-foreground glow-effect"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? t.form.sending : t.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-6 card-gradient rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.info.email}</h3>
                    <p className="text-foreground/70">connectwithzeyad@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 card-gradient rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.info.phone}</h3>
                    <p className="text-foreground/70">+20 1050076851</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-6 card-gradient rounded-xl hover-lift">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t.info.location}</h3>
                    <p className="text-foreground/70">
                      {language === 'en' ? 'Mansoura, Dakahlia, Egypt' : 'المنصورة، الدقهلية، مصر'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="p-6 card-gradient rounded-xl">
                <h3 className="font-semibold text-foreground mb-4">
                  {language === 'en' ? 'Follow Me' : 'تابعني'}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/zeyadkhalil0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/10 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/zeyadkhalill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-foreground/10 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="mailto:connectwithzeyad@gmail.com"
                    className="w-12 h-12 bg-foreground/10 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};