import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Calendar, Clock, CheckCircle, AlertCircle, FileText, MessageSquare, Settings, LogOut, Menu, User, TrendingUp, Activity, Download, Send, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [messageSubject, setMessageSubject] = useState('');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Equipe Nelvi', content: 'Design aprovado! Iniciando desenvolvimento.', date: '2024-02-10', type: 'update' },
    { id: 2, sender: 'Cliente', content: 'Quando ficará pronto o sistema de login?', date: '2024-02-12', type: 'question' },
    { id: 3, sender: 'Equipe Nelvi', content: 'Sistema de login será entregue até 25/02.', date: '2024-02-12', type: 'response' }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim() && messageSubject.trim()) {
      const newMsg = {
        id: messages.length + 1,
        sender: 'Cliente',
        content: newMessage,
        date: new Date().toISOString().split('T')[0],
        type: 'question',
        subject: messageSubject
      };
      
      setMessages([...messages, newMsg]);
      setNewMessage('');
      setMessageSubject('');
      setIsMessageModalOpen(false);
    }
  };

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
    messages: messages
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
        <div className="flex items-center space-x-3 mb-4 p-3 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-lg">
          <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
          <div className="text-sm">
            <p className="font-medium text-foreground">{clientData.name}</p>
            <p className="text-muted-foreground">{clientData.email}</p>
          </div>
        </div>
      
        <Button variant="outline" className="w-full justify-start hover:bg-accent transition-all duration-200">
          <User className="h-4 w-4 mr-2" />
          Meu Perfil
        </Button>
        <Button variant="outline" className="w-full justify-start hover:bg-accent transition-all duration-200">
          <Settings className="h-4 w-4 mr-2" />
          Configurações
        </Button>
      <Button 
        onClick={onLogout}
        variant="outline"
        className="flex items-center space-x-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive w-full justify-start transition-all duration-200"
      >
        <LogOut className="h-4 w-4" />
        <span>Sair</span>
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-accent/20 dark:from-background dark:to-muted transition-colors duration-300">
      {/* Header */}
      <header className="bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-sm border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-2xl font-bold gradient-text">
                Nelvi
              </span>
              <span className="text-muted-foreground">|</span>
              <span className="text-foreground/80">Área do Cliente</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-3">
              <div className="flex items-center space-x-3 mr-4">
                <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
                <div className="text-sm">
                  <p className="font-medium text-foreground">{clientData.name}</p>
                  <p className="text-muted-foreground">{clientData.project}</p>
                </div>
              </div>
              <ThemeToggle isScrolled={true} />
              <Button 
                onClick={onLogout}
                variant="outline"
                className="flex items-center space-x-2 hover:bg-destructive/10 hover:border-destructive hover:text-destructive transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span>Sair</span>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-2">
              <UserAvatar email={clientData.email} name={clientData.name} size="sm" />
              <ThemeToggle isScrolled={true} />
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="p-2 hover:bg-accent transition-all duration-200">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-64 bg-background/95 backdrop-blur-sm">
                  <div className="mt-8">
                    <NavigationMenu />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-7 py-6">
        {/* Hero Section */}
        <div className="mb-10">
          <div className="bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-blue/10 rounded-3xl p-8 mb-8 border border-brand-blue/20">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <UserAvatar email={clientData.email} name={clientData.name} size="lg" />
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-2">
                  Olá, {clientData.name}!
                </h1>
                <p className="text-muted-foreground text-lg mb-4">
                  Bem-vindo de volta ao painel do projeto
                </p>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="bg-brand-blue/20 text-brand-blue border-brand-blue/30">
                    <Activity className="h-3 w-3 mr-1" />
                    {clientData.project}
                  </Badge>
                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-600 border-emerald-500/30">
                    {projectData.status}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-brand-blue/5 to-brand-blue/10 border-brand-blue/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Progresso</p>
                  <p className="text-2xl font-bold text-brand-blue">{projectData.progress}%</p>
                </div>
                <div className="h-12 w-12 bg-brand-blue/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-brand-blue" />
                </div>
              </div>
              <Progress value={projectData.progress} className="mt-4 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Tarefas</p>
                  <p className="text-2xl font-bold text-emerald-600">
                    {projectData.tasks.filter(t => t.status === 'completed').length}/{projectData.tasks.length}
                  </p>
                </div>
                <div className="h-12 w-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Tarefas concluídas</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-brand-purple/5 to-brand-purple/10 border-brand-purple/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Próximo Prazo</p>
                  <p className="text-lg font-bold text-brand-purple">
                    {new Date(projectData.nextDeadline).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                  </p>
                </div>
                <div className="h-12 w-12 bg-brand-purple/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-brand-purple" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Sistema de login</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Tasks */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300 h-fit">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="h-5 w-5" />
                    Cronograma do Projeto
                  </CardTitle>
                  <Button variant="ghost" size="sm" className="text-brand-blue hover:bg-brand-blue/10">
                    Ver Todos
                  </Button>
                </div>
                <CardDescription>
                  Acompanhe o progresso de cada etapa do desenvolvimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectData.tasks.map((task, index) => (
                    <div key={task.id} className="relative">
                      {/* Timeline line */}
                      {index !== projectData.tasks.length - 1 && (
                        <div className="absolute left-10 top-16 w-0.5 h-20 bg-border" />
                      )}
                      
                      <div className="flex items-start space-x-4 p-4 bg-accent/30 rounded-xl hover:bg-accent/50 transition-all duration-200">
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            task.status === 'completed' ? 'bg-green-100 dark:bg-green-900/20' :
                            task.status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-900/20' :
                            'bg-gray-100 dark:bg-gray-900/20'
                          }`}>
                            {task.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                            {task.status === 'in-progress' && <Clock className="h-5 w-5 text-blue-600" />}
                            {task.status === 'pending' && <AlertCircle className="h-5 w-5 text-gray-600" />}
                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-foreground truncate">{task.title}</h3>
                            <Badge className={getPriorityColor(task.priority)}>
                              {task.priority === 'high' ? 'Alta' : 
                               task.priority === 'medium' ? 'Média' : 'Baixa'}
                            </Badge>
                          </div>
                          <Badge className={getStatusColor(task.status)}>
                            {task.status === 'completed' ? 'Concluída' : 
                             task.status === 'in-progress' ? 'Em Progresso' : 'Pendente'}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Messages & Files */}
          <div className="space-y-8">
            {/* Messages */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Comunicação
                </CardTitle>
                <CardDescription>
                  Mensagens recentes da equipe
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  {projectData.messages.slice(-2).map((message) => (
                    <div key={message.id} className="p-3 bg-accent/40 rounded-lg">
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-sm font-medium text-brand-blue dark:text-brand-purple">
                          {message.sender}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {new Date(message.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })}
                        </span>
                      </div>
                      <p className="text-sm text-foreground">{message.content}</p>
                    </div>
                  ))}
                </div>
                
                <Dialog open={isMessageModalOpen} onOpenChange={setIsMessageModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white transition-all duration-200">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Nova Mensagem
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-brand-blue" />
                        Enviar Nova Mensagem
                      </DialogTitle>
                      <DialogDescription>
                        Envie uma mensagem para a equipe Nelvi sobre seu projeto.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="message-subject">Assunto</Label>
                        <Input
                          id="message-subject"
                          placeholder="Ex: Dúvida sobre funcionalidade, Solicitação de alteração..."
                          value={messageSubject}
                          onChange={(e) => setMessageSubject(e.target.value)}
                          className="focus:ring-brand-blue focus:border-brand-blue"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message-content">Mensagem</Label>
                        <Textarea
                          id="message-content"
                          placeholder="Escreva sua mensagem aqui..."
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          rows={4}
                          className="focus:ring-brand-blue focus:border-brand-blue resize-none"
                        />
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        A equipe Nelvi responderá em até 24 horas durante dias úteis.
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        onClick={() => setIsMessageModalOpen(false)}
                        className="hover:bg-accent"
                      >
                        <X className="h-4 w-4 mr-2" />
                        Cancelar
                      </Button>
                      <Button 
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim() || !messageSubject.trim()}
                        className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Enviar Mensagem
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>

            {/* Quick Files */}
            <Card className="shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Arquivos Recentes
                </CardTitle>
                <CardDescription>
                  Downloads e documentos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: 'Proposta Inicial', size: '2.4 MB', color: 'text-brand-blue' },
                    { name: 'Wireframes', size: '8.1 MB', color: 'text-brand-purple' },
                    { name: 'Manual de Uso', size: '1.8 MB', color: 'text-emerald-500' }
                  ].map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-accent/40 rounded-lg hover:bg-accent/60 transition-colors duration-200 cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <FileText className={`h-5 w-5 ${file.color}`} />
                        <div>
                          <p className="font-medium text-foreground text-sm">{file.name}</p>
                          <p className="text-xs text-muted-foreground">{file.size}</p>
                        </div>
                      </div>
                      <Download className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;