import React from 'react';
import { Award, Shield, CheckCircle, Star } from 'lucide-react';

const SocialProof = () => {
  const certifications = [
    { name: 'ISO 9001', type: 'Qualidade', color: 'from-blue-500 to-blue-600' },
    { name: 'ISO 14001', type: 'Meio Ambiente', color: 'from-green-500 to-green-600' },
    { name: 'ISO 45001', type: 'Segurança', color: 'from-orange-500 to-orange-600' },
    { name: 'ISO 13485', type: 'Dispositivos Médicos', color: 'from-purple-500 to-purple-600' }
  ];

  const anvisaRDCs = [
    'RDC 15 - Alimentos',
    'RDC 216 - Boas Práticas',
    'RDC 222 - Resíduos',
    'RDC 275 - Água',
    'RDC 665 - Equipamentos'
  ];

  const partnerships = [
    { name: 'CREA-AM', desc: 'Credenciamento Oficial' },
    { name: 'IBAMA', desc: 'Licenciamento Ambiental' },
    { name: 'CONAMA', desc: 'Outorgas de Água' },
    { name: 'IPAM', desc: 'Relatórios Ambientais' },
    { name: 'SEMMAS', desc: 'Gestão Ambiental' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificações e Credibilidade
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reconhecimento oficial e parcerias estratégicas
          </p>
        </div>

        {/* Certificações ISO */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Certificações ISO
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 text-center mb-2">
                  {cert.name}
                </h4>
                <p className="text-gray-600 text-center text-sm">
                  {cert.type}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RDCs ANVISA */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Conformidade ANVISA
          </h3>
          <div className="bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {anvisaRDCs.map((rdc, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{rdc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parcerias */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Órgãos e Parcerias
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  {partner.name}
                </h4>
                <p className="text-sm text-gray-600">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Selo de Qualidade */}
        <div className="mt-16 bg-gradient-to-r from-green-600 to-blue-600 text-white p-8 rounded-xl text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Star className="w-8 h-8" />
            <h3 className="text-2xl font-bold">Garantia de Qualidade</h3>
            <Star className="w-8 h-8" />
          </div>
          <p className="text-lg text-white/90">
            Todos os serviços com documentação técnica, ART do CREA-AM e garantia de conformidade
          </p>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;