import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'João Silva',
      company: 'Tech Solutions',
      position: 'CEO',
      text: 'A Nelvi transformou completamente nossa presença digital. O site ficou incrível e nossa conversão aumentou 300%! Profissionais excepcionais.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Maria Santos',
      company: 'Fashion Store',
      position: 'Fundadora',
      text: 'Profissionais extremamente competentes. Entregaram exatamente o que prometeram, no prazo e com qualidade excepcional. Recomendo totalmente!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?w=100&h=100&fit=crop&crop=face',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Pedro Costa',
      company: 'Consultoria ABC',
      position: 'Diretor',
      text: 'O suporte é fantástico! Sempre disponíveis para ajudar e resolver qualquer questão. O resultado superou todas as expectativas.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const handleTalkToSpecialist = () => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }

    if ((window as any).fillContactMessage) {
      (window as any).fillContactMessage('Gostaria de começar um projeto com vocês.');
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          const messageField = document.getElementById('message') as HTMLTextAreaElement;
          if (messageField) {
            messageField.value = 'Gostaria de começar um projeto com vocês.';
            messageField.focus();
          }
        }, 500);
      }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Depoimentos
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Veja o que nossos
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent block mt-2 pb-2">
              clientes dizem
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformamos ideias em resultados reais. Veja o que nossos clientes 
            falam sobre nossa parceria e os resultados extraordinários alcançados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 px-8">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="group hover:shadow-2xl border-0 shadow-lg bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-300 overflow-hidden relative h-full flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardContent className="p-6 relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <Quote className="h-8 w-8 text-blue-500/30 group-hover:text-purple-500/50 transition-colors duration-300" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6 leading-relaxed font-medium text-base">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center space-x-3 border-t border-border pt-4 mt-auto">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center overflow-hidden shadow-lg flex-shrink-0`}>
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-foreground text-base group-hover:text-blue-500 transition-colors duration-300">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-muted-foreground font-medium">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-blue-500 font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${testimonial.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl p-12 backdrop-blur-sm border border-blue-500/20 max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Pronto para ser o próximo
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent block">caso de sucesso?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se aos nossos clientes satisfeitos e transforme sua presença digital hoje mesmo. 
              Vamos criar algo extraordinário juntos!
            </p>
            <Button 
              onClick={handleTalkToSpecialist}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group"
            >
              Começar Meu Projeto
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;