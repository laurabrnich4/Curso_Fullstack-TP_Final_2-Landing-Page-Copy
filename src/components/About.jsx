import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
              Acerca de Nosotros
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos un equipo apasionado de desarrolladores y diseñadores que creemos 
                en el poder de la tecnología para transformar negocios. Con más de 5 años 
                de experiencia, hemos ayudado a cientos de empresas a digitalizar sus 
                procesos y alcanzar sus objetivos.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nuestra misión es democratizar el acceso a herramientas tecnológicas 
                de alta calidad, haciendo que la innovación esté al alcance de todos, 
                independientemente del tamaño de su empresa.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 py-8">
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-500">5+</span>
                <span className="text-gray-600 text-sm">Años de experiencia</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-500">500+</span>
                <span className="text-gray-600 text-sm">Proyectos completados</span>
              </div>
              <div className="text-center">
                <span className="block text-4xl font-bold text-primary-500">50+</span>
                <span className="text-gray-600 text-sm">Equipo de expertos</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center">
                Trabajar con nosotros
              </a>
              <a href="#" className="inline-block px-8 py-4 border-2 border-primary-500 text-primary-500 font-semibold rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300 text-center">
                Ver portfolio
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    JD
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Juan Díaz</h4>
                    <p className="text-gray-600 text-sm">CEO & Fundador</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    MS
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">María Silva</h4>
                    <p className="text-gray-600 text-sm">CTO</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    AL
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Ana López</h4>
                    <p className="text-gray-600 text-sm">Lead Designer</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white">
                <div className="text-3xl">💼</div>
                <div>
                  <h4 className="font-bold text-lg">Equipo multidisciplinario</h4>
                  <p className="text-white/90 text-sm">Expertos en desarrollo, diseño y estrategia digital</p>
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
