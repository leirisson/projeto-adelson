import React, { useState } from 'react';
import { Phone, Send, User, Building, Mail, MessageSquare } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: ''
  });

  const services = [
    'Consultoria ISO 9001',
    'Consultoria ISO 14001',
    'Consultoria ISO 45001',
    'Auditoria Interna',
    'Treinamentos',
    'Programa 5S',
    'Adequação ANVISA',
    'Adequação INMETRO',
    'Outro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar mensagem para WhatsApp
    let message = `Olá! Solicito orçamento para:\n\n`;
    message += `Nome: ${formData.name}\n`;
    if (formData.company) message += `Empresa: ${formData.company}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Telefone: ${formData.phone}\n`;
    message += `Serviço: ${formData.service}\n\n`;
    message += `Aguardo retorno. Obrigado!`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#3A7D44] to-[#2E5D89]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Solicite seu <span className="text-green-300">orçamento gratuito</span>
            </h2>
            <p className="text-lg opacity-90">
              Preencha o formulário e receba uma proposta personalizada em até 24 horas
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Empresa */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              {/* Telefone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Serviço */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-2" />
                  Qual serviço está buscando? *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A7D44] focus:border-transparent transition-all"
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                className="w-full bg-[#3A7D44] hover:bg-[#2E5D89] text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Falar no WhatsApp
              </button>

              <p className="text-sm text-gray-600 text-center">
                Ao enviar, você será redirecionado para o WhatsApp com sua mensagem pronta
              </p>
            </form>
          </div>

          {/* Garantias */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-white text-center">
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold">24h</div>
              <div className="text-sm">Resposta rápida</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Orçamento gratuito</div>
            </div>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;