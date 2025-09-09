import React from 'react'

const About = () => {
  return (
    <section id="about" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <h2 class="text-4xl lg:text-5xl font-bold text-gray-800">
              Acerca de Nosotros
            </h2>
            <div class="space-y-6">
              <p class="text-lg text-gray-600 leading-relaxed">
                Somos un equipo apasionado de desarrolladores y diseñadores que creemos 
                en el poder de la tecnología para transformar negocios. Con más de 5 años 
                de experiencia, hemos ayudado a cientos de empresas a digitalizar sus 
                procesos y alcanzar sus objetivos.
              </p>
              <p class="text-lg text-gray-600 leading-relaxed">
                Nuestra misión es democratizar el acceso a herramientas tecnológicas 
                de alta calidad, haciendo que la innovación esté al alcance de todos, 
                independientemente del tamaño de su empresa.
              </p>
            </div>
            
            <div class="flex flex-wrap gap-8 py-8">
              <div class="text-center">
                <span class="block text-4xl font-bold text-primary-500">5+</span>
                <span class="text-gray-600 text-sm">Años de experiencia</span>
              </div>
              <div class="text-center">
                <span class="block text-4xl font-bold text-primary-500">500+</span>
                <span class="text-gray-600 text-sm">Proyectos completados</span>
              </div>
              <div class="text-center">
                <span class="block text-4xl font-bold text-primary-500">50+</span>
                <span class="text-gray-600 text-sm">Equipo de expertos</span>
              </div>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <a href="#contact" class="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                Trabajar con nosotros
              </a>
              <a href="#" class="inline-block px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-center">
                Ver portfolio
              </a>
            </div>
          </div>
          
          <div class="flex justify-center lg:justify-end">
            <div class="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div class="space-y-6 mb-8">
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">Juan Díaz</h4>
                    <p class="text-gray-600 text-sm">CEO & Fundador</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">María Silva</h4>
                    <p class="text-gray-600 text-sm">CTO</p>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div>
                    <h4 class="font-bold text-gray-800">Ana López</h4>
                    <p class="text-gray-600 text-sm">Lead Designer</p>
                  </div>
                </div>
              </div>
              <div class="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white">
                <div class="text-3xl">💼</div>
                <div>
                  <h4 class="font-bold text-lg">Equipo multidisciplinario</h4>
                  <p class="text-white/90 text-sm">Expertos en desarrollo, diseño y estrategia digital</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
