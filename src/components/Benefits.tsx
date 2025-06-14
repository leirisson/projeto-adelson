import React from 'react';
import { CheckCircle, TrendingUp, Shield, AlertTriangle, Phone } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-10 h-10" />,
      title: "Redução de Não Conformidades",
      description: "Minimize erros e falhas nos processos com nossos sistemas de gestão eficazes.",
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Melhoria da Organização e Produtividade",
      description: "Otimize processos e aumente a eficiência operacional da sua empresa.",
      color: "text-blue-600"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Conformidade com Normas ISO e ANVISA",
      description: "Garanta total adequação às regulamentações e normas do seu setor.",
      color: "text-purple-600"
    },
    {
      icon: <AlertTriangle className="w-10 h-10" />,
      title: "Prevenção de Riscos e Multas",
      description: "Evite penalidades e garanta a segurança da sua operação.",
      color: "text-orange-600"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Quero saber como a ASZ pode ajudar minha empresa a alcançar esses benefícios.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Por que escolher a <span className="text-[#3A7D44]">ASZ</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforme sua empresa com resultados comprovados e benefícios tangíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${benefit.color} mb-4`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {benefit.description}
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="text-[#3A7D44] hover:text-[#2E5D89] font-medium text-sm flex items-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Quero esses resultados
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#3A7D44] to-[#2E5D89] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Pronto para transformar sua empresa?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se às empresas que já alcançaram a excelência com a ASZ Consultoria.
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="bg-white text-[#3A7D44] hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;