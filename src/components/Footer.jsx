export default function Footer (){
  
    return <>
         <footer class="bg-gray-900 text-gray-300 py-12 px-6">
  <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

    
    <div>
     <h1 className="ml-3 text-4xl font-bold
      bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
       bg-clip-text text-transparent">
        <i>ServiceHive</i>
      </h1>
      <p class="text-gray-400 text-sm leading-6">
        At ServiceHive, we bring verified home service professionals right to your doorstep with transparent pricing, fast booking, and guaranteed satisfaction.
      </p>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Company</h3>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="/about-us" class="hover:text-white">About Us</a></li>
        <li><a href="/careers" class="hover:text-white">Careers</a></li>
        <li><a href="/investors" class="hover:text-white">Investor Relations</a></li>
        <li><a href="/contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Support</h3>
      <ul class="space-y-2 text-gray-400 text-sm">
        <li><a href="/help" class="hover:text-white">Help Center</a></li>
        <li><a href="/terms" class="hover:text-white">Terms & Conditions</a></li>
        <li><a href="/privacy" class="hover:text-white">Privacy Policy</a></li>
        <li><a href="/refunds" class="hover:text-white">Refund Policy</a></li>
      </ul>
    </div>

   
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Connect with Us</h3>
      <div class="flex space-x-4 mb-4">
        <a href="#" class="hover:text-white">Instagram</a>
        <a href="#" class="hover:text-white">Facebook</a>
        <a href="#" class="hover:text-white">Twitter</a>
      </div>
      <p class="text-gray-500 text-sm">
        © 2025 ServiceHive. All Rights Reserved.
      </p>
    </div>

  </div>
</footer>

           </>
}