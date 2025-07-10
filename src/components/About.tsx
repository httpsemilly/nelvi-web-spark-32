
import React, { useState } from 'react';
import { ArrowRight, Star, Users, Zap, Code, Palette, Cpu, Sparkles, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import aboutCoding from '@/assets/about-coding.jpg';
import aboutTeam from '@/assets/about-team.jpg';
import aboutDesign from '@/assets/about-design.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState("design");

  const stats = [{
    icon: Award,
    number: "200+",
    label: "Projetos Entregues",
    color: "from-green-500 to-emerald-600"
  }, {
    icon: Users,
    number: "98%",
    label: "Clientes Satisfeitos",
    color: "from-blue-500 to-cyan-600"
  }, {
    icon: Target,
    number: "5+",
    label: "Anos de Experiência",
    color: "from-purple-500 to-violet-600"
  }];

  const tabContent = {
    design: {
      image: aboutDesign,
      title: "Design Excepcional",
      description: "Cada projeto é desenvolvido especialmente para o seu negócio, com uma identidade visual única que reflete seus valores e objetivos. Nossa equipe de designers cria experiências digitais memoráveis, funcionais e que convertem visitantes em clientes.",
      icon: Palette,
      features: ["Interface Intuitiva", "Experiência do Usuário", "Design System", "Prototipagem"]
    },
    technology: {
      image: aboutCoding,
      title: "Tecnologia de Ponta",
      description: "Utilizamos as mais modernas tecnologias do mercado para garantir sites rápidos, seguros e escaláveis. Nosso código é limpo, otimizado e segue as melhores práticas de desenvolvimento para garantir performance e manutenibilidade.",
      icon: Code,
      features: ["React/Next.js", "TypeScript", "Cloud Computing", "API Integration"]
    },
    team: {
      image: aboutTeam,
      title: "Equipe Especializada",
      description: "Profissionais experientes e dedicados ao seu sucesso. Nossa equipe multidisciplinar trabalha em conjunto para entregar resultados excepcionais que superam as expectativas e geram valor real para o seu negócio.",
      icon: Users,
      features: ["Desenvolvedores Sênior", "Designers UX/UI", "Gestores de Projeto", "Suporte Especializado"]
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full border border-brand-blue/20 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue mr-2 sm:mr-3" />
            <span className="text-xs sm:text-sm font-semibold text-brand-blue">
              Sobre a Nelvi
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
            Transformamos ideias em
            <span className="gradient-text block mt-1 sm:mt-2">
              realidade digital
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Criamos sites que não apenas impressionam visualmente, mas também 
            geram resultados reais e mensuráveis para o seu negócio.
          </p>
        </div>

        {/* Main Content Layout - Enhanced Responsiveness */}
        <div className="max-w-7xl mx-auto mb-16 sm:mb-20 lg:mb-24">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Enhanced Stats */}
            <div className="space-y-8 sm:space-y-12">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">
                  Nossos Resultados
                </h3>
              </div>
              
              <div className="grid gap-4 sm:gap-6 lg:gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={index} className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-muted/20 rounded-2xl hover:bg-muted/30 transition-all duration-300 group">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1">
                          {stat.number}
                        </div>
                        <div className="text-sm sm:text-base text-muted-foreground font-medium">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Enhanced Tabs Content */}
            <div className="space-y-8 sm:space-y-10">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                {/* Enhanced Tab Navigation */}
                <TabsList className="grid w-full grid-cols-3 h-auto p-1 sm:p-2 bg-muted/50 rounded-2xl mb-8 sm:mb-10">
                  <TabsTrigger value="design" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-blue data-[state=active]:to-brand-purple data-[state=active]:text-white px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-xl">
                    Design
                  </TabsTrigger>
                  <TabsTrigger value="technology" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-blue data-[state=active]:to-brand-purple data-[state=active]:text-white px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-xl">
                    Tecnologia
                  </TabsTrigger>
                  <TabsTrigger value="team" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-brand-blue data-[state=active]:to-brand-purple data-[state=active]:text-white px-2 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-semibold transition-all duration-300 rounded-xl">
                    Equipe
                  </TabsTrigger>
                </TabsList>

                {/* Enhanced Tab Content */}
                {Object.entries(tabContent).map(([key, content]) => (
                  <TabsContent key={key} value={key} className="space-y-6 sm:space-y-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-brand-blue to-brand-purple rounded-xl flex items-center justify-center shadow-lg">
                        <content.icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      </div>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                        {content.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                      {content.description}
                    </p>
                    
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
                      {content.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center p-2 sm:p-3 bg-muted/30 rounded-lg hover:bg-muted/40 transition-colors duration-200">
                          <div className="w-2 h-2 bg-gradient-to-r from-brand-blue to-brand-purple rounded-full mr-2 sm:mr-3"></div>
                          <span className="font-medium text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
