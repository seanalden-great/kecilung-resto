<!-- <template>
  <div class="max-w-7xl mx-auto p-6 min-h-[60vh]">
    
    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <span class="text-gray-500 text-lg">Memuat artikel...</span>
    </div>

    <div v-else-if="articles.length === 0" class="flex justify-center items-center py-20">
      <span class="text-gray-500 text-lg">Belum ada artikel yang tersedia.</span>
    </div>

    <div v-else>
      <section class="mb-14">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-100 pb-3">Our Articles</h2>
        
        <div class="flex overflow-x-auto gap-6 pb-6 snap-x hide-scrollbar">
          <NuxtLink
            v-for="article in firstArticles"
            :key="article.id"
            :to="`/article/detail/${article.id}`"
            class="min-w-[300px] max-w-[320px] flex-none bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden snap-start border border-gray-100 group"
          >
            <div class="w-full h-48 overflow-hidden relative bg-gray-100">
              <img
                v-if="article.images && article.images.length > 0"
                :src="article.images[0].image_url"
                :alt="article.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            </div>
            
            <div class="p-5">
              <span class="text-xs font-bold tracking-wider text-blue-600 mb-2 block uppercase">{{ article.code }}</span>
              <h3 class="text-xl font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">{{ article.name }}</h3>
              <p class="text-gray-600 text-sm line-clamp-3">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <section v-if="otherArticles.length > 0">
        <h2 class="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-100 pb-3">Another Articles</h2>
        
        <div class="flex flex-col gap-5">
          <NuxtLink
            v-for="article in otherArticles"
            :key="article.id"
            :to="`/article/detail/${article.id}`"
            class="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden border border-gray-100 group"
          >
            <div class="w-full sm:w-64 h-48 sm:h-auto overflow-hidden relative flex-none bg-gray-100">
              <img
                v-if="article.images && article.images.length > 0"
                :src="article.images[0].image_url"
                :alt="article.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            </div>
            
            <div class="p-5 flex flex-col justify-center flex-grow">
              <span class="text-xs font-bold tracking-wider text-blue-600 mb-2 block uppercase">{{ article.code }}</span>
              <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{{ article.name }}</h3>
              <p class="text-gray-600 text-sm line-clamp-3 md:line-clamp-2">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const config = useRuntimeConfig()
const articles = ref([])
const isLoading = ref(true)

// Fetch data dari API backend
const fetchArticles = async () => {
  try {
    const res = await $fetch(`${config.public.apiBase || 'https://kecilung-resto.vercel.app'}/api/articles`)
    if (res.data) {
      articles.value = res.data
    }
  } catch (error) {
    console.error('Gagal mengambil data artikel:', error)
  } finally {
    isLoading.value = false
  }
}

// 1. Urutkan berdasarkan kode artikel (A-Z / Angka Terkecil ke Terbesar)
const sortedArticles = computed(() => {
  return [...articles.value].sort((a, b) => a.code.localeCompare(b.code))
})

// 2. Pisahkan "Kode Terawal" (Misal 3 pertama) untuk Horizontal View
const firstArticles = computed(() => {
  return sortedArticles.value.slice(0, 3) 
})

// 3. Pisahkan "Kode Lebih Tinggi" (Sisanya) untuk Vertical View
const otherArticles = computed(() => {
  return sortedArticles.value.slice(3)
})

onMounted(() => {
  fetchArticles()
})
</script>

<style scoped>
/* Untuk menyembunyikan scrollbar bawaan browser tapi tetap bisa di scroll horizontal */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style> -->

