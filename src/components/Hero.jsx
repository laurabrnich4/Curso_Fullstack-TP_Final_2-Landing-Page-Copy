import Imagen from '../img/Hero/hombre-niño.jpg';

export default function Hero() {
  return (
     <section class="flex">
        {/* Panel Izquierdo - Texto y UI */}
        <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="flex-1 bg-[#F9F4E8] p-12 flex flex-col justify-between tracking-wider">
          {/* Logo */}
          <div class="text-2xl font-bold text-gray-800 mb-8 ">
            T a
          </div>
          
          {/* Contenido Principal */}
          <div class="flex-1 flex flex-col justify-center mx-10">
            {/* Título Principal */}
            <h1 style={{ fontFamily: "Recoleta Bold" }} class="text-5xl font-serif font-bold text-gray-800 mb-6 leading-tight">
              Charity Is An <br /> Act Of A Soft <br /> Heart.
            </h1>
            
            {/* Párrafo */}
            <p style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-lg text-gray-700 mb-8 leading-relaxed tracking-wider">
              We've spent the last 5 years helping over 25,00000 <br /> teams just like yourself create and sustain <br /> successful online support.
            </p>
            
            {/* Botones y Video */}
            <div class="flex items-start gap-8 mb-12">
              {/* Botón Donate Now */}
              <button class="bg-[#00715D] hover:bg-teal-800 text-white px-8 py-4 text-lg transition-colors cursor-pointer tracking-widest">
                Donate Now
              </button>

              

              <div class="flex items-center gap-4">
                <img src="img/flecha.png" class="w-15" alt=""/>
                
                {/* Botón circular con texto alrededor */}
                <div class="relative flex items-center justify-center ml-10">
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
                    <text fill="black" fontSize="8" letterSpacing={".12rem"}>
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
          <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="bg-[#FDD65B] px-8 py-4 flex items-center justify-center pt-10 tracking-wider">
            <nav class="flex items-center gap-9 text-gray-600 font-medium font-semibold">
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>About Us</span></a>  
              <span>•</span>
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Campaign</span></a>
              <span>•</span>
              <a href="" class="hover:text-[#005F5A] transform hover:scale-110 transition"><span>Contact Us</span></a>
            </nav>
          </div>
          


          {/* Imagen Principal */}
          <div class="bg-gradient-to-br bg-[#FDD65B] flex items-center justify-center relative overflow-hidden">
            <img src={Imagen} alt="Imagen de un hombre con un niño y una pelota de futbol" class="w-130 transform -translate-x-44 mt-10"/>
          </div>
        </div>
      </section>
  )
}
