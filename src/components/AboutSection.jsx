export default function AboutSection() {
  return(
    <section class="relative bg-[#F9F4E8] py-20 flex justify-center"> 
        {/* Línea decorativa superior */}
        <div class="absolute top-2 left-20 right-20 h-0.5 bg-gray-300"></div>
        
        <div class="max-w-7xl mx-auto px-5">
          
          <div class="flex flex-col lg:flex-row items-end">
            {/* Imagen semicircular a la izquierda */}
            <div class=" relative flex">
              <img src="public/img/mujer-hombree.jpg" class="w-90 h-auto rounded-t-full" alt="Voluntarios"/>
            </div>
            
            {/* Contenido de texto a la derecha */}
            <div class="flex-1">
              <div class="bg-white p-12 rounded-lg max-w-lg">
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
  )
}
