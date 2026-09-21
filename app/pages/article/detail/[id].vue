<template>
  <div class="max-w-4xl mx-auto p-6 min-h-[70vh]">
    <div v-if="isLoading" class="text-center py-20 text-gray-500">
      Memuat detail artikel...
    </div>
    
    <div v-else-if="article">
      <!-- Header Artikel -->
      <div class="mb-8 text-center mt-6">
        <span class="text-sm font-bold text-blue-600 tracking-widest uppercase">{{ article.code }}</span>
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">{{ article.name }}</h1>
        <div class="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      <!-- Gambar Utama -->
      <div v-if="article.images && article.images.length > 0" class="mb-10 rounded-2xl overflow-hidden shadow-lg">
        <img :src="article.images[0].image_url" :alt="article.name" class="w-full max-h-[500px] object-cover" />
      </div>

      <!-- Teks / Deskripsi Artikel -->
      <article class="prose prose-lg max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed mb-12">
        {{ article.description }}
      </article>

      <!-- Galeri Gambar Tambahan (Jika artikel punya lebih dari 1 gambar) -->
      <div v-if="article.images && article.images.length > 1" class="mt-12 pt-8 border-t border-gray-200">
        <h3 class="text-2xl font-bold text-gray-800 mb-6">Galeri Gambar</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img 
            v-for="(img, index) in article.images.slice(1)" 
            :key="img.id" 
            :src="img.image_url" 
            class="w-full h-40 md:h-56 object-cover rounded-xl shadow-sm hover:shadow-md transition"
            :alt="`Galeri ${index + 2}`"
          />
        </div>
      </div>

      <!-- Tombol Kembali -->
      <div class="mt-12 text-center pb-10">
        <NuxtLink to="/article" class="inline-block border border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold px-8 py-3 rounded-full transition shadow-sm">
          &larr; Kembali ke Daftar Artikel
        </NuxtLink>
      </div>
    </div>
    
    <div v-else class="text-center py-20 text-gray-500">
      Artikel tidak ditemukan.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const config = useRuntimeConfig()

const articleId = route.params.id
const article = ref(null)
const isLoading = ref(true)

const fetchArticleDetail = async () => {
  try {
    const res = await $fetch(`${config.public.apiBase || 'https://kecilung-resto.vercel.app'}/api/articles/${articleId}`)
    if (res.data) {
      article.value = res.data
    }
  } catch (error) {
    console.error('Gagal memuat detail artikel:', error)
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchArticleDetail()
})
</script>