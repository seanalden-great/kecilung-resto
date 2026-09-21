<!-- File: app/layouts/admin.vue -->
<template>
  <div class="min-h-screen bg-gray-100 flex font-sans text-gray-800">
    <!-- Sidebar Admin -->
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

        <!-- Tambahan Menu Manajemen Katering -->
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
        <!-- Tambahkan baris ini di dalam menu navigasi sidebar admin.vue Anda -->
        <NuxtLink
          to="/admin/article/article_page"
          class="flex items-center gap-2 p-2 rounded hover:bg-gray-200 transition"
          active-class="bg-blue-100 text-blue-700 font-bold"
        >
          <!-- Boleh tambahkan icon di sini -->
          <span>Artikel</span>
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

    <!-- Konten Utama Admin -->
    <main class="flex-1 overflow-y-auto">
      <div class="p-8">
        <slot />
      </div>
    </main>
  </div>
</template>
