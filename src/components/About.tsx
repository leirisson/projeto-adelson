import React from 'react';
import { GraduationCap, Award, Users, Shield, FileText, Star } from 'lucide-react';

const About = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Engenheiro Ambiental e de Segurança do Trabalho'
    },
    {
      icon: Users,
      title: 'Experiência Docente',
      description: 'Professor de Ensino Superior'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Auditor Líder ISO 9001, 14001, 45001 e 13485'
    },
    {
      icon: Shield,
      title: 'Gestão Estratégica',
      description: 'Gerente de SGI e Projetos'
    },
    {
      icon: FileText,
      title: 'Credenciamento',
      description: 'CREA-AM com documentação técnica ART'
    },
    {
      icon: Star,
      title: 'Especialização',
      description: 'Expert em normas ANVISA e INMETRO'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça o Especialista
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adelson Souza - Expertise técnica e credibilidade comprovada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 p-8 rounded-2xl">
              <div className="w-32 h-32 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Users className="w-16 h-16 text-white" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Adelson Souza</h3>
                <p className="text-lg text-gray-600 mb-4">Fundador e Consultor Sênior</p>
                <div className="flex justify-center space-x-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">CREA-AM</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">ISO Lead Auditor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {credentials.map((cred, index) => {
              const IconComponent = cred.icon;
              return (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      {cred.title}
                    </h4>
                    <p className="text-gray-600">
                      {cred.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Diferencial Técnico</h3>
            <p className="text-lg mb-4">
              Todos os nossos serviços incluem documentação técnica com ART (Anotação de Responsabilidade Técnica) 
              do CREA-AM, garantindo credibilidade e conformidade legal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Documento + ART CREA-AM</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Atendimento Nacional</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">Equipe Multidisciplinar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;