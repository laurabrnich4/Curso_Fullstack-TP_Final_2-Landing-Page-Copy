import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-5">
        <nav class="flex justify-between items-center py-4">
          <div class="flex-shrink-0">
            <a href="#home" class="text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              MiEmpresa
            </a>
          </div>
          
          <div class={`md:flex md:items-center md:space-x-8 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white shadow-lg flex flex-col p-8 space-y-4 transform translate-y-0 opacity-100 visible' : 'hidden md:flex'}`}>
            <a href="#home" class="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
            <a href="#features" class="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsMenuOpen(false)}>
              Características
            </a>
            <a href="#about" class="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsMenuOpen(false)}>
              Acerca de
            </a>
            <a href="#contact" class="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-300 relative after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
            <a href="#contact" class="inline-block px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 md:ml-4 mt-4 md:mt-0" onClick={() => setIsMenuOpen(false)}>
              Comenzar
            </a>
          </div>
          
          <div class="md:hidden flex flex-col cursor-pointer" onClick={toggleMenu}>
            <span class={`w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span class={`w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span class={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
