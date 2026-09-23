<!-- <template>
  <div class="min-h-screen bg-gray-100 flex font-sans text-gray-800">
    <aside class="w-64 bg-gray-900 text-white flex flex-col">
      <div
        class="p-6 text-xl font-bold border-b border-gray-800 text-orange-500"
      >
        Admin Kecilung
      </div>
      <nav class="flex-1 p-4 space-y-2 text-sm font-medium">
        <NuxtLink
          to="/admin/category/category_page"
          class="block py-2.5 px-4 rounded transition-colors hover:bg-gray-800"
          active-class="bg-gray-800 text-orange-400"
        >
          Manajemen Kategori
        </NuxtLink>
        <NuxtLink
          to="/admin/menu/menu_page"
          class="block py-2.5 px-4 rounded transition-colors hover:bg-gray-800"
          active-class="bg-gray-800 text-orange-400"
        >
          Manajemen Menu
        </NuxtLink>

        <NuxtLink
          to="/admin/catering/catering_page"
          class="block py-2.5 px-4 rounded transition-colors hover:bg-gray-800"
          active-class="bg-gray-800 text-orange-400"
        >
          Manajemen Katering
        </NuxtLink>
        <NuxtLink
          to="/admin/moment/moment_page"
          class="block py-2.5 px-4 rounded transition-colors hover:bg-gray-800"
          active-class="bg-gray-800 text-orange-400"
        >
          Manajemen Momen
        </NuxtLink>
        <NuxtLink
          to="/admin/article/article_page"
          class="block py-2.5 px-4 rounded transition-colors hover:bg-gray-800"
          active-class="bg-gray-800 text-orange-400"
        >
          Artikel
        </NuxtLink>
      </nav>
      <div class="p-4 border-t border-gray-800">
        <NuxtLink
          to="/"
          class="text-sm text-gray-400 hover:text-white transition-colors"
        >
          &larr; Lihat Web Publik
        </NuxtLink>
      </div>
    </aside>

    <main class="flex-1 overflow-y-auto">
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template> -->

<template>
  <div class="min-h-screen bg-gray-50 flex font-sans text-gray-800">
    
    <!-- ============================== -->
    <!-- SIDEBAR (Fixed Kiri)           -->
    <!-- ============================== -->
    <aside class="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white flex flex-col z-50 shadow-2xl transition-transform duration-300">
      
      <!-- Logo Resto -->
      <div class="h-16 flex items-center justify-center border-b border-gray-800 bg-gray-950">
        <NuxtLink to="/admin">
          <img src="/assets/images/kecilung_logo.webp" alt="Kecilung Resto" class="h-10 w-auto object-contain" />
        </NuxtLink>
      </div>
      
      <!-- Navigasi Utama -->
      <nav class="flex-1 overflow-y-auto p-4 space-y-2 text-sm font-medium hide-scrollbar">
        
        <!-- Menu Category -->
        <NuxtLink to="/admin/category/category_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          Category
        </NuxtLink>

        <!-- Menu Menu -->
        <NuxtLink to="/admin/menu/menu_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Menu
        </NuxtLink>

        <!-- Menu Catering -->
        <NuxtLink to="/admin/catering/catering_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
          </svg>
          Catering
        </NuxtLink>

        <!-- Menu Moment -->
        <NuxtLink to="/admin/moment/moment_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Moment
        </NuxtLink>

        <!-- Menu Article -->
        <NuxtLink to="/admin/article/article_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
          </svg>
          Article
        </NuxtLink>

        <!-- Menu Pesan (Contact Us) - Opsional Jika Nanti Diperlukan -->
        <NuxtLink to="/admin/contact/contact_page" class="flex items-center gap-3 py-3 px-4 rounded-lg transition-all duration-200 hover:bg-gray-800 hover:text-orange-400 group" active-class="bg-gray-800 text-orange-400 border-l-4 border-orange-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-70 group-hover:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Pesan
        </NuxtLink>

      </nav>

      <!-- Tombol Logout Bawah -->
      <div class="p-4 border-t border-gray-800 bg-gray-950">
        <button class="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-2.5 rounded-lg font-bold transition-all shadow-lg transform hover:-translate-y-0.5">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </aside>

    <!-- ============================== -->
    <!-- HEADER ATAS (Fixed Kanan Atas) -->
    <!-- ============================== -->
    <header class="fixed top-0 right-0 left-64 h-16 bg-white shadow-sm border-b border-gray-200 z-40 flex items-center justify-between px-6 transition-all duration-300">
      
      <!-- Tombol Hamburger Kiri -->
      <button class="text-gray-500 hover:text-gray-800 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </button>

      <!-- Profil Admin Kanan -->
      <div class="flex items-center gap-4">
        <div class="flex flex-col text-right hidden sm:block">
          <span class="text-sm font-bold text-gray-900 block leading-tight">Admin Kecilung</span>
          <span class="text-xs text-gray-500">Super Admin</span>
        </div>
        
        <!-- Avatar Dummy -->
        <button class="relative rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
          <img 
            src="https://ui-avatars.com/api/?name=Admin+Kecilung&background=f97316&color=fff" 
            alt="Profil Admin" 
            class="h-10 w-10 rounded-full object-cover border-2 border-gray-200 shadow-sm hover:border-orange-500 transition-colors"
          />
          <!-- Status Online Bulat Hijau -->
          <span class="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
        </button>
      </div>

    </header>

    <!-- ============================== -->
    <!-- MAIN CONTENT AREA              -->
    <!-- ============================== -->
    <!-- pl-64: Menyediakan ruang di kiri untuk Sidebar selebar 64 (256px) -->
    <!-- pt-16: Menyediakan ruang di atas untuk Header setinggi 16 (64px) -->
    <main class="flex-1 overflow-x-hidden overflow-y-auto pl-64 pt-16 min-h-screen">
      <!-- Area konten dinamis -->
      <div class="p-6 md:p-8">
        <slot />
      </div>
    </main>

  </div>
</template>

<style scoped>
/* Sembunyikan scrollbar pada menu navigasi tapi biarkan tetap bisa di scroll */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
