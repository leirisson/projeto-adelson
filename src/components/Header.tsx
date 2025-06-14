import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const Header = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços da ASZ Consultoria.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <header className="relative bg-gradient-to-br from-[#3A7D44] to-[#2E5D89] text-white overflow-hidden min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Consultoria empresarial"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#3A7D44]/80 to-[#2E5D89]/80"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
              ASZ <span className="text-green-300">Consultoria</span>
            </h1>
            <p className="text-xl md:text-3xl font-light opacity-90">& Treinamento</p>
          </div>

          {/* Frase de Impacto */}
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Consultoria e Treinamentos <span className="text-green-300">ISO</span> para sua empresa alcançar <span className="text-yellow-300">excelência!</span>
          </h2>

          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transforme sua organização com nossos serviços especializados em certificações ISO, ANVISA e INMETRO.
          </p>

          {/* CTA Principal */}
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <Phone className="w-6 h-6" />
            Falar no WhatsApp
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className="text-sm mt-4 opacity-75">Orçamento gratuito • Resposta rápida</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
    </header>
  );
};

export default Header;