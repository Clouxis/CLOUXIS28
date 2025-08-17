'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Database, Cloud, Shield, Target, CheckCircle, Users, Mail, Phone, MapPin, Menu, X, ArrowRight, Zap, Code, BarChart3, Play, Pause, Mic, MicOff, Video, VideoOff, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import ServicesDropdown from '@/components/ServicesDropdown';
import CountrySelector from '@/components/CountrySelector';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observeElements = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections(prev => new Set([...prev, entry.target.id]));
            }
          });
        },
        { threshold: 0.1 }
      );

      document.querySelectorAll('[data-animate]').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    const cleanup = observeElements();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cleanup();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Fluid Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-30 animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, #C60606 0%, transparent 70%)',
              left: '10%',
              top: '20%',
              animation: 'float-1 8s ease-in-out infinite'
            }}
          ></div>
          <div 
            className="absolute w-80 h-80 rounded-full opacity-25 animate-pulse-slow"
            style={{
              background: 'radial-gradient(circle, #FF4444 0%, transparent 70%)',
              right: '15%',
              top: '10%',
              animation: 'float-2 10s ease-in-out infinite reverse'
            }}
          ></div>
          <div 
            className="absolute w-64 h-64 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, #C60606 0%, transparent 70%)',
              left: '60%',
              bottom: '20%',
              animation: 'float-3 12s ease-in-out infinite'
            }}
          ></div>
        </div>

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(198, 6, 6, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(198, 6, 6, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'grid-move 25s linear infinite'
          }}></div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-red-900/30' 
          : 'bg-black/20 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-white">
              <Link href="/">
                <img 
                  src="/ClouxisWeb.png" 
                  alt="Clouxis" 
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <ServicesDropdown />
              {['Quem Somos', 'A Nossa Filosofia', 'Carreiras'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(['about', 'philosophy', 'careers'][index])}
                  className="text-black hover:text-red-400 transition-all duration-300 relative group font-medium"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              
              <div className="flex items-center space-x-4">
                <span className="text-black">|</span>
                <CountrySelector />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50">
              <div className="px-6 py-4 space-y-4">
                <Link
                  href="/services/desenvolvimento-dados"
                  className="block w-full text-left text-slate-300 hover:text-red-400 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Serviços
                </Link>
                {['Quem Somos', 'A Nossa Filosofia', 'Carreiras'].map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(['about', 'philosophy', 'careers'][index])}
                    className="block w-full text-left text-slate-300 hover:text-red-400 transition-colors"
                  >
                    {item}
                  </button>
                ))}
                <div className="pt-4 border-t border-gray-200">
                  <CountrySelector />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Spline 3D */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 relative z-10">
        {/* Section Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Two-way synchronization",
                description: "Integrate your task tracker with GitHub to sync changes instantly."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Private tasks",
                description: "Integration and management of multiple data repositories effectively."
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Multiple repositories",
                description: "Organize multiple projects for more effective planning and collaboration."
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Milestone migration",
                description: "Seamless migration of key project milestones between repositories."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Track progress",
                description: "Keep track of GitHub contributions and changes within your workspace."
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Advanced filtering",
                description: "Precise project data search with advanced filtering capabilities."
              }
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-700 hover:-translate-y-3 bg-black/40 backdrop-blur-md border border-red-900/30 hover:border-red-500/60 rounded-2xl relative overflow-hidden"
                data-animate
                id={`feature-${index}`}
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-black/60 border border-red-900/50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-red-400 group-hover:shadow-lg group-hover:shadow-red-500/25 transition-all duration-500 group-hover:scale-110">
                    <div className="text-red-400 group-hover:text-red-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Office Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white text-gray-900 relative z-10">
        {/* Light Section Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-red-300 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float-light ${6 + Math.random() * 4}s linear infinite`
              }}
            ></div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Work together.
              <br />
              Like in the office.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              Create customized virtual office spaces for any department or event 
              with high quality audio and video conferencing.
            </p>
          </div>

          {/* Video Conference Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 hover:shadow-3xl transition-shadow duration-500 animate-fade-in-up animation-delay-400">
              {/* Conference Header */}
              <div className="bg-gray-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span className="font-medium">Onboarding Meeting</span>
                  <span className="text-gray-400 text-sm">4 participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:scale-110">
                    <Mic className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors duration-300 hover:scale-110">
                    <Video className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-red-600 bg-red-500 rounded-lg transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Main Video Area */}
              <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300">
                {/* Simulated person in main view */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Users className="w-16 h-16 text-gray-600" />
                  </div>
                </div>

                {/* Participant thumbnails */}
                <div className="absolute top-4 right-4 space-y-2">
                  {[1, 2, 3].map((participant) => (
                    <div key={participant} className="w-24 h-16 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors duration-300">
                      <Users className="w-6 h-6 text-gray-400" />
                    </div>
                  ))}
                </div>

                {/* Control buttons */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
                  <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50">
                    <Phone className="w-5 h-5" />
                  </button>
                  <button className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating room cards */}
            <div className="absolute -left-8 top-20 bg-red-500/90 backdrop-blur-sm text-white p-4 rounded-2xl shadow-xl">
              <div className="text-sm font-medium mb-2">Meeting Room</div>
              <div className="flex -space-x-2">
                {[1, 2, 3].map((avatar) => (
                  <div key={avatar} className="w-6 h-6 bg-white/20 rounded-full border-2 border-white"></div>
                ))}
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 bg-slate-800/90 backdrop-blur-sm text-white p-4 rounded-2xl shadow-xl">
              <div className="text-sm font-medium mb-2">Design Week</div>
              <div className="text-xs text-slate-400">Starts at 12:00 PM</div>
              <div className="flex -space-x-2 mt-2">
                {[1, 2].map((avatar) => (
                  <div key={avatar} className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productivity Section */}
      <section className="py-20 relative z-10">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Dashboard Preview */}
          <div className="mb-16">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-500 animate-fade-in-up">
              <div className="text-gray-400 text-sm mb-4">Everything you need for productive team work:</div>
              <div className="flex flex-wrap gap-4 text-white">
                {['Team Planner', 'Project Management', 'Virtual Office', 'Chat', 'Documents', 'Inbox'].map((tool) => (
                  <span key={tool} className="font-medium hover:text-red-400 transition-colors duration-300 cursor-pointer">{tool}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Unmatched productivity
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up animation-delay-200">
              Clouxis is a process, project, time, and knowledge management platform that provides 
              amazing collaboration opportunities for developers and product teams alike.
            </p>
          </div>

          {/* Productivity Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Command Interface */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 relative overflow-hidden group transition-all duration-500 animate-fade-in-up animation-delay-400">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-600/30 to-transparent rounded-full blur-2xl group-hover:from-red-500/40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-black/60 backdrop-blur-sm rounded-lg p-4 mb-6 border border-red-900/20">
                  <div className="flex items-center space-x-2 text-gray-400 text-sm mb-2">
                    <span>ACTIONS</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded animate-pulse"></div>
                    <span className="text-white">Run command...</span>
                    <X className="w-4 h-4 text-gray-500 ml-auto hover:text-red-400 transition-colors cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

            {/* Task Management */}
            <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 relative overflow-hidden group transition-all duration-500 animate-fade-in-up animation-delay-600">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-600/30 to-transparent rounded-full blur-2xl group-hover:from-red-500/40 transition-all duration-500"></div>
              <div className="relative z-10">
                <div className="bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
                  <div className="text-gray-900 font-medium mb-4">Today</div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-red-500 rounded animate-pulse"></div>
                      <div>
                        <div className="text-gray-900 font-medium text-sm">Medium</div>
                        <div className="text-gray-600 text-xs">Perform SEO audit and enhance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        {/* Contact Section Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/50 to-black"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              Contactos
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto animate-pulse-glow"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200">Contacto Direto</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-300">
                  <div className="w-12 h-12 bg-black/60 border border-red-900/50 rounded-xl flex items-center justify-center hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                    <Mail className="w-5 h-5 text-red-400" />
                  </div>
                  <span className="text-gray-300 hover:text-white transition-colors">contato@clouxis.pt</span>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-400">
                  <div className="w-12 h-12 bg-black/60 border border-red-900/50 rounded-xl flex items-center justify-center hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                    <Phone className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">+351 21 123 4567</div>
                    <div className="text-sm text-green-400 font-medium animate-pulse">Atendimento 24/7</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 animate-fade-in-up animation-delay-500">
                  <div className="w-12 h-12 bg-black/60 border border-red-900/50 rounded-xl flex items-center justify-center hover:border-red-500 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
                    <MapPin className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Av. da Liberdade, 123</div>
                    <div className="text-sm text-gray-400">1250-096 Lisboa</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-black/40 backdrop-blur-md border border-red-900/30 hover:border-red-500/50 shadow-xl rounded-2xl transition-all duration-500 animate-fade-in-up animation-delay-600">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-white mb-6 text-center">
                  Entre em Contacto
                </h4>
                
                <form className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Nome"
                      className="border-gray-600 focus:border-red-500 bg-black/50 text-white rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-red-500/25"
                    />
                  </div>
                  
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      className="border-gray-600 focus:border-red-500 bg-black/50 text-white rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-red-500/25"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Mensagem"
                      className="border-gray-600 focus:border-red-500 bg-black/50 text-white rounded-xl transition-all duration-300 focus:shadow-lg focus:shadow-red-500/25"
                      rows={4}
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white py-3 text-lg font-bold rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-red-900/30 text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <img 
                  src="/ClouxisWeb.png" 
                  alt="Clouxis" 
                  className="h-8 w-auto mb-4 brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm">
                Líderes em transformação digital desde 2015.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-red-400">Soluções</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/services/desenvolvimento-dados" className="hover:text-red-400 transition-colors duration-300">Gestão de Dados</Link></li>
                <li><Link href="/services/infraestrutura-cloud" className="hover:text-red-400 transition-colors duration-300">Infraestrutura Cloud</Link></li>
                <li><Link href="/services/seguranca-conformidade" className="hover:text-red-400 transition-colors duration-300">Segurança Empresarial</Link></li>
                <li><Link href="/services/transformacao-digital" className="hover:text-red-400 transition-colors duration-300">Transformação Digital</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-red-400">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Sobre Nós</li>
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Equipa</li>
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Carreiras</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-red-400">Contacto</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">contato@clouxis.pt</li>
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">+351 21 123 4567</li>
                <li className="hover:text-red-400 transition-colors duration-300 cursor-pointer">Lisboa • Porto</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-red-900/30 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Clouxis. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}