import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: 'Gostaria de solicitar um orçamento gratuito para meu projeto.'
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const emailBody = `
Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Empresa: ${formData.company}

Mensagem:
${formData.message}
      `;
      const mailtoLink = `mailto:lixeiradoyuno@gmail.com?subject=Novo contato do site Nelvi&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;
      toast({
        title: "Mensagem enviada!",
        description: "Seu cliente de email foi aberto com a mensagem. Obrigado pelo contato!"
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: 'Gostaria de solicitar um orçamento gratuito para meu projeto.'
      });
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
    }
  };

  // Função para preencher mensagem automaticamente
  const fillMessageAndScroll = (message: string) => {
    setFormData(prev => ({
      ...prev,
      message
    }));
    // Scroll para o formulário
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
      setTimeout(() => {
        const messageField = document.getElementById('message') as HTMLTextAreaElement;
        if (messageField) {
          messageField.focus();
        }
      }, 500);
    }
  };

  // Expor função globalmente para uso em outras páginas
  React.useEffect(() => {
    (window as any).fillContactMessage = fillMessageAndScroll;
  }, []);
  const contactInfo = [{
    icon: Phone,
    title: 'Telefone',
    info: '+55 (71) 9999-9999',
    subtitle: 'Seg a Sex, 8h às 18h',
    color: 'text-brand-blue'
  }, {
    icon: Mail,
    title: 'E-mail',
    info: 'contato@nelvi.com.br',
    subtitle: 'Resposta em até 2h',
    color: 'text-brand-purple'
  }, {
    icon: MapPin,
    title: 'Endereço',
    info: 'Salvador, Bahia',
    subtitle: 'Atendimento online',
    color: 'text-brand-blue'
  }];
  return <section id="contact" className="section-padding bg-gradient-to-br from-secondary to-background">
      <div className="container mx-auto container-padding">
        <div className="text-center mb-16">
          {/* Padronized badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full border border-brand-blue/20 mb-8">
            <Sparkles className="w-5 h-5 text-brand-blue mr-3" />
            <span className="text-sm font-semibold text-brand-blue">
              Entre em Contato
            </span>
          </div>
          
          {/* Fixed title styling */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
            Vamos começar seu
            <span className="gradient-text block mt-2 pb-2">
              projeto juntos
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Estamos prontos para transformar suas ideias em realidade digital. 
            Entre em contato e receba uma proposta personalizada.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return <Card key={info.title} className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-card backdrop-blur-sm border border-border animate-slide-in-left overflow-hidden relative" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                        <IconComponent className={`h-6 w-6 ${info.color} group-hover:animate-pulse`} />
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-2 text-lg group-hover:text-brand-blue transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-brand-blue font-semibold mb-1 text-lg">
                          {info.info}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Card>;
          })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-2xl border-0 bg-card backdrop-blur-sm animate-slide-in-right overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-3xl font-bold text-foreground text-center mb-2">
                  Envie sua mensagem
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Preencha o formulário e entraremos em contato em breve
                </p>
              </CardHeader>
              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Nome Completo *
                      </label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300 bg-background backdrop-blur-sm hover:bg-muted/30" placeholder="Seu nome completo" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        E-mail *
                      </label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300 bg-background backdrop-blur-sm hover:bg-muted/30" placeholder="seu@email.com" />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Telefone
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300 bg-background backdrop-blur-sm hover:bg-muted/30" placeholder="(71) 99999-9999" />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                        Empresa
                      </label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300 bg-background backdrop-blur-sm hover:bg-muted/30" placeholder="Nome da sua empresa" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Mensagem *
                    </label>
                    <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange} className="w-full px-4 py-3 border border-border rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all duration-300 resize-none bg-background backdrop-blur-sm hover:bg-muted/30" placeholder="Conte-nos sobre seu projeto..."></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 text-white py-4 rounded-xl transition-all duration-300 group text-lg font-semibold hover:scale-105 hover:shadow-xl">
                    <Send className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;