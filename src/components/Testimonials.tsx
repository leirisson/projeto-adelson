import React from 'react';
import { Star, Quote, Building, Phone, User } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      position: "Gerente de Qualidade",
      company: "Indústria Metalúrgica Alpha",
      text: "A ASZ nos ajudou a conquistar a certificação ISO 9001 em tempo recorde. O acompanhamento foi excepcional e os resultados superaram nossas expectativas. Profissionalismo de primeira linha!",
      rating: 5,
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "João Santos",
      position: "Diretor Técnico",
      company: "Clínica Médica Beta",
      text: "Excelente consultoria para adequação às normas da ANVISA. A equipe da ASZ demonstrou conhecimento técnico profundo e nos orientou em cada etapa do processo. Recomendo fortemente!",
      rating: 5,
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    },
    {
      name: "Ana Costa",
      position: "Coordenadora de Qualidade",
      company: "Laboratório Gamma",
      text: "Os treinamentos foram fundamentais para nossa equipe. Metodologia clara, objetiva e muito didática. Nossa produtividade aumentou significativamente após a implementação das melhorias sugeridas.",
      rating: 5,
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  const handleWhatsAppClick = () => {
    const message = "Olá! Vi os depoimentos de clientes e gostaria de saber mais sobre os serviços da ASZ.";
    const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 bg-white relative">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Clientes satisfeitos"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            O que nossos <span className="text-[#3A7D44]">clientes</span> dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os resultados alcançados por empresas que confiaram na ASZ Consultoria.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-[#3A7D44] opacity-50 mb-6" />
              
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-2 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#3A7D44]">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-lg">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-sm text-[#3A7D44] font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#3A7D44] to-[#2E5D89] rounded-full opacity-10"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#3A7D44] to-[#2E5D89] rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">
            Seja você também um cliente satisfeito da ASZ Consultoria
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Junte-se às centenas de empresas que já transformaram seus processos conosco
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center gap-3 bg-white text-[#3A7D44] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Phone className="w-5 h-5" />
            Quero ser o próximo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;