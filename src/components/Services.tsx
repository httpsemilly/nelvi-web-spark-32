
import React from 'react';
import { ArrowRight, Palette, Code, Smartphone, Search, Zap, Shield, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: "Design Moderno",
      description: "Interfaces elegantes e intuitivas que convertem visitantes em clientes fiéis",
      features: ["UI/UX Profissional", "Prototipagem Avançada", "Design System"]
    },
    {
      icon: Code,
      title: "Desenvolvimento Web",
      description: "Sites profissionais com tecnologias de última geração e performance otimizada",
      features: ["React/Next.js", "TypeScript", "Arquitetura Escalável"]
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Experiências perfeitas em todos os dispositivos e tamanhos de tela",
      features: ["Progressive Web App", "Cross-platform", "Touch Optimized"]
    },
    {
      icon: Search,
      title: "SEO & Performance",
      description: "Otimização completa para mecanismos de busca e velocidade máxima",
      features: ["Google PageSpeed", "Core Web Vitals", "Schema Markup"]
    },
    {
      icon: Zap,
      title: "Automação Inteligente",
      description: "Processos automatizados para maior eficiência e produtividade do seu negócio", 
      features: ["Workflows Customizados", "Integração CRM", "Analytics Avançado"]
    },
    {
      icon: Shield,
      title: "Segurança Avançada",
      description: "Proteção robusta e conformidade com padrões internacionais de segurança",
      features: ["SSL/HTTPS", "LGPD Compliance", "Security Headers"]
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full border border-brand-blue/20 mb-6 fade-in">
            <Sparkles className="w-4 h-4 text-brand-blue mr-2" />
            <span className="text-sm font-semibold gradient-text">
              Nossos Serviços
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight slide-up">
            Soluções Completas para
            <span className="gradient-text block mt-2 pb-2">
              Seu Sucesso Digital
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed slide-up animate-delay-200">
            Oferecemos serviços especializados para transformar sua presença online 
            em uma ferramenta poderosa de crescimento e conversão.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group card-hover border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:bg-card slide-up overflow-hidden relative" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10 pt-0">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-muted-foreground text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mr-3 flex-shrink-0"></div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Card>
            );
          })}
        </div>

        <div className="text-center slide-up animate-delay-600">
          <div className="bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-3xl p-12 max-w-4xl mx-auto border border-brand-blue/20 backdrop-blur-sm">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Pronto para Transformar
                <span className="gradient-text block">Seu Negócio?</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Vamos conversar sobre como podemos ajudar você a alcançar seus objetivos digitais 
                e levar sua empresa ao próximo nível.
              </p>
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                Iniciar Projeto Agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
