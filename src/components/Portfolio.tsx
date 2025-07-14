import React from 'react';
import { ArrowRight, ExternalLink, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [{
    title: 'E-commerce Premium',
    category: 'Loja Virtual',
    description: 'Plataforma completa de vendas online com sistema de pagamento integrado, dashboard administrativo e design responsivo de alta conversão.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    tags: ['React', 'E-commerce', 'Payment Gateway', 'Admin Panel'],
    slug: 'e-commerce-moderno',
    color: 'from-blue-500 to-cyan-500'
  }, {
    title: 'Site Corporativo',
    category: 'Institucional',
    description: 'Website institucional moderno com foco em conversão, otimização SEO avançada e integração com ferramentas de marketing.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
    tags: ['Corporate', 'SEO', 'Marketing', 'CMS'],
    slug: 'site-corporativo',
    color: 'from-purple-500 to-pink-500'
  }, {
    title: 'Portfolio Interativo',
    category: 'Portfolio',
    description: 'Site portfolio criativo para artista com galeria interativa, animações personalizadas e sistema de contato integrado.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
    tags: ['Creative', 'Animation', 'Gallery', 'Interactive'],
    slug: 'portfolio-criativo',
    color: 'from-green-500 to-emerald-500'
  }, {
    title: 'App de Delivery',
    category: 'Aplicativo Web',
    description: 'Aplicação web completa para delivery com sistema de pedidos em tempo real, painel administrativo e integração com pagamentos.',
    image: 'https://images.unsplash.com/photo-1599202889720-cd3c0833efa1?w=500&h=300&fit=crop',
    tags: ['Web App', 'Real-time', 'Dashboard', 'Mobile'],
    slug: 'app-delivery',
    color: 'from-orange-500 to-red-500'
  }, {
    title: 'Blog Profissional',
    category: 'Blog',
    description: 'Blog otimizado para SEO com sistema de comentários, newsletter integrada e painel administrativo completo.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
    tags: ['Blog', 'CMS', 'Newsletter', 'SEO'],
    slug: 'blog-profissional',
    color: 'from-indigo-500 to-purple-500'
  }, {
    title: 'Landing Page Premium',
    category: 'Marketing',
    description: 'Landing page de alta conversão com formulários inteligentes, analytics integrados e testes A/B automatizados.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
    tags: ['Landing', 'Conversion', 'Analytics', 'A/B Testing'],
    slug: 'landing-page',
    color: 'from-teal-500 to-blue-500'
  }];

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16 fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full border border-brand-blue/20 mb-6">
            <Sparkles className="w-4 h-4 text-brand-blue mr-2" />
            <span className="text-sm font-semibold gradient-text">
              Nosso Portfolio
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Projetos que
            <span className="gradient-text block mt-2 pb-2">
              Transformam Negócios
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos e como ajudamos nossos 
            clientes a alcançarem resultados extraordinários no mundo digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group card-hover border-0 shadow-lg overflow-hidden bg-card/80 backdrop-blur-sm hover:bg-card animate-fade-in relative h-full flex flex-col" 
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="relative">
                {/* Enhanced Project Image */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                  
                  {/* Enhanced Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Enhanced Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex space-x-4">
                      <a 
                        href={`/projeto/${project.slug}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-lg text-xs px-3 py-2">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Ver Projeto
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 bg-card relative flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 text-brand-blue text-xs rounded-full font-medium border border-brand-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={`/projeto/${project.slug}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center text-brand-blue font-semibold hover:text-brand-purple transition-colors duration-300 group/btn text-sm"
                  >
                    Ver Projeto
                    <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
                
                {/* Enhanced Decorative gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;