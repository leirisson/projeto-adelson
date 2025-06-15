import React from 'react';
import { Shield, Mail, Instagram, Phone, MapPin, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ASZ Consultoria</h3>
                <p className="text-gray-400 text-sm">Sistemas de Gestão Integrada</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Especialistas em certificações ISO, conformidade ANVISA e INMETRO, 
              com documentação técnica e ART do CREA-AM.
            </p>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contatos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="mailto:asz.gestao@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  asz.gestao@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a href="https://instagram.com/aszconsultoria.sgi" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  @aszconsultoria.sgi
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">Atendimento Nacional</span>
              </div>
            </div>
          </div>

          {/* Credenciamentos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Credenciamentos</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">CREA-AM Credenciado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Documentação com ART</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">Auditor Líder Certificado</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold text-green-400 mb-2">Órgãos Reconhecidos:</h5>
              <p className="text-sm text-gray-400">
                CREA-AM • IBAMA • CONAMA • IPAM • SEMMAS • ANVISA • INMETRO
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400">
                © 2024 ASZ Consultoria & Treinamento. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span>ISO 9001 • ISO 14001 • ISO 45001 • ISO 13485</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;