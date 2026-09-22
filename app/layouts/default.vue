<!-- <template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
    
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-2xl font-extrabold text-orange-600 tracking-wide">
          Kecilung Resto
        </NuxtLink>

        <nav class="hidden md:flex space-x-8 items-center font-medium">
          <NuxtLink to="/" class="hover:text-orange-500 transition-colors">Home</NuxtLink>
          <NuxtLink to="/about" class="hover:text-orange-500 transition-colors">About Us</NuxtLink>

          <div class="relative group py-4">
            <button class="flex items-center gap-1 hover:text-orange-500 transition-colors focus:outline-none">
              Our Menu
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div class="absolute left-0 mt-4 w-52 bg-white rounded-md shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
              <div class="py-2">
                <NuxtLink to="/menu/main-course" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Main Course</NuxtLink>
                <NuxtLink to="/menu/rice-noodle" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Rice & Noodle</NuxtLink>
                <NuxtLink to="/menu/vegetables" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Vegetables</NuxtLink>
                <NuxtLink to="/menu/snacks" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Snacks</NuxtLink>
                <NuxtLink to="/menu/drinks-dessert" class="block px-4 py-2 text-sm hover:bg-orange-50 hover:text-orange-600 transition-colors">Drinks & Dessert</NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink to="/catering" class="hover:text-orange-500 transition-colors">Catering</NuxtLink>
          <NuxtLink to="/moment" class="hover:text-orange-500 transition-colors">Moment</NuxtLink>
          <NuxtLink to="/articles" class="hover:text-orange-500 transition-colors">Articles</NuxtLink>
        </nav>

        <button class="md:hidden flex items-center text-gray-600 hover:text-orange-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 class="text-xl font-bold text-white mb-4">Kecilung Resto</h3>
            <p class="text-sm leading-relaxed text-gray-400">
              Menyajikan perpaduan autentik cita rasa Nusantara dengan standar kualitas terbaik. Nikmati pengalaman bersantap istimewa bersama keluarga dan kolega Anda di tempat kami.
            </p>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Tautan Cepat</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/about" class="hover:text-orange-500 transition-colors">Tentang Kami</NuxtLink></li>
              <li><NuxtLink to="/menu" class="hover:text-orange-500 transition-colors">Daftar Menu</NuxtLink></li>
              <li><NuxtLink to="/catering" class="hover:text-orange-500 transition-colors">Layanan Catering</NuxtLink></li>
              <li><NuxtLink to="/moment" class="hover:text-orange-500 transition-colors">Galeri Momen</NuxtLink></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul class="space-y-3 text-sm text-gray-400">
              <li class="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Jl. Pahlawan No. 123, Surabaya, Jawa Timur, Indonesia</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>+62 812 3456 7890</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {{ new Date().getFullYear() }} Kecilung Resto. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template> -->

<!-- <template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
    
    <AppHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <AppFooter />
    
  </div>
</template> -->

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800 relative overflow-x-hidden">
    
    <!-- Komponen Header Otomatis Dipanggil -->
    <AppHeader />

    <!-- MAIN CONTENT -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Komponen Footer Otomatis Dipanggil -->
    <AppFooter />
    
    <!-- ============================================== -->
    <!-- FLOATING WHATSAPP BUTTON                       -->
    <!-- ============================================== -->
    <!-- Ganti angka 6281234567890 dengan nomor WA Anda -->
    <a 
      href="https://wa.me/6281803116688?text=Halo%20Kecilung%20Resto,%20saya%20ingin%20bertanya%20seputar..." 
      target="_blank" 
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.3)] hover:scale-110 transition-all duration-300 group flex items-center justify-center cursor-pointer"
      aria-label="Chat WhatsApp"
    >
      <!-- Tooltip Teks (Muncul saat di-hover) -->
      <span class="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100">
        Hubungi Kami
      </span>
      
      <!-- Icon SVG WhatsApp (Cepat di-load & Tidak pecah) -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 md:w-9 md:h-9 fill-current">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157.1zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
    </a>

  </div>
</template>