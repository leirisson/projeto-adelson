import React from 'react';
import { Handshake, Award, Shield, CheckCircle, Building2 } from 'lucide-react';

const Partners = () => {
  const certifications = [
    {
      name: "ISO 9001",
      description: "Sistema de Gestão da Qualidade",
      icon: <Award className="w-8 h-8" />
    },
    {
      name: "ISO 14001",
      description: "Sistema de Gestão Ambiental",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "ISO 45001",
      description: "Sistema de Gestão de SST",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      name: "ANVISA",
      description: "Regulamentações Sanitárias",
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "INMETRO",
      description: "Metrologia e Qualidade",
      icon: <Award className="w-8 h-8" />
    }
  ];

  const partnerLogos = [
    {
      name: "Metalúrgica São Paulo",
      logo: "https://via.placeholder.com/200x80/3A7D44/FFFFFF?text=METALÚRGICA+SP",
      sector: "Metalurgia",
      certification: "ISO 9001:2015"
    },
    {
      name: "Clínica Vida & Saúde",
      logo: "https://via.placeholder.com/200x80/2E5D89/FFFFFF?text=VIDA+%26+SAÚDE",
      sector: "Saúde",
      certification: "ANVISA"
    },
    {
      name: "Laboratório Excelência",
      logo: "https://via.placeholder.com/200x80/059669/FFFFFF?text=LAB+EXCELÊNCIA",
      sector: "Análises Clínicas",
      certification: "ISO 15189"
    },
    {
      name: "Alimentos Premium",
      logo: "https://via.placeholder.com/200x80/DC2626/FFFFFF?text=ALIMENTOS+PREMIUM",
      sector: "Alimentício",
      certification: "ISO 22000"
    },
    {
      name: "Construtora Forte",
      logo: "https://via.placeholder.com/200x80/7C3AED/FFFFFF?text=CONSTRUTORA+FORTE",
      sector: "Construção Civil",
      certification: "ISO 45001"
    },
    {
      name: "Hospital Central",
      logo: "https://via.placeholder.com/200x80/0891B2/FFFFFF?text=HOSPITAL+CENTRAL",
      sector: "Saúde",
      certification: "ANVISA + ISO 9001"
    },
    {
      name: "Química Industrial",
      logo: "https://via.placeholder.com/200x80/EA580C/FFFFFF?text=QUÍMICA+INDUSTRIAL",
      sector: "Química",
      certification: "ISO 14001"
    },
    {
      name: "Centro Médico Elite",
      logo: "https://via.placeholder.com/200x80/BE185D/FFFFFF?text=CENTRO+MÉDICO+ELITE",
      sector: "Saúde",
      certification: "Acreditação ONA"
    },
    {
      name: "Indústria Moderna",
      logo: "https://via.placeholder.com/200x80/16A34A/FFFFFF?text=INDÚSTRIA+MODERNA",
      sector: "Industrial",
      certification: "ISO 9001 + 14001"
    },
    {
      name: "Farmácia Nacional",
      logo: "https://via.placeholder.com/200x80/2563EB/FFFFFF?text=FARMÁCIA+NACIONAL",
      sector: "Farmacêutico",
      certification: "ANVISA"
    },
    {
      name: "Tech Solutions",
      logo: "https://via.placeholder.com/200x80/7C2D12/FFFFFF?text=TECH+SOLUTIONS",
      sector: "Tecnologia",
      certification: "ISO 27001"
    },
    {
      name: "Energia Sustentável",
      logo: "https://via.placeholder.com/200x80/15803D/FFFFFF?text=ENERGIA+SUSTENTÁVEL",
      sector: "Energia",
      certification: "ISO 50001"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Parceiros e certificações"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Certificações */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <Handshake className="w-10 h-10 inline-block mr-3 text-[#3A7D44]" />
            Certificações e <span className="text-[#3A7D44]">Especializações</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Somos especialistas nas principais normas e regulamentações do mercado
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-[#2E5D89] mb-4 flex justify-center">
                  {cert.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Parceiros com Logos */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <Building2 className="w-8 h-8 inline-block mr-3 text-[#3A7D44]" />
            Empresas que <span className="text-[#3A7D44]">confiam</span> na ASZ
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            Mais de 200 empresas já alcançaram suas certificações conosco
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {partnerLogos.map((partner, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="text-center">
                  {/* Logo */}
                  <div className="mb-4 h-20 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                    <img 
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
                  
                  {/* Company Info */}
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">{partner.name}</h4>
                  <p className="text-xs text-[#2E5D89] font-medium mb-3">{partner.sector}</p>
                  
                  {/* Certification Badge */}
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    {partner.certification}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logos em Carrossel */}
        <div className="mb-16">
          <h4 className="text-xl font-semibold text-center text-gray-800 mb-8">
            Nossos Parceiros de Sucesso
          </h4>
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-70 hover:opacity-100 transition-opacity">
              {partnerLogos.slice(0, 6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center h-16">
                  <img 
                    src={partner.logo}
                    alt={`Logo ${partner.name}`}
                    className="max-h-12 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#3A7D44] mb-2">200+</div>
            <div className="text-gray-600 font-medium">Empresas Certificadas</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-[#2E5D89] mb-2">15+</div>
            <div className="text-gray-600 font-medium">Anos de Experiência</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
            <div className="text-gray-600 font-medium">Taxa de Aprovação</div>
          </div>
          <div className="text-center bg-white p-6 rounded-xl shadow-md">
            <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Setores Atendidos</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;