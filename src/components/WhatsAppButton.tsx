import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de consultoria da ASZ. Podem me ajudar?";
    const whatsappNumber = '5592981234567'; // Substitua pelo número real
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2 group"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:inline-block font-medium group-hover:inline-block">
          Fale Conosco
        </span>
      </button>
      
      {/* Tooltip para mobile */}
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap md:hidden">
        Clique para conversar
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default WhatsAppButton;