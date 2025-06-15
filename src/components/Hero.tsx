import React from 'react';
import { Shield, Award, CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Consultoria Especializada em{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
              Sistemas de Gestão Integrada
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Qualidade, Meio Ambiente e Saúde Ocupacional
          </p>
          <p className="text-lg text-gray-600 mb-10 max-w-5xl mx-auto">
            <strong>Certificações ISO 9001, ISO 14001, ISO 45001 e ISO 13485</strong> | 
            Conformidade ANVISA (RDC 15, 216, 222, 275, 665) e INMETRO | 
            Treinamentos NR-1 a NR-38
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToForm}
              className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Fale com nosso especialista
              <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-sm text-gray-600">
              ✅ Checklist gratuito de adequação às normas
            </p>
          </div>
        </div>

        {/* Selos de Certificação */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { name: 'ISO 9001', desc: 'Sistema de Gestão da Qualidade' },
            { name: 'ISO 14001', desc: 'Sistema de Gestão Ambiental' },
            { name: 'ISO 45001', desc: 'Saúde e Segurança Ocupacional' },
            { name: 'ISO 13485', desc: 'Dispositivos Médicos' }
          ].map((cert, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 text-center mb-2">{cert.name}</h3>
              <p className="text-sm text-gray-600 text-center">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;