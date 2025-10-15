import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button';
import Card from '../components/shared/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert('¡Mensaje enviado! Te responderemos pronto.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "info@ecodent.cr",
      link: "mailto:info@ecodent.cr"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+506 2222-3333",
      link: "tel:+50622223333"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "San José, Costa Rica",
      link: null
    }
  ];

  const faqs = [
    {
      question: "¿Cómo funciona la suscripción?",
      answer: "Recibes cabecillas automáticamente cada 3 o 6 meses según tu plan. Puedes pausar o cancelar cuando quieras."
    },
    {
      question: "¿Cuánto tiempo dura cada cabecilla?",
      answer: "Cada cabecilla está diseñada para durar aproximadamente 3 meses con uso regular."
    },
    {
      question: "¿Cómo planto las semillas?",
      answer: "Simplemente entierra la cabecilla usada en tierra húmeda. Las semillas germinarán en 7-15 días."
    },
    {
      question: "¿Envían a toda Costa Rica?",
      answer: "Sí, hacemos envíos a todo el país. El envío es gratis en todos los pedidos."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-cream">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Información de Contacto
              </h2>
              {contactInfo.map((info, index) => (
                <Card key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a href={info.link} className="text-gray-700 hover:text-secondary transition-colors">
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-700">{info.content}</p>
                    )}
                  </div>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-primary to-secondary text-white">
                <MessageCircle className="w-12 h-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Horario de Atención
                </h3>
                <p className="text-gray-200">
                  Lunes a Viernes<br />
                  9:00 AM - 6:00 PM
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-primary mb-6">
                  Envíanos un Mensaje
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Nombre Completo"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      label="Teléfono"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <Input
                    label="Asunto"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    icon={Send}
                    loading={isSubmitting}
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Preguntas Frecuentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
