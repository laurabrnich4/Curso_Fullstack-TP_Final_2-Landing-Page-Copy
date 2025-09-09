import React from 'react'

function App() {
  return (
    <div class="min-h-screen">
      <section class="flex">
        {/* Panel Izquierdo - Texto y UI */}
        <div class="flex-1 bg-amber-50 p-12 flex flex-col justify-between">
          {/* Logo */}
          <div class="text-2xl font-bold text-gray-800 mb-8">
            Ta
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
              <button class="bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 text-lg font-semibold transition-colors cursor-pointer  ml-20">
                Donate Now
              </button>
            
              <div class="flex items-center gap-4">
                {/* SVG ondulado a la izquierda */}
                <svg
                  class="w-10 h-10"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 20 Q10 0, 20 20 Q30 40, 40 20"
                    stroke="#005F5A"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                {/* Botón circular con texto alrededor */}
                <div class="relative flex items-center justify-center ml-20">
                  <button class="w-16 h-16 bg-[#FDD65B] hover:bg-yellow-500 rounded-full flex items-center justify-center transition-colors cursor-pointer z-10">
                    <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>

                  {/* Texto circular */}
                  <svg
                    viewBox="0 0 80 80"
                    class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 pointer-events-none"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 40, 40 m -30, 0 a 30,30 0 1,1 60,0 a 30,30 0 1,1 -60,0"
                      />
                    </defs>
                    <text fill="black" fontSize="8" letterSpacing={".2rem"} class="font-serif">
                      <textPath href="#circlePath" startOffset="0%">
                        Learn about us through this video
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Redes Sociales */}
          <div class="flex gap-2 text-sm text-gray-700 justify-center gap-11 font-bold">
            <a href="" target='_blank' class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Youtube</span></a>
            <span>•</span>
            <a href="" target='_blank' class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Facebook</span></a>
            <span>•</span>
            <a href="" target='_blank' class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Instagram</span></a>
          </div>
        </div>
        
        {/* Panel Derecho - Navegación e Imagen */}
        <div class="flex-1 relative">
          {/* Barra de Navegación Amarilla */}
          <div class="bg-[#FDD65B] px-8 py-4 flex items-center justify-center pt-10">
            <nav class="flex items-center gap-9 text-gray-600 font-medium">
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>About Us</span></a>  
              <span>•</span>
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Campaign</span></a>
              <span>•</span>
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Contact Us</span></a>
            </nav>
          </div>
          


          {/* Imagen Principal */}
          <div class="bg-gradient-to-br bg-[#FDD65B] flex items-center justify-center relative overflow-hidden">
            <img src="img/hombre-niño.jpg" alt="Imagen de un hombre con un niño y una pelota de futbol" class="w-130 transform -translate-x-44 mt-10"/>
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
      
      <section class="bg-gray-100 py-20 mx-auto px-10 grid grid-cols-1 md:grid-cols-2 justify-center">
        <div class="flex flex-col md:gap-12 mb-12">
          <div class="flex flex-col justify-start">
            <h2 class="text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight mb-4">Support Your <br/> Community</h2>
              <div class="w-16 h-1 bg-black mb-6"></div>
              <p class="text-lg text-gray-700 max-w-lg leading-relaxed">The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary.</p>
          </div>

          <div class="flex flex-row gap-8 md:gap-12">
            <div class="bg-white overflow-hidden">
              <a href="" target='blank_'>
                <img src="public/img/vacunas.jpg" alt="Covid-19" class="w-160 h-auto"/>
                <div class="p-6 text-center">
                  <h3 class="text-xl font-semibold text-gray-800 hover:text-teal-700 duration-300">Covid - 19</h3>
                </div>
              </a>
            </div>
            
            <div class="bg-white overflow-hidden">
              <a href="">
                <img src="public/img/bolsa.jpeg" alt="Food Bank" class="w-160 h-auto"/>
                <div class="p-6 text-center">
                  <h3 class="text-xl font-semibold text-gray-800  hover:text-teal-700 duration-300">Food Bank</h3>
                </div>
              </a>
            </div> 
            <div class="hidden lg:block"></div> 
          </div>
          
        </div>

        <div class="flex flex-col sm:grid-cols-2 lg:grid-cols-3 pl-50">
          <div class="flex flex-col gap-8 text-center md:items-center">
              <a href="" target='_blank' class="w-70">
                <div class="bg-white overflow-hidden mb-13 justify-center">
                  <img src="public/img/botella-vidrio.jpeg" alt="Safe Water" class="w-full h-96 object-cover"/>
                  <div class="p-6 text-center">
                      <h3 class="text-xl font-semibold text-gray-800 hover:text-teal-700 duration-300">Safe Water</h3>
                  </div>
                </div>
              </a>
              <a href="" target='blank_' class="text-lg font-medium text-gray-700 hover:text-teal-700 duration-300 text-decoration-line: underline">View All Campaign</a>
          </div>  
        </div>
      </section>
      
      <section class="bg-amber-50 py-20">
        
        <div class="max-w-7xl mx-auto px-5">
          
          <div class="flex flex-col lg:flex-row items-center gap-12">
            {/* Imagen semicircular a la izquierda */}
            <div class="flex-1 relative">
              <img src="public/img/mujer-hombree.jpg" class="w-90 h-auto rounded-t-full" alt="Voluntarios"/>
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
                <a href="#" class="text-lg font-semibold text-gray-900 hover:text-teal-700 transition-colors duration-300 underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="bg-amber-50 py-20 relative">
        {/* Línea decorativa superior */}
        <div class="absolute top-2 left-20 right-20 h-0.5 bg-gray-300"></div>
        
        <div class="max-w-7xl mx-auto px-5">
          {/* Título */}
          <div class="text-center mb-20"> 
            <h2 class="text-4xl lg:text-5xl font-serif font-bold text-teal-800 mb-4">
              Our Team
            </h2>
            <div class="w-16 h-0.5 bg-gray-500 mx-auto"></div>
          </div>
          
          {/* Perfiles del equipo */}
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Lily Gomez - Founder */}
            <div class="text-center">
              <div class="relative mb-4">
                <img src="img/mujer-sonriendo.png" class="rounded-full" alt="" />
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
                <img src="img/hombre-sonriendoooo.jpeg" class="rounded-full" alt="" />
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
                <img src="img/mujer-sonriendoo.jpg" class="rounded-full" alt="" />
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
                <img src="img/hombre-sonriendo.jpg" class="rounded-full " alt="" />
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
        <div class="absolute bottom-1 left-20 right-20 h-0.5 bg-gray-300"></div>
      </section>
      
      <section class="bg-amber-50 py-25 flex justify-center">
        <div class="max-w-7xl mx-auto px-5">
          <div class="flex flex-col lg:flex-row items-center gap-12">
            {/* Panel izquierdo - Imagen con fondo amarillo */}
            <div class="flex-1 relative">
              <div class="relative w-full h-96 lg:h-[31.25rem]">
                {/* Imagen semicircular */}
                <img src="img/hombre-sonriendoo.jpg" class="w-100 h-auto rounded-b-full" alt="" />
                
                {/* Badge de calificación 5.0 */}
                <div class="absolute top-0 left-0 bg-teal-800 px-5 py-8 flex items-center space-x-1 rounded-b-full">
                  <svg class="w-4 h-4 text-yellow-400 " fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  <span class="text-white font-bold text-sm ">5.0</span>
                </div>
              </div>
            </div>
            
            {/* Panel derecho - Testimonial */}
            <div class="flex-1">
              <div class="bg-white p-8 max-w-lg">
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
                  
                  <button class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors border-none relative">
                    <svg
                      class="absolute top-0 right-0"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      style={{ pointerEvents: 'none' }}
                    >
                      <path
                        d="M40,20 A20,20 0 0,0 20,0"
                        stroke="#FBBF24" // amarillo
                        strokeWidth="4"
                        fill="none"
                      />
                    </svg>
                    {/* Icono o contenido aquí */}
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
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
              <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
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
                <button class="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-r-lg transition-colors duration-300 cursor-pointer">
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
