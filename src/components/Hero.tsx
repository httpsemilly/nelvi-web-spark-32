
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Play, Star, Users, Award, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import personHero1 from '@/assets/person-hero-1.jpg';
import personHero2 from '@/assets/person-hero-2.jpg';
import personHero3 from '@/assets/person-hero-3.jpg';

const Hero = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      id: 1,
      background: personHero1,
      title: "Soluções Digitais que Transformam",
      subtitle: "Desenvolvemos experiências digitais excepcionais que impulsionam seu negócio para o próximo nível.",
      buttonText: "Ver Nossos Projetos",
      buttonAction: () => {
        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 2,
      background: personHero2,
      title: "Design Moderno & Inovador",
      subtitle: "Criamos interfaces elegantes e funcionais com as tecnologias mais avançadas do mercado.",
      buttonText: "Fale Conosco",
      buttonAction: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: 3,
      background: personHero3,
      title: "Resultados Extraordinários",
      subtitle: "Sua presença digital de alto impacto começa aqui. Transforme visitantes em clientes.",
      buttonText: "Conhecer Serviços",
      buttonAction: () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  const stats = [
    { icon: Award, number: "200+", label: "Projetos Entregues" },
    { icon: Users, number: "98%", label: "Clientes Satisfeitos" },
    { icon: Star, number: "5+", label: "Anos de Experiência" }
  ];

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollToNext = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background">
      <Carousel 
        className="w-full h-screen"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 8000,
            stopOnInteraction: false,
            stopOnFocusIn: false
          })
        ]}
        opts={{
          loop: true,
          align: "start"
        }}
      >
        <CarouselContent className="h-screen">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="h-screen p-0">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.background})` }}
                />
                
                {/* Enhanced Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/50" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full pt-20 pb-40">
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                      <div className="flex items-center justify-center">
                        {/* Centered Content */}
                        <div className="text-center max-w-4xl">
                          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8 fade-in">
                            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 sm:mr-3" />
                            <span className="text-xs sm:text-sm font-semibold text-white">
                              Nelvi - Transformação Digital
                            </span>
                          </div>
                          
                          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight slide-in-left">
                            {slide.title}
                          </h1>
                          
                          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed slide-in-left animate-delay-200">
                            {slide.subtitle}
                          </p>
                          
                          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 slide-in-left animate-delay-400 justify-center">
                            <Button 
                              onClick={slide.buttonAction}
                              size="lg"
                              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                              {slide.buttonText}
                              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                            </Button>
                            
                            <Button 
                              variant="outline"
                              size="lg"
                              className="bg-white text-black border-2 border-white hover:bg-white/90 hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                            >
                              <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
                              Assistir Demo
                            </Button>
                          </div>
                          
                          {/* Stats - Centered */}
                          <div className="grid grid-cols-3 gap-4 sm:gap-8 slide-up animate-delay-600 max-w-2xl mx-auto">
                            {stats.map((stat, idx) => {
                              const IconComponent = stat.icon;
                              return (
                                <div key={idx} className="text-center group">
                                  <div className="flex items-center justify-center mb-2 sm:mb-3">
                                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-2 sm:mr-3 group-hover:bg-white/20 transition-colors duration-300">
                                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                                    </div>
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                                      {stat.number}
                                    </div>
                                  </div>
                                  <div className="text-sm sm:text-base text-white/80 font-medium">
                                    {stat.label}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Dots - Better positioned to not overlap content */}
        <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                index === current 
                  ? 'bg-white w-8 sm:w-12' 
                  : 'bg-white/50 w-2 sm:w-3 hover:bg-white/70'
              }`}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      </Carousel>
      
      {/* Scroll Indicator - Better positioned to not overlap content */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={scrollToNext}
          className="text-white/80 hover:text-white transition-colors duration-300 flex flex-col items-center animate-bounce-gentle group"
        >
          <span className="text-xs sm:text-sm mb-2 sm:mb-3 font-medium opacity-90 group-hover:opacity-100 transition-opacity">
            Descobrir mais
          </span>
          <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
            <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
