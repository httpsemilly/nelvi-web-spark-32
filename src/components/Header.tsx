import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Início', href: '#hero' },
    { label: 'Serviços', href: '#services' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
    { label: 'Área do Cliente', href: '/cliente' }
  ];

  const scrollToContact = (message?: string) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact';
      return;
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        if ((window as any).fillContactMessage && message) {
          (window as any).fillContactMessage(message);
        } else {
          const messageField = document.getElementById('message') as HTMLTextAreaElement;
          if (messageField) {
            messageField.value = message || 'Gostaria de solicitar um orçamento gratuito para meu projeto.';
            messageField.focus();
          }
        }
      }, 500);
    }
  };

  React.useEffect(() => {
    (window as any).scrollToContact = scrollToContact;
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-brand-blue to-brand-purple rounded-2xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">N</span>
            </div>
            <span className="text-2xl sm:text-3xl font-bold gradient-text">
              Nelvi
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-medium transition-all duration-300 hover:text-brand-blue group text-sm xl:text-base ${
                  isScrolled ? 'text-foreground' : 'text-foreground'
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-purple transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle & CTA Button */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <ThemeToggle isScrolled={isScrolled}/>
            <Button 
              onClick={() => scrollToContact('Gostaria de solicitar um orçamento gratuito para meu projeto.')}
              className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-4 xl:px-6 py-2 xl:py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold text-sm xl:text-base"
            >
              Solicitar Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle isScrolled={isScrolled}/>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`w-9 h-9 p-0 transition-all duration-300 ${
                isScrolled 
                  ? 'bg-muted hover:bg-muted/80 border border-border text-foreground hover:text-foreground' 
                  : 'bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm text-white hover:text-white'
              } dark:bg-gray-800/50 dark:hover:bg-gray-700/50 dark:border-gray-600/30`}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-4 right-4 bg-background/95 backdrop-blur-md border border-border shadow-lg rounded-xl mt-2">
            <nav className="px-4 sm:px-6 py-4 sm:py-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-brand-blue transition-colors duration-300 font-medium px-3 sm:px-4 py-2 sm:py-3 rounded-xl hover:bg-muted text-sm sm:text-base"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    scrollToContact('Gostaria de solicitar um orçamento gratuito para meu projeto.');
                  }}
                  className="bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl transition-all duration-300 mt-2 sm:mt-4 font-semibold text-sm sm:text-base"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;