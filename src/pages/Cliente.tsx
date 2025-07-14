import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, User, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ClientDashboard from '@/components/ClientDashboard';
import ThemeToggle from '@/components/ThemeToggle';

const Cliente = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Mock client data - in a real app this would come from an API
  const clientData = {
    name: 'Cliente Demo',
    email: 'cliente@nelvi.com',
    project: 'Sistema Web Personalizado'
  };

  useEffect(() => {
    // Verificar se já está logado
    const loggedIn = localStorage.getItem('nelvi_client_logged_in');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (loginData.username === 'adm' && loginData.password === 'nelvi@789') {
      setIsLoggedIn(true);
      localStorage.setItem('nelvi_client_logged_in', 'true');
      setLoginError('');
    } else {
      setLoginError('Usuário ou senha incorretos');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('nelvi_client_logged_in');
    setLoginData({ username: '', password: '' });
  };

  if (isLoggedIn) {
    return <ClientDashboard clientData={clientData} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 dark:from-gray-900 dark:via-blue-950/30 dark:to-purple-950/20 transition-colors duration-300 flex items-center justify-center py-8 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-brand-purple/10 to-brand-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Logo fixo no canto superior esquerdo */}
      <div className="fixed top-4 left-6 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-xl shadow-brand-blue/20 dark:shadow-brand-purple/20">
            <span className="text-white font-bold text-lg">N</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold gradient-text">
              Nelvi
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              Soluções Digitais
            </span>
          </div>
        </div>
      </div>

      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle isScrolled={true} />
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Área do Cliente</h1>
            <p className="text-gray-600 dark:text-gray-300 font-medium">Acompanhe o progresso do seu projeto</p>
          </div>
        </div>

        {/* Login Form */}
        <Card className="shadow-2xl border-0 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl animate-slide-in-right overflow-hidden relative group">
          
          <CardHeader className="relative z-10 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-gray-900 dark:text-white flex items-center justify-center space-x-2">
              <Lock className="h-6 w-6 text-brand-blue dark:text-brand-purple" />
              <span>Login</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent className="relative z-10 pt-0">
            <div className="space-y-6">
              {loginError && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-600 dark:text-red-400 px-4 py-3 rounded-xl text-sm animate-fade-in shadow-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <span>{loginError}</span>
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <div className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Usuário
                </div>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-brand-blue dark:group-focus-within:text-brand-purple transition-colors duration-200" />
                  <input
                    type="text"
                    value={loginData.username}
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-purple/50 focus:border-brand-blue dark:focus:border-brand-purple transition-all duration-300 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white shadow-sm hover:shadow-md"
                    placeholder="Digite seu usuário"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Senha
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 group-focus-within:text-brand-blue dark:group-focus-within:text-brand-purple transition-colors duration-200" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    className="w-full pl-12 pr-14 py-4 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-brand-blue/50 dark:focus:ring-brand-purple/50 focus:border-brand-blue dark:focus:border-brand-purple transition-all duration-300 bg-white/70 dark:bg-gray-700/70 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white shadow-sm hover:shadow-md"
                    placeholder="Digite sua senha"
                    onKeyDown={(e) => e.key === 'Enter' && handleLogin(e)}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-brand-blue dark:hover:text-brand-purple transition-colors duration-200 p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleLogin}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-7 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl font-semibold text-lg shadow-lg hover:shadow-brand-blue/25 dark:hover:shadow-brand-purple/25 mt-8"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Entrar</span>
                </div>
              </Button>
            </div>

            <div className="mt-8 text-center">
              <a 
                href="/" 
                className="inline-flex items-center space-x-2 text-brand-blue dark:text-brand-purple hover:text-brand-purple dark:hover:text-brand-blue transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span>←</span>
                <span>Voltar ao site</span>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cliente;