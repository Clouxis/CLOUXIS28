'use client';

import { useState } from 'react';
import { ArrowLeft, Zap, Cog, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function TransformacaoDigital() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Consultoria em Transformação Digital",
      subtitle: "Roadmaps para indústrias tradicionais",
      icon: <Zap className="w-8 h-8" />,
      description: "Estratégias personalizadas para modernizar indústrias tradicionais com tecnologia de ponta e processos otimizados.",
      features: [
        "Análise completa da maturidade digital",
        "Roadmap estratégico personalizado",
        "Change management especializado",
        "Formação e capacitação de equipas",
        "Acompanhamento contínuo da transformação"
      ],
      benefits: [
        "ROI visível em 6 meses",
        "Aumento de produtividade em 40%",
        "Redução de custos operacionais",
        "Vantagem competitiva sustentável"
      ]
    },
    {
      title: "Automação de Processos (RPA)",
      subtitle: "Redução de tarefas manuais em 70%",
      icon: <Cog className="w-8 h-8" />,
      description: "Robotic Process Automation que elimina tarefas repetitivas e liberta as suas equipas para atividades de maior valor.",
      features: [
        "Identificação de processos automatizáveis",
        "Desenvolvimento de bots inteligentes",
        "Integração com sistemas existentes",
        "Monitorização e otimização contínua",
        "Escalabilidade automática"
      ],
      benefits: [
        "70% redução em tarefas manuais",
        "99.9% precisão em processos",
        "Disponibilidade 24/7",
        "ROI em menos de 12 meses"
      ]
    },
    {
      title: "Integração de Sistemas Legacy",
      subtitle: "Modernização sem rupturas",
      icon: <RefreshCw className="w-8 h-8" />,
      description: "Modernização gradual de sistemas antigos sem interromper operações críticas do negócio.",
      features: [
        "Análise de sistemas legacy existentes",
        "Estratégia de modernização faseada",
        "APIs de integração robustas",
        "Migração de dados segura",
        "Testes extensivos e validação"
      ],
      benefits: [
        "Zero downtime durante migração",
        "Preservação de dados críticos",
        "Melhoria de performance",
        "Redução de custos de manutenção"
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
              <Zap className="w-8 h-8 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
              Transformação <span className="text-red-600">Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Modernize processos, automatize operações e integre sistemas para acelerar a evolução digital do seu negócio.
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
                Solicitar Assessment
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
                    <h4 className="font-semibold mb-2">Abordagem Gradual</h4>
                    <p className="text-red-100 text-sm">
                      Transformação faseada que minimiza riscos e garante continuidade operacional durante todo o processo.
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
            Acelere a sua Transformação Digital
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Modernize o seu negócio com estratégias comprovadas e tecnologia de ponta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
              Assessment Digital Gratuito
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