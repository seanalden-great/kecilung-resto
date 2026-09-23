<!-- <template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="container mx-auto px-4 max-w-6xl">
      <div class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact <span class="text-red-700">Us</span></h1>
        <div class="w-16 h-1.5 bg-red-700 mx-auto rounded-full mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Punya pertanyaan, saran, atau keluhan? Jangan ragu untuk menghubungi kami. Tim Kecilung Resto siap membantu Anda.
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
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

        <div class="lg:w-1/2 flex flex-col gap-8">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div class="bg-red-100 p-3 rounded-full text-red-700">
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
</script> -->

<template>
  <div class="bg-gray-50 min-h-screen py-16 relative">
    <div class="container mx-auto px-4 max-w-6xl relative">
      <!-- Header & Tombol Riwayat -->
      <div class="text-center mb-16 relative">
        <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contact <span class="text-red-700">Us</span></h1>
        <div class="w-16 h-1.5 bg-red-700 mx-auto rounded-full mb-6"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Punya pertanyaan, saran, atau keluhan? Jangan ragu untuk menghubungi kami. Tim Kecilung Resto siap membantu Anda.
        </p>
        
        <!-- TOMBOL RIWAYAT -->
        <button 
          @click="openHistoryModal" 
          class="bg-white border-2 border-red-700 text-red-700 hover:bg-red-50 font-bold py-2 px-6 rounded-full shadow-sm transition inline-flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Lihat Riwayat Pesan Publik
        </button>
      </div>

      <div class="flex flex-col lg:flex-row gap-12">
        <!-- FORM SECTION -->
        <div class="lg:w-1/2 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 class="text-2xl font-bold text-gray-800 mb-6">Kirim Pesan</h2>
          
          <form @submit.prevent="submitContact">
            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="fullName">Nama Lengkap *</label>
              <input v-model="form.full_name" type="text" id="fullName" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" placeholder="Masukkan nama lengkap Anda" />
            </div>
            
            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="email">Email <span class="text-gray-400 font-normal">(Opsional)</span></label>
              <input v-model="form.email" type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" placeholder="nama@email.com" />
            </div>

            <div class="mb-5">
              <label class="block text-gray-700 font-semibold mb-2" for="phone">Nomor Telepon/WA <span class="text-gray-400 font-normal">(Opsional)</span></label>
              <input v-model="form.phone" type="tel" id="phone" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" placeholder="0812xxxxxx" />
            </div>

            <div class="mb-8">
              <label class="block text-gray-700 font-semibold mb-2" for="description">Pesan / Keluhan *</label>
              <textarea v-model="form.description" id="description" rows="5" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500" placeholder="Tuliskan pesan atau keluhan Anda di sini..."></textarea>
            </div>

            <button type="submit" :disabled="isSubmitting" class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-xl shadow-md transition transform hover:-translate-y-1">
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
          <div class="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 h-full min-h-[300px] relative overflow-hidden">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.854659424859!2d112.7486801!3d-7.2574041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f97b6a12b6f1%3A0xc3a9e3a6c22c0e7a!2sJl.%20Kecilung%20No.8%2C%20Surabaya!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid" width="100%" height="100%" style="border:0; border-radius: 0.75rem;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="absolute inset-0"></iframe>
          </div>
        </div>
      </div>
    </div>

    <!-- ============================================== -->
    <!-- MODAL POPUP RIWAYAT PESAN                      -->
    <!-- ============================================== -->
    <div v-if="showHistoryModal" class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
      <div class="bg-white rounded-2xl w-full max-w-3xl shadow-2xl flex flex-col max-h-[85vh]">
        <!-- Modal Header -->
        <div class="flex justify-between items-center p-6 border-b border-gray-100">
          <h2 class="text-2xl font-bold text-gray-800">Riwayat Pesan Publik</h2>
          <button @click="showHistoryModal = false" class="text-gray-400 hover:text-red-600 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Modal Body (Scrollable) -->
        <div class="p-6 overflow-y-auto flex-1 bg-gray-50">
          <div v-if="isLoadingHistory" class="text-center py-10 text-gray-500">
            <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-red-700 mx-auto mb-4"></div>
            Memuat riwayat pesan...
          </div>
          
          <div v-else-if="histories.length === 0" class="text-center py-10 text-gray-500">
            Belum ada riwayat pesan.
          </div>

          <div v-else class="space-y-6">
            <!-- Box Pesan -->
            <div v-for="msg in histories" :key="msg.id" class="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div class="flex justify-between items-start mb-3">
                <div>
                  <h4 class="font-bold text-gray-900">{{ msg.full_name }}</h4>
                  <p class="text-xs text-gray-400">{{ new Date(msg.created_at).toLocaleString('id-ID', { dateStyle: 'long', timeStyle: 'short' }) }}</p>
                </div>
                <span class="text-xs font-bold px-2 py-1 rounded bg-gray-100 text-gray-600">ID: #{{ msg.id }}</span>
              </div>
              
              <p class="text-gray-700 mb-4 whitespace-pre-wrap leading-relaxed">{{ msg.description }}</p>

              <!-- Box Balasan Admin -->
              <div class="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg mt-4">
                <div class="flex items-center gap-2 mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                  <span class="font-bold text-red-700 text-sm">Balasan Admin:</span>
                </div>
                <p v-if="msg.is_replied" class="text-gray-800 text-sm italic whitespace-pre-wrap">{{ msg.reply }}</p>
                <p v-else class="text-gray-500 text-sm italic">Pesan belum dibalas. (Your message hasn't been replied to yet.)</p>
              </div>
            </div>
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
const baseURL = config.public.apiBase || 'https://kecilung-resto.vercel.app';

// Form State
const form = ref({
  full_name: '',
  email: '',
  phone: '',
  description: ''
});

// Modal State
const showHistoryModal = ref(false);
const isLoadingHistory = ref(false);
const histories = ref([]);

const submitContact = async () => {
  isSubmitting.value = true;
  try {
    await $fetch(`${baseURL}/api/contacts`, {
      method: 'POST',
      body: form.value
    });

    Swal.fire({
      icon: 'success',
      title: 'Terkirim!',
      text: 'Terima kasih, pesan Anda berhasil dikirim.',
      confirmButtonColor: '#b91c1c'
    });

    form.value = { full_name: '', email: '', phone: '', description: '' };
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: error.response?._data?.error || 'Terjadi kesalahan saat mengirim pesan.',
      confirmButtonColor: '#b91c1c'
    });
  } finally {
    isSubmitting.value = false;
  }
};

const openHistoryModal = async () => {
  showHistoryModal.value = true;
  isLoadingHistory.value = true;
  try {
    const res = await $fetch(`${baseURL}/api/contacts`);
    histories.value = res.data || [];
  } catch (error) {
    console.error("Gagal memuat riwayat", error);
  } finally {
    isLoadingHistory.value = false;
  }
};
</script>