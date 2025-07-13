import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, CheckCircle, AlertCircle, FileText, MessageSquare, Settings, LogOut, Menu, User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';
import UserAvatar from './UserAvatar';

interface ClientDashboardProps {
  clientData: {
    name: string;
    email: string;
    project: string;
  };
  onLogout: () => void;
}

const ClientDashboard = ({ clientData, onLogout }: ClientDashboardProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Mock data for demonstration
  const projectData = {
    progress: 65,
    status: 'Em Andamento',
    nextDeadline: '2024-02-25',
    tasks: [
      { id: 1, title: 'Design das páginas principais', status: 'completed', priority: 'high' },
      { id: 2, title: 'Implementação do sistema de login', status: 'in-progress', priority: 'medium' },
      { id: 3, title: 'Testes de responsividade', status: 'pending', priority: 'low' },
      { id: 4, title: 'Integração com API de pagamentos', status: 'pending', priority: 'high' }
    ],
    messages: [
      { id: 1, sender: 'Equipe Nelvi', content: 'Design aprovado! Iniciando desenvolvimento.', date: '2024-02-10', type: 'update' },
      { id: 2, sender: 'Cliente', content: 'Quando ficará pronto o sistema de login?', date: '2024-02-12', type: 'question' },
      { id: 3, sender: 'Equipe Nelvi', content: 'Sistema de login será entregue até 25/02.', date: '2024-02-12', type: 'response' }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/20 dark:text-blue-400 dark:hover:bg-blue-900/30';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:hover:bg-gray-900/30';
    }
  };
  
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900/20 dark:text-red-400 dark:hover:bg-red-900/30';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:hover:bg-yellow-900/30';
      case 'low':
        return 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:hover:bg-gray-900/30';
    }
  };

  const NavigationMenu = () => (
    <div className="flex flex-col space-y-3">
      <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-nelvi-blue-light/10 to-nelvi-purple/10 rounded-lg">
        <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
        <div className="text-sm">
          <p className="font-medium text-gray-900 dark:text-white">{clientData.name}</p>
          <p className="text-gray-500 dark:text-gray-400">{clientData.email}</p>
        </div>
      </div>
      
      <Button variant="outline" className="w-full justify-start hover:bg-nelvi-gradient/10 transition-all duration-200">
        <User className="h-4 w-4 mr-2" />
        Meu Perfil
      </Button>
      <Button variant="outline" className="w-full justify-start hover:bg-nelvi-gradient/10 transition-all duration-200">
        <Settings className="h-4 w-4 mr-2" />
        Configurações
      </Button>
      <Button 
        onClick={onLogout}
        variant="outline"
        className="flex items-center space-x-2 border-gray-300 dark:border-gray-600 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 hover:text-red-600 dark:hover:text-red-400 w-full justify-start transition-all duration-200"
      >
        <LogOut className="h-4 w-4" />
        <span>Sair</span>
      </Button>
    </div>
  );

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
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-3 mr-4">
                <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">{clientData.name}</p>
                  <p className="text-gray-500 dark:text-gray-400">{clientData.project}</p>
                </div>
              </div>
              <ThemeToggle />
              <Button 
                onClick={onLogout}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-600 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
              <ThemeToggle />
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-nelvi-gradient/10 transition-all duration-200">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm">
                  <div className="mt-8">
                    <NavigationMenu />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <UserAvatar email={clientData.email} name={clientData.name} size="lg" />
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Olá, {clientData.name}!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Acompanhe o progresso do seu projeto: <span className="font-semibold text-nelvi-blue-strong dark:text-nelvi-purple">{clientData.project}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Project Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                Progresso Geral
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Concluído</span>
                  <span className="font-medium">{projectData.progress}%</span>
                </div>
                <Progress value={projectData.progress} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/30">
                {projectData.status}
              </Badge>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                Projeto em desenvolvimento ativo
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                Próximo Prazo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                {new Date(projectData.nextDeadline).toLocaleDateString('pt-BR')}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Sistema de login
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tasks and Messages */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tasks */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Tarefas do Projeto
              </CardTitle>
              <CardDescription>
                Acompanhe o progresso de cada etapa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200">
                    <div className="flex-1">
                      <p className="font-medium text-gray-900 dark:text-white">{task.title}</p>
                      <div className="flex gap-2 mt-1">
                        <Badge className={getStatusColor(task.status)}>
                          {task.status === 'completed' ? 'Concluída' : 
                           task.status === 'in-progress' ? 'Em Progresso' : 'Pendente'}
                        </Badge>
                        <Badge className={getPriorityColor(task.priority)}>
                          {task.priority === 'high' ? 'Alta' : 
                           task.priority === 'medium' ? 'Média' : 'Baixa'}
                        </Badge>
                      </div>
                    </div>
                    {task.status === 'completed' && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                    {task.status === 'in-progress' && (
                      <Clock className="h-5 w-5 text-blue-500" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Messages */}
          <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Comunicação
              </CardTitle>
              <CardDescription>
                Mensagens e atualizações da equipe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projectData.messages.map((message) => (
                  <div key={message.id} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <span className="font-medium text-nelvi-blue-strong dark:text-nelvi-purple">
                        {message.sender}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(message.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{message.content}</p>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4 bg-nelvi-gradient hover:opacity-90 text-white transition-all duration-200 hover:scale-105">
                <MessageSquare className="h-4 w-4 mr-2" />
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Project Files */}
        <Card className="mt-8 shadow-xl hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Arquivos do Projeto
            </CardTitle>
            <CardDescription>
              Downloads e documentos importantes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer">
                <FileText className="h-8 w-8 text-blue-500 mb-2" />
                <h3 className="font-medium">Proposta Inicial</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF • 2.4 MB</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer">
                <FileText className="h-8 w-8 text-purple-500 mb-2" />
                <h3 className="font-medium">Wireframes</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF • 8.1 MB</p>
              </div>
              <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 cursor-pointer">
                <FileText className="h-8 w-8 text-green-500 mb-2" />
                <h3 className="font-medium">Manual de Uso</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">PDF • 1.8 MB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClientDashboard;
