import Vacunas from '../img/CampaignSection/vacunas.jpg';
import Bolsa from '../img/CampaignSection/bolsa.jpeg';
import Botella from '../img/CampaignSection/botella-vidrio.jpeg';

export default function CampaignSection() {
  return (
      <section class="bg-[#F9F4E8] py-20 grid grid-cols-1 md:grid-cols-[auto_450px] flex justify-center gap-3 min-h-screen">
        <div class="flex flex-col md:gap-10 mb-12 max-w-6xl mx-auto pl-30">
          <div class="flex flex-col">
            <h2 style={{ fontFamily: "Recoleta Bold" }}  class="text-5xl lg:text-6xl font-serif font-bold text-gray-800 leading-tight mb-4">Support Your <br/> Community</h2>
              <div class="w-16 h-1 bg-black mb-6"></div>
              <p style={{ fontFamily: "VAG Rounded LT W04 Thin" }} class="text-lg text-gray-700 tracking-wide">The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary.</p>
          </div>

          <div class="flex flex-row gap-3">
            <div class="bg-white">
              <a href="" target='blank_'>
                <img src={Vacunas} alt="Covid-19" class="w-300 h-67"/>
                <div class="p-6 text-center">
                  <h3 style={{ fontFamily: "Recoleta Bold" }} class="text-xl font-semibold text-gray-800 hover:text-teal-700 duration-300">Covid - 19</h3>
                </div>
              </a>
            </div>
            
            <div class="bg-white">
              <a href="" target='blank_'>
                <img src={Bolsa} alt="Food Bank" class="w-300"/>
                <div class="p-6 text-center flex items-center justify-center">
                  <h3 style={{ fontFamily: "Recoleta Bold" }} class="text-xl font-semibold text-gray-800  hover:text-teal-700 duration-300 ">Food Bank</h3>
                </div>
              </a>
            </div> 
            <div class=""></div> 
          </div>
        </div>

        <div class="flex justify-left">
          <div class="flex flex-col text-center md:items-center">
              <a href="" target='_blank' class="w-70">
                <div class="bg-white mb-13 justify-center">
                  <img src={Botella} alt="Safe Water" class="w-full h-96 object-cover"/>
                  <div class="p-6 text-center">
                      <h3 style={{ fontFamily: "Recoleta Bold" }} class="text-xl font-semibold text-gray-800 hover:text-teal-700 duration-300">Safe Water</h3>
                  </div>
                </div>
              </a>
              <a style={{ fontFamily: "VAG Rounded LT W04 Thin" }} href="" target='blank_' class="text-lg font-medium text-gray-900 hover:text-teal-700 duration-300 text-decoration-line: underline tracking-wide">View All Campaign</a>
          </div>  
        </div>
      </section>
  )
}