import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  const stats = [
    {
      icon: "📊",
      title: "200+",
      description: "projetos entregues"
    },
    {
      icon: "😊", 
      title: "98%",
      description: "clientes satisfeitos"
    },
    {
      icon: "⏳",
      title: "5+",
      description: "anos de experiência"
    },
    {
      icon: "📞",
      title: "Fale Conosco",
      description: "Solicite um orçamento",
      isButton: true,
      action: () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Side - Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-sm">
                  <Sparkles className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">
                    Nelvi - Transformação Digital
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                  Soluções Digitais que Transformam
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Desenvolvemos experiências digitais excepcionais que impulsionam seu negócio para o próximo nível.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl ${stat.isButton 
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white cursor-pointer hover:from-blue-600 hover:to-purple-700 transition-all' 
                      : 'bg-white shadow-sm border border-gray-100'}`}
                    onClick={stat.isButton ? stat.action : undefined}
                  >
                    <div className="flex flex-col items-start">
                      <span className="text-2xl mb-2">{stat.icon}</span>
                      <h3 className="font-bold text-lg sm:text-xl">{stat.title}</h3>
                      <p className={`text-sm ${stat.isButton ? 'text-white/90' : 'text-gray-600'}`}>
                        {stat.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="space-y-4 pt-4">
                <button 
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-lg font-semibold"
                  onClick={() => {
                    const servicesSection = document.getElementById('services');
                    if (servicesSection) {
                      servicesSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Nossos Serviços
                </button>
                <p className="text-sm text-gray-500 font-medium">
                  Ajudamos seus processos a focarem no que realmente importa.
                </p>
              </div>
            </div>

            {/* Right Side - Circular Design */}
            <div className="relative flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]">
                {/* Main Circle with Gradient */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600 shadow-2xl">
                  {/* Inner circle creating the oval effect */}
                  <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-br from-blue-500 to-purple-700 rounded-full opacity-80"></div>
                  
                  {/* Bottom darker section */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-purple-800 via-purple-700 to-transparent rounded-b-full"></div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-300/40 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-purple-200/30 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-6 w-12 h-12 bg-white/20 rounded-full animate-float"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-50 rounded-full opacity-40 animate-pulse"></div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;