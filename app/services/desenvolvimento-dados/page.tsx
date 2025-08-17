'use client';

import { useState } from 'react';
import { ArrowLeft, Code, BarChart3, Brain, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function DesenvolvimentoDados() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Desenvolvimento de Software Sob Medida",
      subtitle: "Web/Mobile/ERP",
      icon: <Code className="w-8 h-8" />,
      description: "Soluções de software personalizadas que se adaptam perfeitamente aos processos únicos do seu negócio.",
      features: [
        "Desenvolvimento web responsivo e moderno",
        "Aplicações mobile nativas e híbridas",
        "Sistemas ERP integrados",
        "APIs robustas e escaláveis",
        "Arquitetura microserviços"
      ],
      benefits: [
        "Time-to-market 50% mais rápido",
        "Integração perfeita com sistemas existentes",
        "Escalabilidade automática",
        "Manutenção e suporte contínuo"
      ]
    },
    {
      title: "Plataformas Inteligentes com Analytics",
      subtitle: "BI em tempo real",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Dashboards inteligentes e analytics embebidos que transformam dados em insights acionáveis instantaneamente.",
      features: [
        "Dashboards interativos em tempo real",
        "Analytics embebido em aplicações",
        "Visualizações personalizáveis",
        "Alertas automáticos baseados em KPIs",
        "Relatórios automatizados"
      ],
      benefits: [
        "Decisões 3x mais rápidas",
        "Visibilidade total do negócio",
        "ROI mensurável em tempo real",
        "Automação de relatórios"
      ]
    },
    {
      title: "Ciência de Dados Aplicada",
      subtitle: "Machine Learning + dashboards preditivos",
      icon: <Brain className="w-8 h-8" />,
      description: "Modelos de machine learning e analytics preditivos que antecipam tendências e otimizam operações.",
      features: [
        "Modelos de ML personalizados",
        "Analytics preditivos avançados",
        "Processamento de big data",
        "Automação de insights",
        "Dashboards preditivos interativos"
      ],
      benefits: [
        "Previsões com 90%+ de precisão",
        "Otimização automática de processos",
        "Redução de custos operacionais",
        "Vantagem competitiva sustentável"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <img 
                src="/ClouxisWeb.png" 
                alt="Clouxis" 
                className="h-8 w-auto"
              />
            </Link>
            <Link href="/" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
              <Code className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Desenvolvimento & <span className="text-red-600">Dados</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Software inteligente e analytics avançados que transformam dados em vantagem competitiva para o seu negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeService === index
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Service Info */}
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                  <div className="text-red-600">
                    {services[activeService].icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-gray-900">
                    {services[activeService].title}
                  </h2>
                  <p className="text-red-600 font-medium">
                    {services[activeService].subtitle}
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Características Principais
                </h3>
                <ul className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                Solicitar Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Benefits Card */}
            <div>
              <Card className="bg-gradient-to-br from-red-50 to-white border-0 shadow-xl">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                    Benefícios Garantidos
                  </h3>
                  <div className="space-y-4">
                    {services[activeService].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-4"></div>
                        <span className="text-gray-800 font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-red-600 rounded-lg text-white">
                    <h4 className="font-semibold mb-2">Metodologia Ágil</h4>
                    <p className="text-red-100 text-sm">
                      Desenvolvimento iterativo com entregas frequentes e feedback contínuo para garantir o sucesso do projeto.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Transforme Dados em Vantagem Competitiva
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Desenvolva soluções inteligentes que impulsionam o crescimento do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Agendar Demo Personalizada
            </Button>
            <Link href="/#contact">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                Entrar em Contacto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}