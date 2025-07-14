import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Play, Star, Users, Award, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
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
      subtitle: "Desenvolvemos experiências digitais que impulsionam seu negócio para o próximo nível.",
      buttonText: "Nossos Projetos",
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
      buttonText: "Nossos Serviços",
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

  const goToPrevious = () => {
    api?.scrollPrev();
  };

  const goToNext = () => {
    api?.scrollNext();
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
              <div className="relative lg:h-full sm:h-[95%] w-full">
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
                
                {/* Content - Centered */}
                <div className="relative z-10 flex items-center justify-center h-full">
                  <div className="container mx-auto px-5 sm:px-6 lg:px-12">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 sm:mb-8 fade-in">
                        <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 sm:mr-3" />
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          Nelvi - Transformação Digital
                        </span>
                      </div>
                      
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 sm:mb-8 leading-none slide-in-left">
                        {slide.title}
                      </h1>
                      
                      <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 leading-relaxed slide-in-left animate-delay-200">
                        {slide.subtitle}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 sm:mb-12 slide-in-left animate-delay-400 justify-center">
                        <Button 
                          onClick={slide.buttonAction}
                          className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-6 sm:px-8 !py-7 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl border border-white/20 hover:border-white/30"
                        >
                          {slide.buttonText}
                          <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6" />
                        </Button>
                        
                        <Button 
                          variant="outline"
                          className="bg-white/10 backdrop-blur-md border border-white/50 text-white hover:bg-white/20 hover:text-white hover:border-white/30 px-6 sm:px-8 !py-7 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          <Play className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                          Assistir Demo
                        </Button>
                      </div>
                      
                      {/* Stats - Centered */}
                      <div className="flex justify-center gap-4 sm:gap-8 slide-up animate-delay-600">
                        {stats.map((stat, idx) => {
                          const IconComponent = stat.icon;
                          return (
                            <div key={idx} className="text-center group">
                              <div className="flex items-center justify-center mb-1 sm:mb-2">
                                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center mr-1 sm:mr-2 group-hover:bg-white/20 transition-colors duration-300">
                                  <IconComponent className="h-2 w-2 sm:h-3 sm:w-3 text-blue-400" />
                                </div>
                                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                                  {stat.number}
                                </div>
                              </div>
                              <div className="text-xs sm:text-sm text-white/80 font-medium">
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
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Enhanced Navigation Dots */}
        <div className="absolute lg:bottom-8 sm:bottom-40 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
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
    </section>
  );
};

export default Hero;