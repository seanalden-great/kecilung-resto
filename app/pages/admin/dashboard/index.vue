<template>
  <div class="container mx-auto p-6 md:p-8 space-y-8">
    <!-- Header -->
    <div class="flex items-center justify-between gap-4 border-b border-gray-200 pb-6 bg-white p-6 rounded-2xl shadow-sm">
      <div>
        <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">Dashboard Overview</h1>
        <p class="text-gray-600 mt-1">Selamat datang kembali, {{ currentAdmin.name }}. Berikut ringkasan data Kecilung Resto.</p>
      </div>
      <div class="text-sm font-medium text-gray-500 bg-gray-100 px-4 py-2 rounded-full shadow-inner">
        {{ currentDate }}
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="pending" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="bg-red-50 text-red-700 p-6 rounded-2xl border border-red-200 text-center shadow-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
      <h3 class="font-bold text-lg">Gagal Memuat Data Dashboard</h3>
      <p class="mt-1 text-sm">{{ error.message || 'Terjadi kesalahan pada server.' }}</p>
    </div>

    <!-- Stat Cards Grid (Domain Data Summary) -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      
      <!-- Card: Category -->
      <NuxtLink to="/admin/category/category_page" class="stat-card group hover:border-orange-300 transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Total Kategori Menu</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">{{ stats.categories }}</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Card: Menu -->
      <NuxtLink to="/admin/menu/menu_page" class="stat-card group hover:border-orange-300 transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Total Item Menu</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">{{ stats.menus }}</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Card: Article -->
      <NuxtLink to="/admin/article/article_page" class="stat-card group hover:border-orange-300 transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Total Artikel/Berita</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">{{ stats.articles }}</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Card: Pesan (Unreplied) -->
      <NuxtLink to="/admin/contact/contact_page" class="stat-card group hover:border-orange-300 transition-all duration-300">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Pesan Belum Dibalas</p>
            <div class="flex items-baseline gap-2 mt-1">
                <p class="text-3xl font-bold text-gray-900">{{ stats.unrepliedMessages }}</p>
                <p class="text-sm text-gray-500">/ {{ stats.totalMessages }} total</p>
            </div>
          </div>
        </div>
      </NuxtLink>

      <!-- Card: Catering Booking -->
      <NuxtLink to="/admin/catering/booking_page" class="stat-card group hover:border-orange-300 transition-all duration-300 sm:col-span-2 xl:col-span-1">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Booking Katering Aktif (APPROVED)</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">{{ stats.cateringBookings }}</p>
          </div>
        </div>
      </NuxtLink>

      <!-- Card: Moment Booking -->
      <NuxtLink to="/admin/moment/booking_page" class="stat-card group hover:border-orange-300 transition-all duration-300 sm:col-span-2 xl:col-span-1">
        <div class="flex items-center gap-4">
          <div class="icon-box bg-orange-100 text-orange-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-500 group-hover:text-orange-700 transition-colors">Booking Moment Aktif (APPROVED)</p>
            <p class="text-3xl font-bold text-gray-900 mt-1">{{ stats.momentBookings }}</p>
          </div>
        </div>
      </NuxtLink>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Proteksi Halaman & Layout
definePageMeta({ layout: "admin", middleware: "auth" });

const config = useRuntimeConfig();
const baseURL = config.public.apiBase || 'https://kecilung-resto.vercel.app/api';

// State Data Profil Admin (dari localStorage)
const currentAdmin = ref({ name: 'Admin' });

// State untuk ringkasan statistik
const stats = ref({
  categories: 0,
  menus: 0,
  articles: 0,
  cateringBookings: 0, // Count Approved
  momentBookings: 0,   // Count Approved
  totalMessages: 0,
  unrepliedMessages: 0
});

const currentDate = computed(() => {
  return new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
});

// Mengambil data admin saat halaman dimuat
onMounted(() => {
  const savedData = localStorage.getItem('admin_data');
  if (savedData) {
    currentAdmin.value = JSON.parse(savedData);
  }
});

// Pola Fallback: Ambil semua data lalu hitung jumlahnya (jika backend tidak punya endpoint stats)
// Diperlukan penyesuaian endpoint API yang sebenarnya di sini.

const { data: resCategories, pending: pCat } = useLazyFetch(`${baseURL}/categories`);
const { data: resMenus, pending: pMenu } = useLazyFetch(`${baseURL}/menus`);
const { data: resArticles, pending: pArt } = useLazyFetch(`${baseURL}/articles`);
const { data: resCatBookings, pending: pCBook } = useLazyFetch(`${baseURL}/catering/bookings`);
const { data: resMomBookings, pending: pMBook } = useLazyFetch(`${baseURL}/moments/bookings`);
const { data: resContacts, pending: pCont } = useLazyFetch(`${baseURL}/contacts`);

// Computed gabungan untuk status loading
const pending = computed(() => pCat.value || pMenu.value || pArt.value || pCBook.value || pMBook.value || pCont.value);

// Computed gabungan untuk error (jika salah satu gagal)
const error = computed(() => resCategories.value?.error || resMenus.value?.error || resArticles.value?.error || resCatBookings.value?.error || resMomBookings.value?.error || resContacts.value?.error);

// Watch data yang masuk untuk memperbarui statistik
watchEffect(() => {
  if (resCategories.value?.data) stats.value.categories = resCategories.value.data.length;
  if (resMenus.value?.data) stats.value.menus = resMenus.value.data.length;
  if (resArticles.value?.data) stats.value.articles = resArticles.value.data.length;
  
  // Hitung yang APPROVED saja untuk Catering
  if (resCatBookings.value?.data) {
    stats.value.cateringBookings = resCatBookings.value.data.filter(b => b.status === 'APPROVED').length;
  }
  
  // Hitung yang APPROVED saja untuk Moment
  if (resMomBookings.value?.data) {
    stats.value.momentBookings = resMomBookings.value.data.filter(b => b.status === 'APPROVED').length;
  }
  
  // Pesan (Unreplied vs Total)
  if (resContacts.value?.data) {
    const contacts = resContacts.value.data;
    stats.value.totalMessages = contacts.length;
    stats.value.unrepliedMessages = contacts.filter(c => !c.is_replied).length;
  }
});
</script>

<style scoped>
.stat-card {
  @apply bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 block;
}
.icon-box {
  @apply p-3 rounded-full flex-shrink-0;
}
</style>