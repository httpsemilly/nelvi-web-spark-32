import React from 'react';
import { Sparkles, BarChart3, Users, Clock, Phone } from 'lucide-react';
const Hero = () => {
  const stats = [{
    icon: BarChart3,
    title: "200+",
    description: "projetos entregues"
  }, {
    icon: Users,
    title: "98%",
    description: "clientes satisfeitos"
  }, {
    icon: Clock,
    title: "5+",
    description: "anos de experiência"
  }, {
    icon: Phone,
    title: "Fale Conosco",
    description: "Solicite um orçamento",
    isButton: true,
    action: () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }];
  return <section id="hero" className="relative min-h-screen bg-gradient-to-br from-background to-secondary md:bg-gradient-to-br md:from-background md:to-secondary overflow-hidden" style={{
    background: window.innerWidth < 768 ? 'linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(217 91% 95%) 100%)' : undefined
  }}>
      
      {/* Mobile Background Circles */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-8 w-24 h-24 bg-brand-blue/10 rounded-full animate-float"></div>
        <div className="absolute top-32 left-12 w-16 h-16 bg-brand-purple/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-20 h-20 bg-brand-blue/15 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-20 left-8 w-12 h-12 bg-brand-purple/20 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-brand-blue/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-brand-purple/10 rounded-full animate-bounce-gentle"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
            
            {/* Left Side - Content */}
            <div className="space-y-6 sm:space-y-8 lg:space-y-12 fade-in">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-border shadow-sm">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-muted-foreground">
                    Nelvi - Transformação Digital
                  </span>
                </div>
                
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                  Soluções Digitais que Transformam
                </h1>
                
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  Desenvolvemos experiências digitais excepcionais que impulsionam seu negócio para o próximo nível.
                </p>
              </div>

              {/* Stats Grid - Responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 slide-up animate-delay-200">
                {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return <div key={index} className={`p-4 sm:p-5 lg:p-6 rounded-xl card-hover ${stat.isButton ? 'bg-gradient-to-r from-brand-blue to-brand-purple text-primary-foreground cursor-pointer hover:shadow-xl' : 'bg-card shadow-sm border border-border hover:border-brand-blue/30'}`} onClick={stat.isButton ? stat.action : undefined}>
                      <div className="flex flex-col items-start space-y-2">
                        <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.isButton ? 'text-primary-foreground' : 'text-brand-blue'}`} />
                        <h3 className={`font-bold text-base sm:text-lg lg:text-xl ${stat.isButton ? 'text-primary-foreground' : 'text-foreground'}`}>
                          {stat.title}
                        </h3>
                        <p className={`text-xs sm:text-sm ${stat.isButton ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                          {stat.description}
                        </p>
                      </div>
                    </div>;
              })}
              </div>

              {/* CTA Section */}
              
            </div>

            {/* Right Side - Circular Design - Hidden on mobile, visible on lg+ */}
            <div className="relative hidden lg:flex justify-center lg:justify-end order-first lg:order-last slide-in-right animate-delay-600">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]">
                {/* Main Circle with Brand Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue via-brand-accent to-brand-purple shadow-2xl animate-pulse-glow">
                  {/* Inner circle creating the oval effect */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-br from-brand-blue to-brand-purple rounded-full opacity-80"></div>
                  
                  {/* Bottom darker section */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-purple/80 via-brand-purple/60 to-transparent rounded-b-full"></div>
                </div>
                
                {/* Floating elements - Responsive */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-brand-blue/40 rounded-full animate-bounce-gentle"></div>
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 lg:-bottom-8 lg:-left-8 w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-brand-purple/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-3 sm:-right-4 lg:-right-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-card/20 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements - Hidden on mobile */}
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-brand-blue/10 rounded-full opacity-30 animate-float hidden sm:block"></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-12 h-12 sm:w-18 sm:h-18 lg:w-24 lg:h-24 bg-brand-purple/10 rounded-full opacity-40 animate-pulse hidden sm:block"></div>
    </section>;
};
export default Hero;