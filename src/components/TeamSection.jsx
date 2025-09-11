export default function TeamSection() {
    return(
        <section class="bg-[#F9F4E8] py-20 relative">
            {/* Línea decorativa superior */}
            <div class="absolute top-2 left-20 right-20 h-0.5 bg-gray-300"></div>
            
            <div class="max-w-7xl mx-auto px-5">
            {/* Título */}
            <div class="text-center mb-20"> 
                <h2 style={{ fontFamily: "Recoleta Bold" }} class="text-4xl lg:text-6xl font-black text-black mb-4">
                Our Team
                </h2>
                <div class="w-16 h-0.5 bg-gray-500 mx-auto"></div>
            </div>
            
            {/* Perfiles del equipo */}
            <div class="h-100 w-300 flex justify-center">
                <img src="img/foto.png" alt="" />
            </div>
            </div>
            
            {/* Línea decorativa inferior */}
            <div class="absolute bottom-0 left-20 right-20 h-0.5 bg-gray-300"></div>
      </section>
    )
}
