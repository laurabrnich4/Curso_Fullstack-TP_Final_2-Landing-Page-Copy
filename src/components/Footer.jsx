import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-16">
      <div class="max-w-7xl mx-auto px-5">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div class="lg:col-span-2">
            <h3 class="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
              MiEmpresa
            </h3>
            <p class="text-gray-300 leading-relaxed mb-6 max-w-md">
              Transformamos ideas en soluciones digitales innovadoras. 
              Tu éxito es nuestro compromiso.
            </p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Facebook">
                📘
              </a>
              <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Twitter">
                🐦
              </a>
              <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="LinkedIn">
                💼
              </a>
              <a href="#" class="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300" aria-label="Instagram">
                📷
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul class="space-y-3">
              <li><a href="#home" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Inicio</a></li>
              <li><a href="#features" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Características</a></li>
              <li><a href="#about" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Acerca de</a></li>
              <li><a href="#contact" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-lg font-bold mb-6">Servicios</h4>
            <ul class="space-y-3">
              <li><a href="#" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Desarrollo Web</a></li>
              <li><a href="#" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Aplicaciones Móviles</a></li>
              <li><a href="#" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Consultoría IT</a></li>
              <li><a href="#" class="text-gray-300 hover:text-primary-400 transition-colors duration-300">Soporte Técnico</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-700 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p class="text-gray-400 text-sm">
              &copy; 2024 MiEmpresa. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Política de Privacidad
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
                Términos de Servicio
              </a>
              <a href="#" class="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300">
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
