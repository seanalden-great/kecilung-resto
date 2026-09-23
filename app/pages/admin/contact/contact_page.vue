<template>
  <div class="container mx-auto p-6 max-w-6xl">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Manajemen Pesan & Keluhan</h1>
    
    <div class="bg-white shadow rounded-lg overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Pengirim</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Pesan (Deskripsi)</th>
            <th class="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase">Status & Balasan</th>
            <th class="px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase">Aksi</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="msg in messages" :key="msg.id" class="hover:bg-gray-50">
            <td class="px-6 py-4">
              <p class="font-bold text-gray-900">{{ msg.full_name }}</p>
              <p class="text-sm text-gray-500">{{ msg.phone || '-' }}</p>
              <p class="text-xs text-blue-600">{{ msg.email || '-' }}</p>
            </td>
            <td class="px-6 py-4">
              <p class="text-sm text-gray-800 line-clamp-3">{{ msg.description }}</p>
              <span class="text-xs text-gray-400 block mt-1">{{ new Date(msg.created_at).toLocaleString() }}</span>
            </td>
            <td class="px-6 py-4">
              <span v-if="msg.is_replied" class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold mb-2 inline-block">Sudah Dibalas</span>
              <span v-else class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-bold mb-2 inline-block">Belum Dibalas</span>
              
              <p v-if="msg.is_replied" class="text-sm text-gray-600 bg-gray-100 p-2 rounded line-clamp-2 italic">
                "{{ msg.reply }}"
              </p>
            </td>
            <td class="px-6 py-4 text-center">
              <button @click="openReplyModal(msg)" class="bg-orange-500 text-white px-4 py-2 rounded text-sm font-bold hover:bg-orange-600 shadow-sm transition">
                {{ msg.is_replied ? 'Edit Balasan' : 'Balas Pesan' }}
              </button>
            </td>
          </tr>
          <tr v-if="messages.length === 0">
            <td colspan="4" class="text-center py-8 text-gray-500">Belum ada pesan masuk.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal Balas Pesan -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div class="bg-white p-6 rounded-xl w-full max-w-lg shadow-2xl">
        <h2 class="text-xl font-bold mb-4">Balas Pesan: {{ selectedMessage.full_name }}</h2>
        <div class="bg-gray-100 p-3 rounded-lg mb-4 text-sm text-gray-700 italic border-l-4 border-gray-400">
          "{{ selectedMessage.description }}"
        </div>
        
        <form @submit.prevent="submitReply">
          <label class="block text-gray-700 font-bold mb-2">Balasan Anda:</label>
          <textarea v-model="replyText" rows="4" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 mb-4" placeholder="Tulis balasan di sini..."></textarea>
          
          <div class="flex gap-3">
            <button type="button" @click="showModal = false" class="w-1/3 bg-gray-300 hover:bg-gray-400 py-2 rounded-lg font-bold text-gray-800">Batal</button>
            <button type="submit" :disabled="isSubmitting" class="w-2/3 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-bold">
              {{ isSubmitting ? 'Mengirim...' : 'Kirim Balasan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Swal from 'sweetalert2';
definePageMeta({ layout: "admin" });

const baseURL = "https://kecilung-resto.vercel.app/api";
const { data: res, refresh } = useLazyFetch(`${baseURL}/contacts`);
const messages = computed(() => res.value?.data || []);

const showModal = ref(false);
const isSubmitting = ref(false);
const selectedMessage = ref(null);
const replyText = ref('');

const openReplyModal = (msg) => {
  selectedMessage.value = msg;
  replyText.value = msg.reply || ''; // Jika sudah pernah dibalas, tampilkan isinya
  showModal.value = true;
};

const submitReply = async () => {
  isSubmitting.value = true;
  try {
    await $fetch(`${baseURL}/contacts/${selectedMessage.value.id}/reply`, {
      method: 'PUT',
      body: { reply: replyText.value }
    });
    
    Swal.fire('Berhasil', 'Balasan berhasil disimpan.', 'success');
    showModal.value = false;
    refresh();
  } catch (error) {
    Swal.fire('Gagal', 'Terjadi kesalahan saat menyimpan balasan.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>