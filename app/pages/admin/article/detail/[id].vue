<template>
  <div class="p-6 max-w-4xl mx-auto">
    <div v-if="article" class="bg-white p-6 rounded shadow">
      <div class="flex justify-between items-center border-b pb-4 mb-4">
        <h1 class="text-3xl font-bold text-gray-800">{{ article.name }}</h1>
        <span
          class="bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded"
          >{{ article.code }}</span
        >
      </div>

      <p class="text-gray-700 whitespace-pre-wrap leading-relaxed mb-6">
        {{ article.description }}
      </p>

      <div v-if="article.images && article.images.length > 0">
        <h3 class="font-bold text-lg mb-3">Galeri Gambar</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            v-for="img in article.images"
            :key="img.id"
            :src="img.image_url"
            alt="Article Image"
            class="w-full h-48 object-cover rounded shadow"
          />
        </div>
      </div>
      <div v-else class="text-gray-500 italic mb-6">
        *Tidak ada gambar untuk artikel ini.
      </div>

      <div class="mt-8 pt-4 border-t">
        <NuxtLink
          to="/admin/article/article_page"
          class="bg-gray-600 text-white px-6 py-2 rounded shadow hover:bg-gray-700 transition"
        >
          Kembali ke List
        </NuxtLink>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 py-10">Memuat data...</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Swal from "sweetalert2";

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();
const articleId = route.params.id;
const article = ref(null);

const fetchDetail = async () => {
  try {
    const res = await $fetch(
      `${config.public.apiBase || "https://kecilung-resto.vercel.app"}/api/articles/${articleId}`,
    );
    article.value = res.data;
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Tidak Ditemukan",
      text: "Data artikel tidak ditemukan",
    }).then(() => {
      router.push("/admin/article/article_page");
    });
  }
};

onMounted(() => {
  fetchDetail();
});
</script>
