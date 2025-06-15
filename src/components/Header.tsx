import React from 'react';
import { Shield, Phone, Mail, Instagram } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">ASZ Consultoria</h1>
              <p className="text-sm text-gray-600">Sistemas de Gestão Integrada</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>Atendimento Nacional</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>asz.gestao@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Instagram className="w-4 h-4" />
              <span>@aszconsultoria.sgi</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;