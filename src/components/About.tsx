import React from 'react';
import { Star, Award, Users, Phone, CheckCircle, Calendar, Trophy } from 'lucide-react';

const About = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de conversar com o especialista Adelson Souza sobre consultoria ISO.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const achievements = [
    { icon: <CheckCircle className="w-5 h-5" />, text: "Certificado Lead Auditor ISO 9001" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Especialista em ISO 14001 e 45001" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Consultor ANVISA e INMETRO" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Formação em Engenharia de Qualidade" }
  ];

  return (
    <section className="py-16 bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Especialista em consultoria"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Conheça nosso <span className="text-[#3A7D44]">especialista</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mais de 15 anos transformando empresas através da excelência em gestão
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo Section */}
            <div className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                    alt="Adelson Souza - Especialista em Sistemas de Gestão"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#3A7D44] text-white p-4 rounded-xl shadow-lg">
                  <Trophy className="w-8 h-8" />
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
                <div className="flex items-center gap-2 bg-gradient-to-r from-[#3A7D44] to-[#2E5D89] text-white px-4 py-2 rounded-full shadow-sm">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">15+ Anos</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-sm">
                  <Award className="w-4 h-4" />
                  <span className="text-sm font-medium">ISO Expert</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full shadow-sm">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">200+ Clientes</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">
                  Adelson Souza
                </h3>
                <p className="text-xl text-[#3A7D44] font-semibold mb-4">
                  Especialista em Sistemas de Gestão
                </p>
                <div className="flex items-center gap-2 text-yellow-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="text-gray-600 ml-2">Avaliação dos clientes</span>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-600 mb-8">
                <p className="text-lg leading-relaxed">
                  Com mais de 15 anos de experiência em sistemas de gestão, Adelson Souza é especialista reconhecido em 
                  certificações ISO e regulamentações em setores altamente regulados.
                </p>
                <p className="leading-relaxed">
                  Formado em Engenharia com especializações em Qualidade e Gestão, já conduziu centenas de projetos 
                  de implementação e certificação, sempre com foco em resultados práticos e sustentáveis.
                </p>
                <p className="leading-relaxed">
                  Sua expertise abrange desde pequenas empresas até grandes corporações, com histórico comprovado 
                  de sucesso em diversos setores industriais, clínicas e laboratórios.
                </p>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Qualificações e Certificações:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-3 text-[#3A7D44]">
                      {achievement.icon}
                      <span className="text-sm text-gray-700">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-gradient-to-br from-[#3A7D44] to-[#2E5D89] text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-xs opacity-90">Empresas Atendidas</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-purple-500 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-xs opacity-90">Taxa de Sucesso</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white p-4 rounded-lg text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-xs opacity-90">Anos de Experiência</div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 bg-gradient-to-r from-[#3A7D44] to-[#2E5D89] hover:from-[#2E5D89] hover:to-[#3A7D44] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Falar com o Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;