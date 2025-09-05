import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              MiEmpresa
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Tu éxito es nuestro compromiso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Facebook">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Twitter">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Inicio</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Características</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Acerca de</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Desarrollo Web</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Aplicaciones Móviles</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Consultoría IT</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-300">Soporte Técnico</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2024 MiEmpresa. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
