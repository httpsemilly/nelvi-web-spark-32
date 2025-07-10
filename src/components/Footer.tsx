
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'Desenvolvimento Web',
    'Design Responsivo',
    'E-commerce Premium',
    'SEO & Performance',
    'Manutenção & Suporte',
    'Consultoria Digital'
  ];

  const company = [
    'Sobre Nós',
    'Nossa Equipe',
    'Portfolio',
    'Blog',
    'Carreiras',
    'Contato'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-sky-500' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-brand-purple rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-brand-blue rounded-full blur-2xl"></div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto container-padding py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Enhanced Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-8">
              <img 
                src="/lovable-uploads/3f58db80-c944-48ef-850a-c469eee02a4a.png" 
                alt="Nelvi Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <p className="text-primary-foreground/80 mb-8 leading-relaxed text-lg">
              Transformamos ideias em experiências digitais extraordinárias. 
              Sua jornada para o sucesso online começa aqui.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-primary-foreground/80">+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-primary-foreground/80">contato@nelvi.com.br</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-brand-blue/20 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-brand-blue" />
                </div>
                <span className="text-primary-foreground/80">São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-8 flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-brand-blue" />
              Serviços
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-primary-foreground/80 hover:text-brand-blue transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-8">Empresa</h3>
            <ul className="space-y-4">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-primary-foreground/80 hover:text-brand-blue transition-colors duration-200 font-medium hover:translate-x-1 transform inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Enhanced Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-8">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Receba dicas exclusivas e novidades sobre desenvolvimento web e transformação digital.
            </p>
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:border-brand-blue focus:outline-none transition-colors duration-200 placeholder:text-primary-foreground/50 backdrop-blur-sm"
              />
              <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-3 rounded-xl transition-all duration-200 font-semibold">
                Inscrever-se Gratuitamente
              </Button>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-4 mt-8">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-brand-blue hover:to-brand-purple transition-all duration-200 group border border-white/20 ${social.color}`}
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5 text-primary-foreground/80 group-hover:text-white group-hover:scale-110 transition-all duration-200" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Enhanced Divider */}
        <div className="border-t border-primary-foreground/20 pt-10">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-primary-foreground/60 text-center lg:text-left">
              © {currentYear} Nelvi. Todos os direitos reservados. Desenvolvido com ❤️ em Salvador Bahia.
            </div>
            
            <div className="flex items-center flex-wrap justify-center gap-8 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-brand-blue transition-colors duration-200 font-medium">
                Política de Privacidade
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-brand-blue transition-colors duration-200 font-medium">
                Termos de Uso
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-brand-blue transition-colors duration-200 font-medium">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Bottom Bar */}
      <div className="bg-primary/50 backdrop-blur-sm border-t border-primary-foreground/10 py-6 relative z-10">
        <div className="container mx-auto container-padding">
          <div className="text-center text-primary-foreground/60">
            <span className="font-medium">Transformação Digital • Design Excepcional • Resultados Reais</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
