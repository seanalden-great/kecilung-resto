<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold text-gray-800">Manajemen Artikel</h1>
      <NuxtLink
        to="/admin/article/add_article_page"
        class="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        + Tambah Artikel
      </NuxtLink>
    </div>

    <div class="bg-white rounded shadow p-4 overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-gray-100 text-gray-700">
            <th class="p-3 border-b">No</th>
            <th class="p-3 border-b">Kode</th>
            <th class="p-3 border-b">Nama Artikel</th>
            <th class="p-3 border-b">Deskripsi Singkat</th>
            <th class="p-3 border-b text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in articles"
            :key="item.id"
            class="hover:bg-gray-50 border-b"
          >
            <td class="p-3">{{ index + 1 }}</td>
            <td class="p-3 font-semibold">{{ item.code }}</td>
            <td class="p-3">{{ item.name }}</td>
            <td class="p-3 truncate max-w-xs">{{ item.description }}</td>
            <td class="p-3 text-center space-x-2">
              <NuxtLink
                :to="`/admin/article/detail/${item.id}`"
                class="text-green-600 hover:underline"
                >Detail</NuxtLink
              >
              <NuxtLink
                :to="`/admin/article/edit/${item.id}`"
                class="text-blue-600 hover:underline"
                >Edit</NuxtLink
              >
              <button
                @click="confirmDelete(item.id)"
                class="text-red-600 hover:underline"
              >
                Hapus
              </button>
            </td>
          </tr>
          <tr v-if="articles.length === 0">
            <td colspan="5" class="p-6 text-center text-gray-500">
              Belum ada data artikel.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";

const config = useRuntimeConfig();
const articles = ref([]);

const fetchArticles = async () => {
  try {
    const res = await $fetch(
      `${config.public.apiBase || "https://kecilung-resto.vercel.app"}/api/articles`,
    );
    articles.value = res.data || [];
  } catch (error) {
    Swal.fire("Error!", "Gagal mengambil data artikel", "error");
  }
};

const confirmDelete = (id) => {
  Swal.fire({
    title: "Apakah Anda yakin?",
    text: "Data yang dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Ya, hapus!",
    cancelButtonText: "Batal",
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await $fetch(
          `${config.public.apiBase || "https://kecilung-resto.vercel.app"}/api/articles/${id}`,
          { method: "DELETE" },
        );
        Swal.fire("Terhapus!", "Artikel berhasil dihapus.", "success");
        fetchArticles();
      } catch (error) {
        Swal.fire("Gagal!", "Terjadi kesalahan saat menghapus data.", "error");
      }
    }
  });
};

onMounted(() => {
  fetchArticles();
});
</script>
