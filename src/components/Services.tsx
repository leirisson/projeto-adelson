import React from 'react';
import { 
  MapPin, 
  Shield, 
  FileCheck, 
  Award, 
  GraduationCap, 
  Settings, 
  ClipboardCheck,
  Phone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Mapeamento de Processos",
      description: "Identificação e otimização de processos organizacionais para maior eficiência."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Gestão de Riscos e Mudanças",
      description: "Análise, avaliação e controle de riscos com implementação de mudanças estratégicas."
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "Auditorias Internas",
      description: "Auditorias completas para garantir conformidade e identificar oportunidades de melhoria."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Consultoria para Certificações ISO",
      description: "Suporte completo para obtenção de certificações ISO 9001, 14001, 45001 e outras."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Treinamentos Presenciais e Online",
      description: "Capacitação de equipes em normas ISO, qualidade e sistemas de gestão."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Programa 5S",
      description: "Implementação da metodologia 5S para organização e melhoria do ambiente de trabalho."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Suporte ANVISA e INMETRO",
      description: "Adequação às regulamentações específicas da ANVISA e INMETRO."
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços da ASZ Consultoria.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Consultoria de processos"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que <span className="text-[#3A7D44]">fazemos</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em consultoria e treinamento para sua empresa alcançar os mais altos padrões de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="text-[#2E5D89] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button
                onClick={handleWhatsAppClick}
                className="text-[#3A7D44] hover:text-[#2E5D89] font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Saiba mais
              </button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-[#3A7D44] hover:bg-[#2E5D89] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Solicitar Orçamento Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;