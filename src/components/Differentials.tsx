import React from 'react';
import { Award, Users, MapPin, FileText, GraduationCap, Shield } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    {
      icon: Award,
      title: 'Auditor Líder Certificado',
      description: 'Múltiplas normas ISO 9001, 14001, 45001 e 13485',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Expertise ANVISA',
      description: 'Especialista em RDCs 15, 216, 222, 275, 665',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Atuação Nacional',
      description: 'Atendimento em todo território brasileiro',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Engenheiros especialistas em SGI',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Documentação Técnica',
      description: 'Credenciamento CREA-AM com ART',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: GraduationCap,
      title: 'Docente Qualificado',
      description: 'Professor de Ensino Superior',
      color: 'from-teal-500 to-teal-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Por que escolher a ASZ Consultoria?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expertise técnica, credibilidade e resultados comprovados em sistemas de gestão integrada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const IconComponent = diff.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
                  <div className={`w-16 h-16 bg-gradient-to-r ${diff.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {diff.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Differentials;