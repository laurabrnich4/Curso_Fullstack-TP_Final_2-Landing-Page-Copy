import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Contáctanos
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Listo para comenzar? Estamos aquí para ayudarte a transformar tu negocio
          </p>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16">
          <div class="space-y-8">
            <h3 class="text-2xl font-bold text-gray-800">Información de Contacto</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div class="text-2xl">📧</div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">Email</h4>
                  <p class="text-gray-600">hola@miempresa.com</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div class="text-2xl">📱</div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">Teléfono</h4>
                  <p class="text-gray-600">+54 11 1234-5678</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div class="text-2xl">📍</div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">Dirección</h4>
                  <p class="text-gray-600">
                    Av. Corrientes 1234<br />
                    Buenos Aires, Argentina
                  </p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg">
                <div class="text-2xl">⏰</div>
                <div>
                  <h4 class="font-bold text-gray-800 mb-1">Horarios</h4>
                  <p class="text-gray-600">
                    Lun - Vie: 9:00 - 18:00<br />
                    Sáb: 9:00 - 13:00
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-8 rounded-3xl shadow-2xl">
            <form class="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre completo"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="company" class="block text-sm font-semibold text-gray-700 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nombre de tu empresa"
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                class="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
