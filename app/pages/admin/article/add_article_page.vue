<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div class="bg-white p-6 rounded shadow">
      <h1 class="text-2xl font-bold mb-6">Tambah Artikel Baru</h1>

      <form @submit.prevent="submitArticle" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-1">Kode Artikel</label>
          <input
            v-model="form.code"
            type="text"
            required
            class="w-full border rounded p-2 focus:outline-blue-500"
            placeholder="Contoh: ART-01"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Judul/Nama Artikel</label>
          <input
            v-model="form.name"
            type="text"
            required
            class="w-full border rounded p-2 focus:outline-blue-500"
            placeholder="Judul artikel"
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-1">Deskripsi/Konten</label>
          <textarea
            v-model="form.description"
            required
            rows="5"
            class="w-full border rounded p-2 focus:outline-blue-500"
            placeholder="Isi artikel..."
          ></textarea>
        </div>

        <div>
          <label class="block text-gray-700 mb-1"
            >Gambar (Bisa lebih dari 1)</label
          >
          <input
            @change="handleFileChange"
            type="file"
            multiple
            accept="image/*"
            class="w-full border rounded p-2"
          />
        </div>

        <div class="flex gap-4 mt-6">
          <button
            type="submit"
            :disabled="isLoading"
            class="bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 disabled:opacity-50"
          >
            {{ isLoading ? "Menyimpan..." : "Simpan Artikel" }}
          </button>
          <NuxtLink
            to="/admin/article/article_page"
            class="bg-gray-300 text-gray-800 px-6 py-2 rounded shadow hover:bg-gray-400 text-center"
          >
            Kembali
          </NuxtLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Swal from "sweetalert2";

const router = useRouter();
const config = useRuntimeConfig();
const isLoading = ref(false);

const form = ref({
  code: "",
  name: "",
  description: "",
});
const selectedFiles = ref([]);

const handleFileChange = (e) => {
  selectedFiles.value = Array.from(e.target.files);
};

const submitArticle = async () => {
  isLoading.value = true;
  const formData = new FormData();
  formData.append("code", form.value.code);
  formData.append("name", form.value.name);
  formData.append("description", form.value.description);

  selectedFiles.value.forEach((file) => {
    formData.append("images", file);
  });

  try {
    await $fetch(
      `${config.public.apiBase || "https://kecilung-resto.vercel.app"}/api/articles`,
      {
        method: "POST",
        body: formData,
      },
    );

    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Artikel baru telah ditambahkan.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      router.push("/admin/article/article_page");
    });
  } catch (error) {
    Swal.fire("Error!", "Gagal menambahkan artikel", "error");
  } finally {
    isLoading.value = false;
  }
};
</script>
