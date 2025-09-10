export default function Footer() {
  return(
    <footer class="bg-[#F9F4E8] py-16">
        <div class="max-w-6xl mx-auto px-5">
          {/* Contenido principal del footer */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-15 mx-auto justify-items-center">
            {/* Newsletter */}
            <div>
              <h3 class="text-xl font-serif font-bold text-gray-800 mb-4">Newsletter</h3>
              <p class="text-gray-600 mb-4">Subscribe to our newsletter to get more informations</p>
              <div class="flex">
                <input  
                  type="email" 
                  placeholder="Email" 
                  class="bg-white flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent placeholder:text-black"
                />
                <button class="bg-[#00715D] hover:bg-teal-800 text-white px-6 py-3 transition-colors duration-300 cursor-pointer">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Navigation */}
            <div class="ml-23">
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
  )
}
