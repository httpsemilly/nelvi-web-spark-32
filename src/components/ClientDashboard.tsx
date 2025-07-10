
import React, { useState, useEffect } from 'react';
import { LogOut, Globe, Calendar, CheckCircle, Clock, AlertCircle, MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import ThemeToggle from './ThemeToggle';
import { useToast } from '@/hooks/use-toast';

interface ClientDashboardProps {
  onLogout: () => void;
}

const ClientDashboard = ({ onLogout }: ClientDashboardProps) => {
  const { toast } = useToast();
  const [showContactModal, setShowContactModal] = useState(false);
  const [contactMessage, setContactMessage] = useState('');
  const [currentUpdateIndex, setCurrentUpdateIndex] = useState(0);

  // Dados mockados do projeto
  const projectData = {
    name: 'Site Corporativo - Empresa XYZ',
    startDate: '15/01/2024',
    deliveryDate: '15/03/2024',
    progress: 65,
    status: 'Em Desenvolvimento',
    stages: [
      { name: 'Briefing e Planejamento', status: 'completed', date: '20/01/2024', description: 'Análise completa dos requisitos e definição do escopo do projeto.' },
      { name: 'Design e Layout', status: 'completed', date: '05/02/2024', description: 'Criação do design visual e aprovação do layout final.' },
      { name: 'Desenvolvimento', status: 'in-progress', date: 'Em andamento', description: 'Desenvolvimento das funcionalidades e integração dos sistemas.' },
      { name: 'Testes e Revisões', status: 'pending', date: 'Aguardando', description: 'Testes de qualidade e correção de possíveis ajustes.' },
      { name: 'Entrega Final', status: 'pending', date: 'Aguardando', description: 'Lançamento do site e treinamento da equipe.' }
    ],
    updates: [
      { date: '12/02/2024', message: 'Sistema de pagamentos integrado com sucesso', type: 'success' },
      { date: '10/02/2024', message: 'Layout aprovado e desenvolvimento iniciado', type: 'info' },
      { date: '08/02/2024', message: 'Primeira versão do sistema de usuários concluída', type: 'success' },
      { date: '05/02/2024', message: 'Design responsivo implementado para dispositivos móveis', type: 'info' },
      { date: '25/01/2024', message: 'Primeira versão do design enviada para aprovação', type: 'info' },
      { date: '15/01/2024', message: 'Projeto iniciado - briefing realizado com sucesso', type: 'success' }
    ]
  };

  // Auto-scroll das atualizações
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentUpdateIndex((prev) => 
        prev >= projectData.updates.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [projectData.updates.length]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-500 animate-pulse" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-blue-500 animate-spin" />;
      default:
        return <AlertCircle className="h-6 w-6 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-700';
      case 'in-progress':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 border-blue-200 dark:border-blue-700';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-600';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleContactSubmit = () => {
    if (!contactMessage.trim()) return;

    // Simular envio
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe receberá sua mensagem e entrará em contato em breve.",
    });

    setContactMessage('');
    setShowContactModal(false);
  };

  const handleSolicitarOrcamento = () => {
    // Usar a função global se disponível
    if ((window as any).scrollToContact) {
      (window as any).scrollToContact('Gostaria de solicitar um orçamento gratuito para meu projeto.');
    } else {
      // Fallback para ir para a página principal
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 transition-colors duration-300">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/002fd703-b601-4ba9-8d49-1c3d50f95011.png" 
                alt="Nelvi Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-2xl font-bold bg-nelvi-gradient bg-clip-text text-transparent">
                Nelvi
              </span>
              <span className="text-gray-400 dark:text-gray-500">|</span>
              <span className="text-gray-600 dark:text-gray-300">Área do Cliente</span>
            </div>
            <div className="flex items-center space-x-3">
              <ThemeToggle />
              <Button 
                onClick={handleSolicitarOrcamento}
                className="bg-nelvi-gradient hover:opacity-90 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Solicitar Orçamento
              </Button>
              <Button 
                onClick={onLogout}
                variant="outline"
                className="flex items-center space-x-2 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fade-in">
            Acompanhamento do Projeto
          </h1>
          <p className="text-gray-600 dark:text-gray-300 animate-fade-in">
            Veja o progresso e atualizações do seu site em tempo real
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações do Projeto */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status Geral */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-left overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-nelvi-blue-strong dark:text-nelvi-purple" />
                  <span className="text-gray-900 dark:text-white">{projectData.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Progresso Geral</span>
                    <span className="text-lg font-bold text-nelvi-blue-strong dark:text-nelvi-purple animate-pulse">
                      {projectData.progress}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <Progress value={projectData.progress} className="h-4 bg-gray-200 dark:bg-gray-700" />
                    <div 
                      className={`absolute top-0 left-0 h-4 rounded-full transition-all duration-1000 ${getProgressColor(projectData.progress)} animate-pulse`}
                      style={{ width: `${projectData.progress}%` }}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-700">
                      <Calendar className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Data de Início</p>
                      <p className="font-bold text-green-600 dark:text-green-400">{projectData.startDate}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-700">
                      <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Status</p>
                      <p className="font-bold text-blue-600 dark:text-blue-400">{projectData.status}</p>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-700">
                      <CheckCircle className="h-8 w-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600 dark:text-gray-300">Previsão de Entrega</p>
                      <p className="font-bold text-purple-600 dark:text-purple-400">{projectData.deliveryDate}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Etapas do Projeto */}
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-left overflow-hidden relative" style={{ animationDelay: '200ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-gray-900 dark:text-white">Etapas do Projeto</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4">
                  {projectData.stages.map((stage, index) => (
                    <div key={stage.name} className={`flex items-start space-x-4 p-6 rounded-xl border-2 transition-all duration-500 hover:scale-105 ${getStatusColor(stage.status)} animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex-shrink-0">
                        {getStatusIcon(stage.status)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-lg mb-1">{stage.name}</h4>
                        <p className="text-sm opacity-80 mb-2">{stage.description}</p>
                        <p className="text-sm font-medium">{stage.date}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-full text-xs font-bold border-2`}>
                        {stage.status === 'completed' ? 'Concluída' : 
                         stage.status === 'in-progress' ? 'Em Andamento' : 'Pendente'}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - Atualizações */}
          <div className="space-y-6">
            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-right overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-gray-900 dark:text-white">Últimas Atualizações</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="space-y-4 max-h-80 overflow-hidden">
                  {projectData.updates.map((update, index) => (
                    <div 
                      key={index} 
                      className={`border-l-4 ${update.type === 'success' ? 'border-green-500' : 'border-blue-500'} pl-4 py-3 rounded-r-lg ${index === currentUpdateIndex ? 'bg-gradient-to-r from-nelvi-blue-light/10 to-nelvi-purple/10 dark:from-nelvi-purple/20 dark:to-nelvi-blue-strong/20 transform scale-105' : ''} transition-all duration-1000 animate-fade-in`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{update.message}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{update.date}</p>
                    </div>
                  ))}
                </div>
                
                {/* Indicadores de scroll */}
                <div className="flex justify-center mt-4 space-x-1">
                  {projectData.updates.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentUpdateIndex ? 'bg-nelvi-blue-strong dark:bg-nelvi-purple' : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-slide-in-right overflow-hidden relative" style={{ animationDelay: '300ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-nelvi-blue-light/5 to-nelvi-purple/5 dark:from-nelvi-purple/10 dark:to-nelvi-blue-strong/10"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-gray-900 dark:text-white">Precisa de Ajuda?</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Nossa equipe está sempre disponível para esclarecer dúvidas sobre seu projeto.
                </p>
                <Button 
                  onClick={() => setShowContactModal(true)}
                  className="w-full bg-nelvi-gradient hover:opacity-90 text-white transition-all duration-300 hover:scale-105 group"
                >
                  <MessageSquare className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                  Entrar em Contato
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Modal de Contato */}
      <Dialog open={showContactModal} onOpenChange={setShowContactModal}>
        <DialogContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-gray-900 dark:text-white flex items-center space-x-2">
              <MessageSquare className="h-5 w-5 text-nelvi-blue-strong dark:text-nelvi-purple" />
              <span>Como podemos ajudar?</span>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Descreva sua dúvida ou solicitação e nossa equipe entrará em contato em breve.
            </p>
            <Textarea
              placeholder="Digite sua mensagem aqui..."
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              rows={4}
              className="bg-white/50 dark:bg-gray-700/50 border-gray-300 dark:border-gray-600 focus:ring-nelvi-blue-light dark:focus:ring-nelvi-purple"
            />
            <div className="flex justify-end space-x-2">
              <Button
                variant="outline"
                onClick={() => {
                  setShowContactModal(false);
                  setContactMessage('');
                }}
                className="border-gray-300 dark:border-gray-600"
              >
                <X className="mr-2 h-4 w-4" />
                Cancelar
              </Button>
              <Button
                onClick={handleContactSubmit}
                disabled={!contactMessage.trim()}
                className="bg-nelvi-gradient hover:opacity-90 text-white"
              >
                <Send className="mr-2 h-4 w-4" />
                Enviar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientDashboard;
