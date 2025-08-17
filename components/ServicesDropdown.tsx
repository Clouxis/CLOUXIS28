'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Database, Cloud, Shield, Zap, Code, BarChart3, Brain, Cog, RefreshCw, Server, Eye, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

interface ServiceCategory {
  title: string;
  items: ServiceItem[];
}

const servicesData: ServiceCategory[] = [
  {
    title: "Soluções",
    items: [
      {
        icon: <Database className="w-5 h-5" />,
        title: "Gestão de Dados",
        description: "Transforme dados em insights",
        href: "/services/desenvolvimento-dados"
      },
      {
        icon: <Cloud className="w-5 h-5" />,
        title: "Infraestrutura Cloud",
        description: "Soluções escaláveis e seguras",
        href: "/services/infraestrutura-cloud"
      },
      {
        icon: <Shield className="w-5 h-5" />,
        title: "Segurança Empresarial",
        description: "Proteção avançada 24/7",
        href: "/services/seguranca-conformidade"
      },
      {
        icon: <Zap className="w-5 h-5" />,
        title: "Transformação Digital",
        description: "Modernize processos e sistemas",
        href: "/services/transformacao-digital"
      }
    ]
  },
  {
    title: "Especialidades",
    items: [
      {
        icon: <Code className="w-5 h-5" />,
        title: "Software Personalizado",
        description: "Web, Mobile e ERP sob medida",
        href: "/services/desenvolvimento-dados"
      },
      {
        icon: <BarChart3 className="w-5 h-5" />,
        title: "Analytics Inteligente",
        description: "BI em tempo real",
        href: "/services/desenvolvimento-dados"
      },
      {
        icon: <Brain className="w-5 h-5" />,
        title: "Machine Learning",
        description: "Dashboards preditivos",
        href: "/services/desenvolvimento-dados"
      },
      {
        icon: <Server className="w-5 h-5" />,
        title: "Auto-scaling",
        description: "Kubernetes e orquestração",
        href: "/services/infraestrutura-cloud"
      },
      {
        icon: <Eye className="w-5 h-5" />,
        title: "GDPR Automatizado",
        description: "Compliance contínuo",
        href: "/services/seguranca-conformidade"
      },
      {
        icon: <Cog className="w-5 h-5" />,
        title: "Automação RPA",
        description: "70% menos tarefas manuais",
        href: "/services/transformacao-digital"
      }
    ]
  }
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <button className="flex items-center space-x-1 text-black hover:text-red-400 transition-all duration-300 relative group py-2">
        <span>Serviços</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Dropdown Menu */}
      <div className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-200 ${
        isOpen 
          ? 'opacity-100 visible translate-y-0' 
          : 'opacity-0 invisible translate-y-2'
      }`}>
        <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl p-6 w-[600px]">
          <div className="grid grid-cols-2 gap-8">
            {servicesData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4 font-mono">
                  {category.title}
                </h3>
                <div className="space-y-1">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="flex items-start space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-all duration-300 group"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="w-8 h-8 bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center group-hover:border-blue-500 transition-all duration-300">
                        <div className="text-red-400 group-hover:text-red-300 transition-colors">
                          {item.icon}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-white group-hover:text-red-400 transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-6 pt-6 border-t border-slate-700/50">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium text-white">
                  Precisa de uma solução personalizada?
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  Fale connosco para uma consulta gratuita
                </p>
              </div>
              <Link
                href="/#contact"
                className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-medium rounded-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;