<template>
  <div class="max-w-7xl mx-auto p-6 min-h-[60vh]">
    
    <!-- State Loading -->
    <div v-if="isLoading" class="flex justify-center items-center py-20">
      <span class="text-gray-500 text-lg">Memuat artikel...</span>
    </div>

    <!-- State Kosong -->
    <div v-else-if="articles.length === 0" class="flex justify-center items-center py-20">
      <span class="text-gray-500 text-lg">Belum ada artikel yang tersedia.</span>
    </div>

    <div v-else>
      <!-- SECTION 1: Our Articles (Horizontal List View / Kode Terawal) -->
      <section class="mb-20">
        <!-- Judul Ditengahkan -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-extrabold text-gray-800 mb-4">Our Articles</h2>
          <div class="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <!-- Horizontal Scroll Container (Ditengahkan di Desktop, Scrollable di Mobile) -->
        <div class="flex overflow-x-auto md:justify-center gap-8 pb-6 snap-x hide-scrollbar">
          <NuxtLink
            v-for="article in firstArticles"
            :key="article.id"
            :to="`/article/detail/${article.id}`"
            class="min-w-[340px] md:min-w-[360px] max-w-[400px] flex-none bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden snap-start border border-gray-100 group"
          >
            <!-- Thumbnail Gambar Pertama (Diperbesar h-56) -->
            <div class="w-full h-56 overflow-hidden relative bg-gray-100">
              <img
                v-if="article.images && article.images.length > 0"
                :src="article.images[0].image_url"
                :alt="article.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            </div>
            
            <!-- Konten -->
            <div class="p-6">
              <span class="text-xs font-bold tracking-wider text-blue-600 mb-2 block uppercase">{{ article.code }}</span>
              <h3 class="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{{ article.name }}</h3>
              <p class="text-gray-600 text-sm line-clamp-3 leading-relaxed">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>

      <!-- SECTION 2: Another Articles (Vertical List View / Kode Lebih Tinggi) -->
      <section v-if="otherArticles.length > 0" class="mb-14">
        <!-- Judul Ditengahkan -->
        <div class="text-center mb-8">
          <h2 class="text-3xl font-extrabold text-gray-800 mb-4">Another Articles</h2>
          <div class="w-16 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <!-- Vertical List Container (Dibatasi lebarnya agar ke tengah) -->
        <div class="flex flex-col gap-6 max-w-5xl mx-auto">
          <NuxtLink
            v-for="article in otherArticles"
            :key="article.id"
            :to="`/article/detail/${article.id}`"
            class="flex flex-col sm:flex-row bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 group"
          >
            <!-- Thumbnail Gambar Pertama (Sebelah Kiri) -->
            <div class="w-full sm:w-72 h-56 sm:h-auto overflow-hidden relative flex-none bg-gray-100">
              <img
                v-if="article.images && article.images.length > 0"
                :src="article.images[0].image_url"
                :alt="article.name"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div v-else class="w-full h-full flex items-center justify-center text-gray-400">
                No Image
              </div>
            </div>
            
            <!-- Konten (Sebelah Kanan) -->
            <div class="p-6 md:p-8 flex flex-col justify-center flex-grow">
              <span class="text-xs font-bold tracking-wider text-blue-600 mb-2 block uppercase">{{ article.code }}</span>
              <h3 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{{ article.name }}</h3>
              <p class="text-gray-600 text-base line-clamp-3 md:line-clamp-2 leading-relaxed">{{ article.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const config = useRuntimeConfig()
const articles = ref([])
const isLoading = ref(true)

// Fetch data dari API backend
const fetchArticles = async () => {
  try {
    const res = await $fetch(`${config.public.apiBase || 'https://kecilung-resto.vercel.app'}/api/articles`)
    if (res.data) {
      articles.value = res.data
    }
  } catch (error) {
    console.error('Gagal mengambil data artikel:', error)
  } finally {
    isLoading.value = false
  }
}

// 1. Urutkan berdasarkan kode artikel (A-Z / Angka Terkecil ke Terbesar)
const sortedArticles = computed(() => {
  return [...articles.value].sort((a, b) => a.code.localeCompare(b.code))
})

// 2. Pisahkan "Kode Terawal" (Misal 3 pertama) untuk Horizontal View
const firstArticles = computed(() => {
  return sortedArticles.value.slice(0, 3) 
})

// 3. Pisahkan "Kode Lebih Tinggi" (Sisanya) untuk Vertical View
const otherArticles = computed(() => {
  return sortedArticles.value.slice(3)
})

onMounted(() => {
  fetchArticles()
})
</script>

<style scoped>
/* Untuk menyembunyikan scrollbar bawaan browser tapi tetap bisa di scroll horizontal */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>