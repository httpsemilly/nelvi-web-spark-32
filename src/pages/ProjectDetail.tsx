import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Code, Palette, Globe, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Mock data para diferentes projetos
  const projects: Record<string, any> = {
    'loja-virtual': {
      title: 'Loja Virtual',
      description: 'Desenvolvimento de uma plataforma de e-commerce completa com sistema de pagamentos integrado, gestão de estoque e painel administrativo avançado.',
      fullDescription: 'Este projeto envolveu a criação de uma loja virtual moderna e funcional, desenvolvida com as mais recentes tecnologias web. A plataforma oferece uma experiência de compra intuitiva para os usuários finais, enquanto fornece ferramentas poderosas de gestão para os administradores.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      category: 'E-commerce',
      client: 'Fashion Store',
      duration: '3 meses',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Sistema de autenticação seguro',
        'Carrinho de compras inteligente',
        'Integração com múltiplas formas de pagamento',
        'Painel administrativo completo',
        'Sistema de avaliações e comentários',
        'Gestão de estoque em tempo real',
        'Relatórios de vendas detalhados',
        'Design responsivo para todos os dispositivos'
      ],
      challenges: [
        {
          title: 'Integração de Pagamentos',
          description: 'Implementação de múltiplas gateways de pagamento garantindo segurança e confiabilidade.'
        },
        {
          title: 'Performance',
          description: 'Otimização para carregamento rápido mesmo com grande volume de produtos.'
        },
        {
          title: 'Scalabilidade',
          description: 'Arquitetura preparada para crescimento e aumento de tráfego.'
        }
      ],
      results: [
        'Aumento de 250% nas vendas online',
        'Redução de 40% no tempo de checkout',
        'Melhoria de 60% na experiência do usuário',
        '99.9% de uptime desde o lançamento'
      ]
    },
    'site-corporativo': {
      title: 'Site Corporativo',
      description: 'Website institucional moderno com foco em conversão e experiência do usuário.',
      fullDescription: 'Desenvolvimento de um site corporativo sofisticado que reflete a identidade da marca e maximiza as conversões. O projeto incluiu pesquisa de UX, design personalizado e implementação de estratégias de SEO.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      category: 'Institucional',
      client: 'Tech Solutions',
      duration: '2 meses',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      features: [
        'Design responsivo e moderno',
        'Otimização para mecanismos de busca (SEO)',
        'Formulários de contato inteligentes',
        'Integração com Google Analytics',
        'Sistema de blog integrado',
        'Galeria de projetos dinâmica',
        'Testimonials automatizados',
        'Performance otimizada'
      ],
      challenges: [
        {
          title: 'Branding Digital',
          description: 'Tradução da identidade visual da empresa para o ambiente digital mantendo consistência.'
        },
        {
          title: 'SEO Avançado',
          description: 'Implementação de estratégias técnicas de SEO para melhor rankeamento.'
        },
        {
          title: 'Conversão',
          description: 'Otimização de elementos para maximizar as conversões de visitantes em leads.'
        }
      ],
      results: [
        'Aumento de 300% no tráfego orgânico',
        'Melhoria de 80% na taxa de conversão',
        'Redução de 50% na taxa de rejeição',
        'Posicionamento na primeira página do Google'
      ]
    },
    'plataforma-educacional': {
      title: 'Plataforma Educacional',
      description: 'Sistema completo de ensino à distância com recursos avançados de aprendizagem.',
      fullDescription: 'Criação de uma plataforma educacional robusta que oferece uma experiência de aprendizagem completa. O sistema inclui gestão de cursos, acompanhamento de progresso, e ferramentas interativas para professores e alunos.',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      category: 'Educação',
      client: 'EduTech Academy',
      duration: '4 meses',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC', 'Redis'],
      features: [
        'Sistema de videoaulas ao vivo',
        'Gestão completa de cursos',
        'Acompanhamento de progresso',
        'Fóruns de discussão integrados',
        'Sistema de avaliações online',
        'Certificados digitais automáticos',
        'Relatórios de desempenho',
        'Notificações em tempo real'
      ],
      challenges: [
        {
          title: 'Streaming de Vídeo',
          description: 'Implementação de sistema robusto para transmissão de videoaulas em alta qualidade.'
        },
        {
          title: 'Escalabilidade',
          description: 'Arquitetura capaz de suportar milhares de usuários simultâneos.'
        },
        {
          title: 'Interatividade',
          description: 'Criação de ferramentas interativas para engajamento dos estudantes.'
        }
      ],
      results: [
        'Mais de 10.000 alunos ativos',
        '95% de satisfação dos usuários',
        'Redução de 70% nos custos operacionais',
        'Expansão para 5 novos países'
      ]
    }
  };

  const project = projects[slug || ''] || projects['loja-virtual'];

  const handleSolicitarOrcamento = () => {
    // Usar a função global se disponível
    if ((window as any).scrollToContact) {
      (window as any).scrollToContact('Gostaria de solicitar um orçamento gratuito para meu projeto.');
    } else {
      // Fallback para ir para a página principal
      window.location.href = '/#contact';
    }
  };

  const handleVoltar = () => {
    // Navegar para a página inicial e scroll para o portfolio
    navigate('/');
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio');
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                onClick={handleVoltar}
                variant="ghost"
                className="flex items-center space-x-2 text-muted-foreground hover:text-brand-blue"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Voltar ao Portfolio</span>
              </Button>
              <div className="h-6 w-px bg-border"></div>
              <span className="text-lg font-semibold text-foreground">{project.title}</span>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle isScrolled={true} />
              <Button 
                onClick={handleSolicitarOrcamento}
                className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-nelvi-gradient/10 text-nelvi-blue-strong dark:text-nelvi-purple border-nelvi-gradient/20">
                {project.category}
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {project.fullDescription}
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                  <User className="h-6 w-6 text-nelvi-blue-strong dark:text-nelvi-purple mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Cliente</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.client}</p>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                  <Calendar className="h-6 w-6 text-nelvi-blue-strong dark:text-nelvi-purple mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Duração</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.duration}</p>
                </div>
                <div className="text-center p-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700">
                  <Globe className="h-6 w-6 text-nelvi-blue-strong dark:text-nelvi-purple mx-auto mb-2" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">Categoria</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{project.category}</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-nelvi-gradient rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={project.image}
                alt={project.title}
                className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-left overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Code className="mr-3 h-8 w-8 text-nelvi-blue-strong dark:text-nelvi-purple" />
                  Funcionalidades Principais
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Challenges */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-left overflow-hidden relative" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <Palette className="mr-3 h-8 w-8 text-nelvi-blue-strong dark:text-nelvi-purple" />
                  Desafios e Soluções
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge: any, index: number) => (
                    <div key={index} className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/20 rounded-xl border border-gray-200 dark:border-gray-600">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{challenge.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-left overflow-hidden relative" style={{ animationDelay: '400ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardContent className="p-8 relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Resultados Alcançados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.results.map((result: string, index: number) => (
                    <div key={index} className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-700 text-center">
                      <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                        {result.split(' ')[0]}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {result.replace(result.split(' ')[0], '').trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-right overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardContent className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string, index: number) => (
                    <Badge
                      key={index}
                      className="bg-nelvi-gradient/10 text-nelvi-blue-strong dark:text-nelvi-purple border-nelvi-gradient/20 hover:bg-nelvi-gradient/20 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-nelvi-blue-strong/10 to-nelvi-purple/10 dark:from-nelvi-purple/20 dark:to-nelvi-blue-strong/20 backdrop-blur-sm animate-slide-in-right overflow-hidden relative" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8 text-center relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Gostou do projeto?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Vamos criar algo incrível para o seu negócio também!
                </p>
                <Button 
                  onClick={handleSolicitarOrcamento}
                  className="w-full bg-nelvi-gradient hover:opacity-90 text-white py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                >
                  Solicitar Orçamento
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
