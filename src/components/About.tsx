import React, { useState } from 'react';
import { ArrowRight, Star, Users, Zap, Code, Palette, Cpu, Sparkles, Target, Award, TrendingUp, Globe, Shield, Eye, Layers, Headphones } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 rounded-full border border-brand-blue/20 mb-6 sm:mb-8">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue mr-2 sm:mr-3" />
            <span className="text-xs sm:text-sm font-semibold text-brand-blue">
              Sobre a Nelvi
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 sm:mb-6 leading-tight">
            Transformamos ideias em
            <span className="gradient-text block mt-1 sm:mt-2 pb-2">
              realidade digital
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Criamos sites que impressionam visualmente e geram resultados reais e mensuráveis para o seu negócio.
          </p>
        </div>

        {/* Main Cards Section - Replicating the image structure */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          
          {/* Left Card - Development Growth */}
          <div className="bg-gradient-to-r from-brand-blue to-brand-purple p-8 rounded-3xl text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-8">
                Acelere seu desenvolvimento
              </h3>
              
              {/* Chart/Growth Visual */}
              <div className="flex items-end justify-center space-x-2 mb-8">
                <div className="w-16 h-12 bg-white/30 rounded-t-lg"></div>
                <div className="w-16 h-16 bg-white/40 rounded-t-lg"></div>
                <div className="w-16 h-20 bg-white/50 rounded-t-lg"></div>
                <div className="w-16 h-28 bg-white/60 rounded-t-lg"></div>
                <div className="w-16 h-36 bg-white/80 rounded-t-lg relative">
                  <TrendingUp className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-6 h-6 text-white" />
                </div>
                <div className="w-16 h-24 bg-white/40 rounded-t-lg"></div>
                <div className="w-16 h-20 bg-white/30 rounded-t-lg"></div>
              </div>
              
              <div className="text-right">
                <div className="text-3xl font-bold mb-2">+90%</div>
                <div className="text-white/80">Score de performance</div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full"></div>
          </div>

          {/* Right Card - Experience & Satisfaction */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl relative overflow-hidden border border-slate-700/30 shadow-xl">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold text-white mb-12">
                Experiência comprovada
              </h3>
              
              {/* 3 Column Stats Grid */}
              <div className="grid grid-cols-3 gap-8 mb-12">
                
                {/* Projects Column */}
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">200+</div>
                  <div className="text-slate-300 text-sm">Projetos</div>
                </div>
                
                {/* Satisfaction Column */}
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">98%</div>
                  <div className="text-slate-300 text-sm">Satisfação</div>
                </div>
                
                {/* Experience Column */}
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">5+</div>
                  <div className="text-slate-300 text-sm">Anos</div>
                </div>
              </div>
              
              {/* Simple Bottom Text */}
              <div className="text-center">
                <div className="text-slate-400 text-sm font-medium">
                  Excelência em soluções digitais
                </div>
              </div>
            </div>
            
            {/* Minimal Background decoration */}
            <div className="absolute top-8 right-8 w-2 h-2 bg-purple-500/50 rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-1 h-1 bg-blue-500/50 rounded-full"></div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">NOSSOS VALORES</div>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Princípios que guiam nosso trabalho
          </h3>
          
          <p className="text-lg text-muted-foreground max-w-2xl mb-12">
            Nossos valores fundamentam cada projeto que desenvolvemos, garantindo 
            excelência técnica e relacionamentos duradouros com nossos clientes.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Innovation Card */}
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-3xl hover:bg-gradient-to-br hover:from-indigo-100 hover:to-indigo-200 transition-all duration-300 group relative overflow-hidden">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-6 w-6 text-white" />
            </div>
            
            <h4 className="text-xl font-bold text-purple-800 mb-3">
              Inovação
            </h4>
            
            <p className="text-purple-700 mb-6 leading-relaxed">
              Busca contínua por novas tecnologias e metodologias para 
              oferecer as melhores soluções digitais.
            </p>
            
            <div className="flex items-center text-purple-600 font-semibold cursor-pointer group">
              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="absolute top-4 right-4 w-20 h-20 bg-purple-200/40 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-violet-200/40 rounded-full"></div>
          </div>

          {/* Quality Card */}
          <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-8 rounded-3xl hover:bg-gradient-to-br hover:from-purple-100 hover:to-purple-200 transition-all duration-300 group relative overflow-hidden">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6 text-white" />
            </div>
            
            <h4 className="text-xl font-bold text-blue-800 mb-3">
              Qualidade
            </h4>
            
            <p className="text-blue-700 mb-6 leading-relaxed">
              Compromisso com a excelência em cada etapa do desenvolvimento, 
              desde o design até a entrega final.
            </p>
            
            <div className="flex items-center text-blue-600 font-semibold cursor-pointer group">
              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="absolute top-4 right-4 w-20 h-20 bg-blue-200/40 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-indigo-200/40 rounded-full"></div>
          </div>

          {/* Transparency Card */}
          <div className="bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-3xl hover:bg-gradient-to-br hover:from-slate-100 hover:to-gray-200 transition-all duration-300 group relative overflow-hidden">
            <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-gray-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Eye className="h-6 w-6 text-white" />
            </div>
            
            <h4 className="text-xl font-bold text-slate-800 mb-3">
              Transparência
            </h4>
            
            <p className="text-slate-700 mb-6 leading-relaxed">
              Comunicação clara e honesta com clientes e colaboradores 
              em todas as etapas do projeto.
            </p>
            
            <div className="flex items-center text-slate-600 font-semibold cursor-pointer group">
              <ArrowRight className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
            
            <div className="absolute top-4 right-4 w-20 h-20 bg-slate-200/40 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-gray-200/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;