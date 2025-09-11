export default function StatisticsSection() {
    return(
        <section class="bg-[#00715D] py-16">
            <div class="max-w-7xl mx-auto px-5">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Donation Received */}
                    <div class="text-center text-white">
                    <div class="mb-4 flex justify-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <img src="img/images.jpeg" class='rounded-full' alt="" />
                        </div>
                    </div>
                    <div style={{ fontFamily: 'Recoleta Bold' }} class="text-3xl font-bold mb-2">985+</div>
                    <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-sm text-white/80 tracking-widest">Donation Received</div>
                    </div>
                    
                    {/* Money Donated */}
                    <div class="text-center text-white">
                    <div class="mb-4 flex justify-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <img src="img/icono-caja.jpg" alt="" />
                        </div>
                    </div>
                    <div style={{ fontFamily: 'Recoleta Bold' }} class="text-3xl font-bold mb-2">$10 M</div>
                    <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-sm text-white/80 tracking-widest">Money Donated</div>
                    </div>
                    
                    {/* Active Campaigns */}
                    <div class="text-center text-white">
                    <div class="mb-4 flex justify-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <img src="img/icono-sonido.png" class="rounded-full" alt="" />
                        </div>
                    </div>
                    <div style={{ fontFamily: 'Recoleta Bold' }} class="text-3xl font-bold mb-2">12+</div>
                    <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-sm text-white/80 tracking-widest">Active Campaigns</div>
                    </div>
                    
                    {/* Charity in last Year */}
                    <div class="text-center text-white">
                    <div class="mb-4 flex justify-center">
                        <div class="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                        <img src="img/pazz.png" class="rounded-full" alt="" />
                        </div>
                    </div>
                    <div style={{ fontFamily: 'Recoleta Bold' }} class="text-3xl font-bold mb-2">$60 M</div>
                    <div style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-sm text-white/80 tracking-widest">Charity in last Year</div>
                    </div>
                </div>
            </div>
      </section>
    )
}
