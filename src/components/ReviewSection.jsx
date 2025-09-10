export default function ReviewSection() { 
    return(
        <section class="bg-[#F9F4E8] py-25 flex justify-center">
        <div class="max-w-4xl mx-auto px-5">
          <div class="flex lg:flex-row items-center items-start">
            {/* Panel izquierdo - Imagen con fondo amarillo */}
            <div class="relative">
              <div class="relative w-full h-96 lg:h-[31.25rem]">
                {/* Imagen semicircular */}
                <img src="img/hombre-sonriendoo.jpg" class="w-100 h-auto rounded-b-full" alt="" />
                
                {/* Badge de calificación 5.0 */}
                <div class="absolute top-0 left-0 bg-teal-800 px-6 py-8 flex items-center space-x-1 rounded-b-full">
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
                <p class="text-lg text-gray-700 leading-relaxed mb-8">
                  "We're very happy that the challegne went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."
                </p>
                
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
    )
}
