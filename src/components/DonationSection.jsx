export default function DonationSection() {
    return(
        <section class="bg-[#00715D] py-30 relative overflow-hidden">
            <div class="max-w-7xl mx-auto px-15 relative z-10">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    {/* Texto a la izquierda */}
                    <div class="flex-1">
                    <h2 class="text-6xl lg:text-6xl font-serif font-bold text-white leading-tight">
                        Let's Help Other With<br/>
                        Your Charity
                    </h2>
                    </div>
                    
                    {/* Botón a la derecha */}
                    <div class="flex-shrink-0">
                    <button class="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold px-8 py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                        Donate Now
                    </button>
                    </div>
                </div>
            </div>
      </section>
    )
}

