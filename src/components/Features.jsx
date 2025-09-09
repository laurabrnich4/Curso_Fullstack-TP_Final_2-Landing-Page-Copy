import React from 'react'

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Rendimiento Superior',
      description: 'Optimizado para máxima velocidad y eficiencia en todos los dispositivos.'
    },
    {
      icon: '🔒',
      title: 'Seguridad Avanzada',
      description: 'Protección de datos de nivel empresarial con encriptación de extremo a extremo.'
    },
    {
      icon: '📱',
      title: 'Diseño Responsivo',
      description: 'Experiencia perfecta en desktop, tablet y móvil con diseño adaptativo.'
    },
    {
      icon: '⚡',
      title: 'Implementación Rápida',
      description: 'Configuración en minutos, no en días. Comienza a trabajar inmediatamente.'
    },
    {
      icon: '🎨',
      title: 'Personalización Total',
      description: 'Adapta cada aspecto de la plataforma a las necesidades de tu negocio.'
    },
    {
      icon: '📊',
      title: 'Analytics Avanzados',
      description: 'Métricas detalladas y reportes en tiempo real para optimizar tu rendimiento.'
    }
  ]

  return (
    <section id="features" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-5">
        <div class="text-center mb-16">
          <h2 class="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Características Principales
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las funcionalidades que hacen de nuestra plataforma 
            la mejor opción para tu negocio
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div class="text-5xl mb-6 text-center">
                {feature.icon}
              </div>
              <h3 class="text-xl font-bold text-gray-800 mb-4 text-center">
                {feature.title}
              </h3>
              <p class="text-gray-600 leading-relaxed text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
