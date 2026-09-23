<template>
  <div class="container mx-auto p-6 max-w-4xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Profil Admin</h1>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <form @submit.prevent="updateProfile" class="space-y-6">
        
        <!-- Foto Profil -->
        <div class="flex flex-col sm:flex-row items-center gap-6 mb-8 pb-8 border-b border-gray-100">
          <div class="relative">
            <img 
              :src="previewImage || adminData.image_url || `https://ui-avatars.com/api/?name=${adminData.name}&background=f97316&color=fff`" 
              class="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
              alt="Avatar"
            />
          </div>
          <div class="flex-1 text-center sm:text-left">
            <h3 class="text-lg font-bold text-gray-900 mb-2">Foto Profil</h3>
            <p class="text-sm text-gray-500 mb-4">Gunakan format JPG, PNG, atau WEBP. Maks 2MB.</p>
            <input @change="handleFileChange" type="file" accept="image/*" class="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100" />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Nama Lengkap</label>
            <input v-model="form.name" type="text" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500" />
          </div>
          <div>
            <label class="block text-sm font-bold text-gray-700 mb-2">Username</label>
            <input v-model="form.username" type="text" required class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Password Baru <span class="text-gray-400 font-normal">(Kosongkan jika tidak ingin mengubah)</span></label>
          <input v-model="form.password" type="password" class="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-orange-500" placeholder="Biarkan kosong jika tidak diubah" />
        </div>

        <div class="pt-6 text-right">
          <button type="submit" :disabled="isSubmitting" class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-md transition disabled:opacity-50">
            {{ isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Swal from 'sweetalert2';

// Gunakan layout admin dan proteksi middleware auth
definePageMeta({ layout: "admin", middleware: "auth" });

const config = useRuntimeConfig();
const baseURL = config.public.apiBase || 'https://kecilung-resto.vercel.app';
const isSubmitting = ref(false);

const adminData = ref({ id: '', name: '', username: '', image_url: '' });
const form = ref({ name: '', username: '', password: '' });
const selectedFile = ref(null);
const previewImage = ref(null);

onMounted(() => {
  // Ambil data admin dari localStorage
  const savedData = localStorage.getItem('admin_data');
  if (savedData) {
    const parsed = JSON.parse(savedData);
    adminData.value = parsed;
    form.value.name = parsed.name;
    form.value.username = parsed.username;
  }
});

const handleFileChange = (e) => {
  const file = e.target.files[0];
  if (file) {
    selectedFile.value = file;
    // Buat URL sementara untuk preview gambar
    previewImage.value = URL.createObjectURL(file);
  }
};

const updateProfile = async () => {
  isSubmitting.value = true;
  try {
    const formData = new FormData();
    formData.append('name', form.value.name);
    formData.append('username', form.value.username);
    if (form.value.password) {
      formData.append('password', form.value.password);
    }
    if (selectedFile.value) {
      formData.append('image', selectedFile.value);
    }

    await $fetch(`${baseURL}/api/auth/profile/${adminData.value.id}`, {
      method: 'PUT',
      body: formData
    });

    // Karena mengubah profil, disarankan untuk logout agar login dengan data baru
    Swal.fire({
      icon: 'success',
      title: 'Profil Diperbarui',
      text: 'Silakan login kembali untuk menerapkan perubahan.',
    }).then(() => {
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_data');
      navigateTo('/admin/auth/login_page');
    });

  } catch (error) {
    Swal.fire('Gagal', error.response?._data?.error || 'Gagal menyimpan profil', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>