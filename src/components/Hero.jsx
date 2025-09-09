import React from 'react'

const Hero = () => {
  return (
    <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute top-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-1/3 w-80 h-80 bg-white/8 rounded-full blur-3xl"></div>
      </div>
      
      <div class="max-w-7xl mx-auto px-5 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="space-y-8">
            <h1 class="text-5xl lg:text-6xl font-bold leading-tight">
              Transforma tu negocio con{' '}
              <span class="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                tecnología moderna
              </span>
            </h1>
            <p class="text-xl text-white/90 leading-relaxed max-w-2xl">
              Soluciones innovadoras que impulsan el crecimiento de tu empresa. 
              Descubre cómo podemos ayudarte a alcanzar tus objetivos con herramientas 
              de vanguardia y un equipo experto.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="inline-block px-8 py-4 bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold rounded-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                Comenzar ahora
              </a>
              <a href="#features" class="inline-block px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-500 transition-all duration-300 text-center">
                Conocer más
              </a>
            </div>
            <div class="flex flex-wrap gap-8 pt-8">
              <div class="text-center">
                <span class="block text-3xl font-bold text-pink-300">500+</span>
                <span class="text-white/80 text-sm">Clientes satisfechos</span>
              </div>
              <div class="text-center">
                <span class="block text-3xl font-bold text-pink-300">99%</span>
                <span class="text-white/80 text-sm">Satisfacción</span>
              </div>
              <div class="text-center">
                <span class="block text-3xl font-bold text-pink-300">24/7</span>
                <span class="text-white/80 text-sm">Soporte</span>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div class="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <div class="flex space-x-2">
                  <div class="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div class="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div class="p-8">
                <div class="space-y-6">
                  <div>
                    <h3 class="text-xl font-bold text-gray-800 mb-4">Panel de Control</h3>
                    <div class="flex space-x-4">
                      <div class="bg-gray-100 px-4 py-2 rounded-lg text-center">
                        <span class="block text-lg font-bold text-primary-500">+25%</span>
                        <span class="text-sm text-gray-600">Ventas</span>
                      </div>
                      <div class="bg-gray-100 px-4 py-2 rounded-lg text-center">
                        <span class="block text-lg font-bold text-primary-500">1.2K</span>
                        <span class="text-sm text-gray-600">Usuarios</span>
                      </div>
                    </div>
                  </div>
                  <div class="h-24 flex items-end space-x-2">
                    <div class="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: '60%' }}></div>
                    <div class="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: '80%' }}></div>
                    <div class="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: '45%' }}></div>
                    <div class="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: '90%' }}></div>
                    <div class="flex-1 bg-gradient-to-t from-primary-500 to-primary-400 rounded-t" style={{ height: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
