<template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact <span class="text-red-700">Us</span></h1>
        <div class="w-16 h-1.5 bg-red-700 mx-auto rounded-full mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Punya pertanyaan, saran, atau keluhan? Jangan ragu untuk menghubungi kami. Tim Kecilung Resto siap membantu Anda.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- FORM SECTION -->
        <div class="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
          
          <form @submit.prevent="submitContact">
            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="fullName">Nama Lengkap *</label>
              <input 
                v-model="form.full_name" 
                type="text" 
                id="fullName" 
                required 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Masukkan nama lengkap Anda"
              />
            </div>
            
            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="email">Email <span class="text-gray-400 font-normal">(Opsional)</span></label>
              <input 
                v-model="form.email" 
                type="email" 
                id="email" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="nama@email.com"
              />
            </div>

            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="phone">Nomor Telepon/WA <span class="text-gray-400 font-normal">(Opsional)</span></label>
              <input 
                v-model="form.phone" 
                type="tel" 
                id="phone" 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="0812xxxxxx"
              />
            </div>

            <div class="mb-8">
              <label class="block text-gray-700 font-semibold mb-2" for="description">Pesan / Keluhan *</label>
              <textarea 
                v-model="form.description" 
                id="description" 
                rows="5" 
                required 
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="Tuliskan pesan atau keluhan Anda di sini..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
            >
              {{ isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan' }}
            </button>
          </form>
        </div>

        <!-- INFO & MAP SECTION -->
        <div class="lg:w-1/2 flex flex-col gap-8">
          
          <!-- Info Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div class="bg-red-100 p-3 rounded-full text-red-700">
                <!-- Icon Map Pin -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Alamat</h3>
                <p class="text-gray-600 text-sm leading-relaxed">Jl. Kecilung No.8,<br>Surabaya, Jawa Timur</p>
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div class="bg-red-100 p-3 rounded-full text-red-700">
                <!-- Icon Phone -->
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 mb-1">Kontak</h3>
                <p class="text-gray-600 text-sm">WA: 0818-0311-6688</p>
              </div>
            </div>
          </div>

          <!-- Google Maps Embed -->
          <div class="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 h-full min-h-[300px] relative overflow-hidden group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.854659424859!2d112.7486801!3d-7.2574041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f97b6a12b6f1%3A0xc3a9e3a6c22c0e7a!2sJl.%20Kecilung%20No.8%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style="border:0; border-radius: 0.75rem;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="absolute inset-0"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';

const config = useRuntimeConfig();
const isSubmitting = ref(false);

const form = ref({
  full_name: '',
  email: '',
  phone: '',
  description: ''
});

const submitContact = async () => {
  isSubmitting.value = true;
  try {
    const baseURL = config.public.apiBase || 'https://kecilung-resto.vercel.app';
    
    // Kirim data sebagai JSON
    await $fetch(`${baseURL}/api/contacts`, {
      method: 'POST',
      body: form.value
    });

    Swal.fire({
      icon: 'success',
      title: 'Terkirim!',
      text: 'Terima kasih, pesan Anda berhasil dikirim. Kami akan segera menindaklanjutinya.',
      confirmButtonColor: '#b91c1c'
    });

    // Reset Form
    form.value = { full_name: '', email: '', phone: '', description: '' };
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: error.response?._data?.error || 'Maaf, terjadi kesalahan saat mengirim pesan.',
      confirmButtonColor: '#b91c1c'
    });
  } finally {
    isSubmitting.value = false;
  }
};
</script>