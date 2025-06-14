import React from 'react';
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Olá! Gostaria de entrar em contato com a ASZ Consultoria.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              ASZ <span className="text-green-400">Consultoria</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em consultoria e treinamentos ISO, ANVISA e INMETRO. 
              Transformamos empresas através da excelência em gestão.
            </p>
            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Falar Conosco
            </button>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatos</h4>
            <div className="space-y-3">
              <a 
                href="mailto:asz.gestao@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                asz.gestao@gmail.com
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </button>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                São Paulo, SP
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
            <div className="space-y-3">
              <a 
                href="https://instagram.com/aszconsultoria.sgi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @aszconsultoria.sgi
              </a>
              <a 
                href="https://youtube.com/@ASZTreinamentos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
                ASZ Treinamentos
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 ASZ Consultoria & Treinamento. Todos os direitos reservados.
            </div>
            <div className="flex gap-4 text-sm text-gray-400">
              <span>Certificações ISO</span>
              <span>•</span>
              <span>ANVISA</span>
              <span>•</span>
              <span>INMETRO</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;