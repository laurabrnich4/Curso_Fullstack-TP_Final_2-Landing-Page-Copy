import React from 'react'

function App() {
  return (
    <div class="min-h-screen">
      <section class="flex">
        {/* Panel Izquierdo - Texto y UI */}
        <div class="flex-1 bg-amber-50 p-12 flex flex-col justify-between">
          {/* Logo */}
          <div class="text-2xl font-bold text-gray-800 mb-8">
            Ta:
          </div>
          
          {/* Contenido Principal */}
          <div class="flex-1 flex flex-col justify-center">
            {/* Título Principal */}
            <h1 class="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Charity Is An Act Of A Soft Heart.
            </h1>
            
            {/* Párrafo */}
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">
              We've spent the last 5 years helping over 25,00000 teams just like yourself create and sustain successful online support.
            </p>
            
            {/* Botones y Video */}
            <div class="flex items-start gap-8 mb-12">
              {/* Botón Donate Now */}
              <button class="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 text-lg font-semibold transition-colors">
                Donate Now
              </button>
              
              {/* Video Play Button con texto en arco */}
              <div class="flex items-center gap-4">
                <div class="relative">
                  <button class="w-16 h-16 bg-yellow-400 hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors">
                    <svg class="w-6 h-6 text-gray-800 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  {/* Línea ondulada conectando al botón */}
                  <div class="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-0.5 bg-gray-800 opacity-60"></div>
                </div>
                <div class="flex flex-col">
                  <p class="text-sm text-gray-700 leading-relaxed">
                    Learn about us through this video.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Redes Sociales */}
          <div class="flex items-center gap-2 text-sm text-gray-700">
            <span>Youtube</span>
            <span>•</span>
            <span>Facebook</span>
            <span>•</span>
            <span>Instagram</span>
          </div>
        </div>
        
        {/* Panel Derecho - Navegación e Imagen */}
        <div class="flex-1 relative">
          {/* Barra de Navegación Amarilla */}
          <div class="bg-yellow-400 px-8 py-4 flex items-center justify-end">
            <nav class="flex items-center gap-4 text-gray-800 font-medium">
              <span>About Us</span>
              <span>•</span>
              <span>Campaign</span>
              <span>•</span>
              <span>Contact Us</span>
            </nav>
          </div>
          
          {/* Imagen Principal */}
          <div class="h-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center relative overflow-hidden">
            {/* Fondo con textura de pared */}
            <div class="absolute inset-0 bg-gradient-to-br from-amber-300 to-amber-400 opacity-80"></div>
            
            {/* Escalones simulados */}
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-amber-600 to-amber-500"></div>
            
            {/* Figuras representativas */}
            <div class="relative z-10 flex items-end justify-center space-x-8">
              {/* Hombre */}
              <div class="text-center">
                <div class="w-24 h-32 bg-amber-700 rounded-t-full mb-2 relative">
                  <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-600 rounded-full"></div>
                  <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full"></div>
                </div>
                <div class="w-20 h-16 bg-amber-600 rounded-t-lg"></div>
              </div>
              
              {/* Niño */}
              <div class="text-center">
                <div class="w-16 h-20 bg-amber-600 rounded-t-full mb-2 relative">
                  <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-500 rounded-full"></div>
                  <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full"></div>
                </div>
                <div class="w-16 h-12 bg-amber-500 rounded-t-lg"></div>
                {/* Pelota de fútbol */}
                <div class="w-6 h-6 bg-white rounded-full mx-auto mt-1 border border-amber-400"></div>
              </div>
            </div>
            
            {/* Texto descriptivo */}
            <div class="absolute bottom-4 left-4 text-amber-800 text-sm font-medium">
              Imagen representativa de caridad
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-teal-800 py-16">
        <div class="max-w-7xl mx-auto px-5">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Donation Received */}
            <div class="text-center text-white">
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              <div class="text-3xl font-bold mb-2">985+</div>
              <div class="text-sm text-white/80">Donation Received</div>
            </div>
            
            {/* Money Donated */}
            <div class="text-center text-white">
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <div class="text-3xl font-bold mb-2">$10 M</div>
              <div class="text-sm text-white/80">Money Donated</div>
            </div>
            
            {/* Active Campaigns */}
            <div class="text-center text-white">
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <div class="text-3xl font-bold mb-2">12+</div>
              <div class="text-sm text-white/80">Active Campaigns</div>
            </div>
            
            {/* Charity in last Year */}
            <div class="text-center text-white">
              <div class="mb-4 flex justify-center">
                <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
              <div class="text-3xl font-bold mb-2">$60 M</div>
              <div class="text-sm text-white/80">Charity in last Year</div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-amber-50 py-20">
        <div class="max-w-7xl mx-auto px-5">
          {/* Título y descripción */}
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-6">
              <span class="relative">
                Support Your
                <div class="absolute bottom-0 left-0 w-full h-1 bg-teal-700"></div>
              </span>
              <br />
              Community
            </h2>
            <p class="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary.
            </p>
          </div>
          
          {/* Tarjetas de campañas */}
          <div class="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div class="flex-1 grid md:grid-cols-3 gap-8">
              {/* Covid-19 Card */}
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="h-48 bg-pink-100 flex items-center justify-center">
                  <div class="flex items-center space-x-4">
                    <div class="w-12 h-16 bg-purple-500 rounded-sm"></div>
                    <div class="w-8 h-12 bg-blue-500 rounded-sm"></div>
                  </div>
                </div>
                <div class="p-6 text-center">
                  <h3 class="text-xl font-semibold text-gray-800">Covid - 19</h3>
                </div>
              </div>
              
              {/* Food Bank Card */}
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="h-48 bg-gray-100 flex items-center justify-center">
                  <div class="relative">
                    <div class="w-20 h-24 bg-amber-200 rounded-lg flex items-end justify-center p-2">
                      <div class="w-full h-16 bg-green-500 rounded"></div>
                    </div>
                    <div class="absolute -left-2 top-2 w-4 h-8 bg-amber-300 rounded"></div>
                    <div class="absolute -right-2 top-2 w-4 h-8 bg-amber-300 rounded"></div>
                  </div>
                </div>
                <div class="p-6 text-center">
                  <h3 class="text-xl font-semibold text-gray-800">Food Bank</h3>
                </div>
              </div>
              
              {/* Safe Water Card */}
              <div class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div class="h-48 bg-amber-100 flex items-center justify-center">
                  <div class="relative">
                    <div class="w-8 h-16 bg-amber-300 rounded-t-lg"></div>
                    <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full"></div>
                    <div class="absolute top-8 left-1/2 transform -translate-x-1/2 w-4 h-8 bg-amber-200 rounded"></div>
                  </div>
                </div>
                <div class="p-6 text-center">
                  <h3 class="text-xl font-semibold text-gray-800">Safe Water</h3>
                </div>
              </div>
            </div>
            
            {/* View All Campaign Link */}
            <div class="lg:ml-8 lg:mt-0 mt-8">
              <a href="#" class="text-lg font-medium text-gray-700 hover:text-teal-700 transition-colors duration-300 underline">
                View All Campaign
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-amber-50 py-20">
        <div class="max-w-7xl mx-auto px-5">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagen semicircular a la izquierda */}
            <div class="flex-1 relative">
              <div class="relative w-full h-96 lg:h-[500px]">
                {/* Fondo semicircular */}
                <div class="absolute inset-0 bg-amber-600 rounded-full overflow-hidden">
                  <div class="w-full h-full flex items-center justify-center">
                    {/* Representación de las dos personas */}
                    <div class="flex items-center space-x-8">
                      {/* Hombre (izquierda) */}
                      <div class="text-center">
                        <div class="w-24 h-32 bg-amber-200 rounded-t-full mb-2 relative">
                          <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-amber-300 rounded-full"></div>
                          <div class="absolute top-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-400 rounded-full"></div>
                        </div>
                        <div class="w-20 h-16 bg-amber-100 rounded-t-lg"></div>
                        {/* Badge VOLUNTEER */}
                        <div class="absolute -top-1 -right-2 w-16 h-6 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                          VOLUNTEER
                        </div>
                      </div>
                      
                      {/* Mujer (derecha) */}
                      <div class="text-center">
                        <div class="w-20 h-28 bg-amber-200 rounded-t-full mb-2 relative">
                          <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber-300 rounded-full"></div>
                          <div class="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-400 rounded-full"></div>
                        </div>
                        <div class="w-16 h-12 bg-amber-100 rounded-t-lg"></div>
                        {/* Lanyard */}
                        <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-8 bg-gray-800"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contenido de texto a la derecha */}
            <div class="flex-1">
              <div class="bg-white p-12 rounded-lg shadow-lg max-w-lg">
                <h2 class="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
                  About Us
                </h2>
                <div class="w-16 h-1 bg-teal-700 mb-6"></div>
                <p class="text-lg text-gray-600 leading-relaxed mb-8">
                  The legal definition of a charitable organization (and of charity) varies between countries and in some instances regions of the country. The regulation, the tax treatment, and the way in which charity law affects charitable organizations also vary.
                </p>
                <a href="#" class="text-lg font-medium text-gray-700 hover:text-teal-700 transition-colors duration-300 underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-amber-50 py-20 relative">
        {/* Línea decorativa superior */}
        <div class="absolute top-8 left-20 right-20 h-0.5 bg-gray-300"></div>
        
        <div class="max-w-7xl mx-auto px-5">
          {/* Título */}
          <div class="text-center mb-16">
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-teal-800 mb-4">
              Our Team
            </h2>
            <div class="w-16 h-0.5 bg-gray-300 mx-auto"></div>
          </div>
          
          {/* Perfiles del equipo */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Lily Gomez - Founder */}
            <div class="text-center">
              <div class="relative mb-4">
                <div class="w-32 h-32 bg-yellow-400 rounded-full mx-auto flex items-center justify-center relative">
                  <div class="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center">
                    <div class="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                      <div class="w-12 h-12 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Líneas curvas amarillas */}
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-yellow-400 border-b-0 rounded-t-full"></div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-yellow-400 border-t-0 rounded-b-full"></div>
              </div>
              <h3 class="text-xl font-serif font-bold text-teal-800 mb-1">Lily Gomez</h3>
              <p class="text-gray-600">Founder</p>
            </div>
            
            {/* Dm Lincoln - Co-Founder */}
            <div class="text-center">
              <div class="relative mb-4">
                <div class="w-32 h-32 bg-teal-800 rounded-full mx-auto flex items-center justify-center relative">
                  <div class="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center">
                    <div class="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                      <div class="w-12 h-12 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Líneas curvas verdes */}
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-teal-800 border-b-0 rounded-t-full"></div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-teal-800 border-t-0 rounded-b-full"></div>
              </div>
              <h3 class="text-xl font-serif font-bold text-teal-800 mb-1">Dm Lincoln</h3>
              <p class="text-gray-600">Co-Founder</p>
            </div>
            
            {/* Serena Mei - Manager */}
            <div class="text-center">
              <div class="relative mb-4">
                <div class="w-32 h-32 bg-yellow-400 rounded-full mx-auto flex items-center justify-center relative">
                  <div class="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center">
                    <div class="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                      <div class="w-12 h-12 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Líneas curvas amarillas */}
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-yellow-400 border-b-0 rounded-t-full"></div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-yellow-400 border-t-0 rounded-b-full"></div>
              </div>
              <h3 class="text-xl font-serif font-bold text-teal-800 mb-1">Serena Mei</h3>
              <p class="text-gray-600">Manager</p>
            </div>
            
            {/* Abdel Latif - Superviser */}
            <div class="text-center">
              <div class="relative mb-4">
                <div class="w-32 h-32 bg-teal-800 rounded-full mx-auto flex items-center justify-center relative">
                  <div class="w-24 h-24 bg-amber-200 rounded-full flex items-center justify-center">
                    <div class="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center">
                      <div class="w-12 h-12 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
                {/* Líneas curvas verdes */}
                <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-teal-800 border-b-0 rounded-t-full"></div>
                <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-8 border-2 border-teal-800 border-t-0 rounded-b-full"></div>
              </div>
              <h3 class="text-xl font-serif font-bold text-teal-800 mb-1">Abdel Latif</h3>
              <p class="text-gray-600">Superviser</p>
            </div>
          </div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div class="absolute bottom-8 left-20 right-20 h-0.5 bg-gray-300"></div>
      </section>
      
      <section class="bg-amber-50 py-20">
        <div class="max-w-7xl mx-auto px-5">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            {/* Panel izquierdo - Imagen con fondo amarillo */}
            <div class="flex-1 relative">
              <div class="relative w-full h-96 lg:h-[500px]">
                {/* Fondo amarillo semicircular */}
                <div class="absolute inset-0 bg-yellow-400 rounded-t-full overflow-hidden">
                  <div class="w-full h-full flex items-center justify-center">
                    {/* Representación de la persona */}
                    <div class="text-center">
                      <div class="w-48 h-48 bg-amber-200 rounded-full mx-auto mb-4 flex items-center justify-center relative">
                        <div class="w-40 h-40 bg-amber-300 rounded-full flex items-center justify-center">
                          <div class="w-32 h-32 bg-amber-400 rounded-full flex items-center justify-center">
                            <div class="w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center">
                              <div class="w-16 h-16 bg-amber-600 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Badge de calificación 5.0 */}
                <div class="absolute top-8 left-8 bg-teal-800 rounded-lg px-3 py-2 flex items-center space-x-2">
                  <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span class="text-white font-bold text-sm">5.0</span>
                </div>
              </div>
            </div>
            
            {/* Panel derecho - Testimonial */}
            <div class="flex-1">
              <div class="bg-white rounded-lg shadow-lg p-8 max-w-lg">
                <blockquote class="text-lg text-gray-700 leading-relaxed mb-8">
                  "We're very happy that the challegne went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."
                </blockquote>
                
                <div class="mb-8">
                  <h3 class="text-2xl font-bold text-gray-800 mb-1">Mustafa Kamal</h3>
                  <p class="text-gray-600">Ceo, Toogle</p>
                </div>
                
                {/* Navegación con flechas */}
                <div class="flex items-center space-x-4">
                  <button class="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                    </svg>
                  </button>
                  
                  <button class="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors border border-yellow-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-teal-800 py-16 relative overflow-hidden">
        {/* Patrones de fondo con líneas onduladas */}
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-10 left-10 w-32 h-32 bg-teal-600 rounded-full blur-xl"></div>
          <div class="absolute top-20 right-20 w-24 h-24 bg-teal-500 rounded-full blur-lg"></div>
          <div class="absolute bottom-10 left-1/4 w-40 h-40 bg-teal-700 rounded-full blur-2xl"></div>
          <div class="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-600 rounded-full blur-lg"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-5 relative z-10">
          <div class="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Texto a la izquierda */}
            <div class="flex-1">
              <h2 class="text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Let's Help Other With<br />
                Your Charity
              </h2>
            </div>
            
            {/* Botón a la derecha */}
            <div class="flex-shrink-0">
              <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="bg-amber-50 py-16">
        <div class="max-w-7xl mx-auto px-5">
          {/* Contenido principal del footer */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Newsletter */}
            <div>
              <h3 class="text-xl font-serif font-bold text-gray-800 mb-4">Newsletter</h3>
              <p class="text-gray-600 mb-4">Subscribe to our newsletter to get more informations</p>
              <div class="flex">
                <input 
                  type="email" 
                  placeholder="Email" 
                  class="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <button class="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-r-lg transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 class="text-xl font-serif font-bold text-gray-800 mb-4">Navigation</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Home</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Campaign</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Team</a></li>
              </ul>
            </div>
            
            {/* About Us */}
            <div>
              <h3 class="text-xl font-serif font-bold text-gray-800 mb-4">About Us</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">About Us</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Contact</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Address</a></li>
              </ul>
            </div>
            
            {/* Help */}
            <div>
              <h3 class="text-xl font-serif font-bold text-gray-800 mb-4">Help</h3>
              <ul class="space-y-2">
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Donar Guide</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">FAQ</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">We Are Hiring</a></li>
                <li><a href="#" class="text-gray-600 hover:text-teal-700 transition-colors duration-300">Returns</a></li>
              </ul>
            </div>
          </div>
          
          {/* Línea separadora */}
          <div class="border-t border-gray-300 mb-8"></div>
          
          {/* Créditos del diseñador */}
          <div class="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>Designed By Tanim Khan</p>
            <a href="#" class="hover:text-teal-700 transition-colors duration-300">WWW.Dribbble.Com/Tanim_ui</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
