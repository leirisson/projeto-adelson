import React from 'react';
import { CheckCircle, FileCheck, Settings, TrendingUp, Users, AlertTriangle } from 'lucide-react';

const QualityServices = () => {
  const services = [
    {
      icon: CheckCircle,
      title: 'ISO 9001 (SGQ)',
      description: 'Sistema de Gestão da Qualidade completo'
    },
    {
      icon: FileCheck,
      title: 'ISO 13485 (Saúde)',
      description: 'Dispositivos médicos e equipamentos'
    },
    {
      icon: Settings,
      title: 'Mapeamento de Processos',
      description: 'Análise e otimização de fluxos'
    },
    {
      icon: TrendingUp,
      title: 'Gestão de Riscos',
      description: 'Identificação e controle de riscos'
    },
    {
      icon: Users,
      title: 'ANVISA (RDCs)',
      description: 'RDC 15, 216, 222, 275, 665'
    },
    {
      icon: AlertTriangle,
      title: 'INMETRO (Portarias)',
      description: 'Conformidade regulatória'
    }
  ];

  const additionalServices = [
    'Gestão de Mudanças',
    'Análise Crítica da Direção',
    'Tratativas de Não Conformidades',
    'Programa 5S',
    'Auditorias Especializadas',
    'Treinamentos Regulatórios'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Consultoria em Qualidade e Normas Regulatórias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Implementação e certificação de sistemas de gestão da qualidade
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Serviços Complementares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityServices;