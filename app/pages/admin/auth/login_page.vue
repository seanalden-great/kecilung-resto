<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
    <div class="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      
      <div class="text-center mb-8">
        <img src="/assets/images/kecilung_logo.webp" alt="Kecilung Resto" class="h-16 mx-auto mb-4 object-contain" />
        <h2 class="text-2xl font-bold text-gray-900">Admin Login</h2>
        <p class="text-sm text-gray-500 mt-1">Silakan masuk untuk mengelola sistem</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Username</label>
          <input 
            v-model="form.username" 
            type="text" 
            required 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="Masukkan username admin"
          />
        </div>

        <div>
          <label class="block text-sm font-bold text-gray-700 mb-2">Password</label>
          <input 
            v-model="form.password" 
            type="password" 
            required 
            class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
            placeholder="••••••••"
          />
        </div>

        <button 
          type="submit" 
          :disabled="isLoading"
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 transition-all"
        >
          {{ isLoading ? 'Mengecek...' : 'Sign In' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';

// Gunakan layout kosong agar sidebar tidak muncul
definePageMeta({ layout: false });

const router = useRouter();
const config = useRuntimeConfig();
const isLoading = ref(false);

const form = ref({
  username: '',
  password: ''
});

const handleLogin = async () => {
  isLoading.value = true;
  try {
    const baseURL = config.public.apiBase || 'https://kecilung-resto.vercel.app';
    const res = await $fetch(`${baseURL}/api/auth/login`, {
      method: 'POST',
      body: form.value
    });

    // Simpan Token dan Data Admin ke LocalStorage
    localStorage.setItem('admin_token', res.token);
    localStorage.setItem('admin_data', JSON.stringify(res.data));

    Swal.fire({
      icon: 'success',
      title: 'Login Berhasil',
      text: `Selamat datang kembali, ${res.data.name}!`,
      showConfirmButton: false,
      timer: 1500
    });

    // Redirect ke halaman Kategori
    router.push('/admin/category/category_page');
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Akses Ditolak',
      text: error.response?._data?.error || 'Username atau password salah.',
    });
  } finally {
    isLoading.value = false;
  }
};
</script>