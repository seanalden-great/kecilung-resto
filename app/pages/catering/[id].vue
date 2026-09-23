<!-- <template>
  <div class="container mx-auto px-6 py-16 max-w-5xl" v-if="catering">
    <NuxtLink to="/articles" class="text-gray-500 hover:text-orange-500 mb-6 inline-block">&larr; Kembali</NuxtLink>
    
    <div class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-10">
      <div class="md:w-1/2">
        <img :src="activeImage" class="w-full h-80 object-cover rounded-xl mb-4 shadow-sm" />
        <div class="flex gap-2 overflow-x-auto">
          <img v-for="img in catering.images" :key="img.id" :src="img.image_url" @click="activeImage = img.image_url" class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 hover:border-orange-500" />
        </div>
      </div>
      
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ catering.name }}</h1>
        <p class="text-gray-700 leading-relaxed mb-8">{{ catering.description }}</p>
        <button @click="openBookingModal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition">
          Book Jadwal Sekarang
        </button>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6">Formulir Booking</h2>
        <form @submit.prevent="submitBooking">
          <input v-model="form.customer_name" type="text" placeholder="Nama Lengkap" required class="w-full mb-4 px-4 py-3 border rounded-lg" />
          <input v-model="form.phone" type="tel" placeholder="Nomor WhatsApp" required class="w-full mb-4 px-4 py-3 border rounded-lg" />
          <input v-model="form.booking_date" type="datetime-local" required class="w-full mb-6 px-4 py-3 border rounded-lg" />
          
          <div class="flex gap-4">
            <button type="button" @click="showModal = false" class="w-1/2 bg-gray-200 py-3 rounded-lg font-bold text-gray-700">Batal</button>
            <button type="submit" class="w-1/2 bg-orange-500 text-white py-3 rounded-lg font-bold hover:bg-orange-600">Ajukan</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

const route = useRoute();
const baseURL = "https://kecilung-resto.vercel.app/api";

const { data: res } = await useFetch(`${baseURL}/catering/packages/${route.params.id}`);
const catering = computed(() => res.value?.data);

const activeImage = ref('');
watchEffect(() => {
  if (catering.value?.images?.length > 0) activeImage.value = catering.value.images[0].image_url;
});

const showModal = ref(false);
const openBookingModal = () => showModal.value = true;

const form = ref({ customer_name: "", phone: "", booking_date: "", catering_id: parseInt(route.params.id) });

const submitBooking = async () => {
  try {
    // Ubah tanggal menjadi format RFC3339 yang diterima Go (Time)
    const payload = { ...form.value, booking_date: new Date(form.value.booking_date).toISOString() };
    
    await $fetch(`${baseURL}/catering/bookings`, { method: 'POST', body: payload });
    
    showModal.value = false;
    Swal.fire('Berhasil!', 'Booking diajukan, menunggu konfirmasi Admin.', 'success');
  } catch (err) {
    // Menangkap pesan bentrok jadwal dari backend
    Swal.fire('Maaf', err.response?._data?.error || 'Gagal melakukan booking.', 'error');
  }
};
</script> -->

<!-- <template>
  <div class="container mx-auto px-6 py-16 max-w-5xl">
    <NuxtLink to="/catering" class="text-gray-500 hover:text-orange-500 mb-6 inline-block font-medium">
      &larr; Kembali ke Daftar Katering
    </NuxtLink>
    
    <div v-if="pending" class="flex justify-center py-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>

    <div v-else-if="catering" class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-10">
      
      <div class="md:w-1/2">
        <div class="h-80 w-full mb-4 overflow-hidden rounded-xl bg-gray-100 border">
          <img v-if="activeImage" :src="activeImage" class="w-full h-full object-cover shadow-sm" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400">Tidak ada gambar</div>
        </div>
        
        <div class="flex gap-2 overflow-x-auto pb-2">
          <img 
            v-for="img in catering.images" 
            :key="img.id" 
            :src="img.image_url" 
            @click="activeImage = img.image_url" 
            class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-colors"
            :class="activeImage === img.image_url ? 'border-orange-500' : 'border-transparent hover:border-orange-300'"
          />
        </div>
      </div>
      
      <div class="md:w-1/2 mt-8 md:mt-0 flex flex-col">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ catering.name }}</h1>
        <div class="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
        <p class="text-gray-700 leading-relaxed mb-8 whitespace-pre-line flex-1">
          {{ catering.description }}
        </p>
        
        <button @click="openBookingModal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
          Pesan Jadwal Sekarang
        </button>
      </div>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-xl w-full max-w-md shadow-2xl">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Formulir Pemesanan</h2>
        <form @submit.prevent="submitBooking">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            <input v-model="form.customer_name" type="text" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2">Nomor WhatsApp</label>
            <input v-model="form.phone" type="tel" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="mb-8">
            <label class="block text-gray-700 text-sm font-bold mb-2">Tanggal & Waktu Acara</label>
            <input v-model="form.booking_date" type="datetime-local" required class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
          </div>
          
          <div class="flex gap-4">
            <button type="button" @click="showModal = false" class="w-1/2 bg-gray-200 hover:bg-gray-300 py-3 rounded-lg font-bold text-gray-700 transition">Batal</button>
            <button type="submit" :disabled="isSubmitting" class="w-1/2 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition disabled:opacity-50">
              {{ isSubmitting ? 'Mengajukan...' : 'Ajukan Pesanan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

const route = useRoute();
const baseURL = "https://kecilung-resto.vercel.app/api";

// Fetch data menggunakan useLazyFetch agar tidak freeze saat pindah halaman
const { data: res, pending } = useFetch(`${baseURL}/catering/packages/${route.params.id}`, {
  lazy: import.meta.client
});
const catering = computed(() => res.value?.data);

// Manajemen Gambar Aktif di Galeri
const activeImage = ref('');
watchEffect(() => {
  if (catering.value?.images && catering.value.images.length > 0) {
    activeImage.value = catering.value.images[0].image_url;
  }
});

// Manajemen Modal dan Form
const showModal = ref(false);
const isSubmitting = ref(false);
const openBookingModal = () => showModal.value = true;

const form = ref({ customer_name: "", phone: "", booking_date: "", catering_id: parseInt(route.params.id) });

const submitBooking = async () => {
  isSubmitting.value = true;
  try {
    // Ubah format tanggal agar bisa dipahami oleh Golang
    const payload = { 
      ...form.value, 
      booking_date: new Date(form.value.booking_date).toISOString() 
    };
    
    await $fetch(`${baseURL}/catering/bookings`, { method: 'POST', body: payload });
    
    showModal.value = false;
    Swal.fire('Berhasil!', 'Pesanan Anda telah diajukan. Admin kami akan segera menghubungi Anda melalui WhatsApp.', 'success');
  } catch (err) {
    Swal.fire('Mohon Maaf', err.response?._data?.error || 'Gagal melakukan pemesanan.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script> -->

<template>
  <div class="container mx-auto px-6 py-16 max-w-5xl">
    <NuxtLink to="/catering" class="text-gray-500 hover:text-orange-500 mb-6 inline-block font-medium">
      &larr; Kembali ke Daftar Katering
    </NuxtLink>
    
    <div v-if="pending" class="flex justify-center py-32">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
    </div>

    <div v-else-if="catering" class="bg-white rounded-2xl shadow-lg p-8 md:flex gap-10 mb-12">
      <!-- ... (Galeri Gambar Tetap Sama) ... -->
      <div class="md:w-1/2">
        <div class="h-80 w-full mb-4 overflow-hidden rounded-xl bg-gray-100 border">
          <img v-if="activeImage" :src="activeImage" class="w-full h-full object-cover shadow-sm" />
          <div v-else class="w-full h-full flex items-center justify-center text-gray-400">Tidak ada gambar</div>
        </div>
        <div class="flex gap-2 overflow-x-auto pb-2">
          <img 
            v-for="img in catering.images" :key="img.id" :src="img.image_url" 
            @click="activeImage = img.image_url" 
            class="w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-colors"
            :class="activeImage === img.image_url ? 'border-orange-500' : 'border-transparent hover:border-orange-300'"
          />
        </div>
      </div>
      
      <div class="md:w-1/2 mt-8 md:mt-0 flex flex-col">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ catering.name }}</h1>
        <div class="w-16 h-1 bg-orange-500 mb-6 rounded-full"></div>
        <p class="text-gray-700 leading-relaxed mb-8 whitespace-pre-line flex-1">{{ catering.description }}</p>
        <button @click="openBookingModal" class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transition transform hover:-translate-y-1">
          Pesan Jadwal Sekarang
        </button>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- BAGIAN DAFTAR BOOKING YANG SUDAH APPROVED  -->
    <!-- ========================================== -->
    <div v-if="catering" class="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
      <h2 class="text-2xl font-bold text-gray-800 mb-2">Jadwal yang Sudah Terisi</h2>
      <p class="text-gray-500 mb-6">Paket katering ini telah di-booking sebanyak <strong>{{ approvedBookings.length }} kali</strong>. Harap perhatikan waktu di bawah agar jadwal Anda tidak bertabrakan.</p>
      
      <div v-if="approvedBookings.length === 0" class="bg-orange-50 text-orange-700 p-4 rounded-lg text-center font-medium">
        Belum ada jadwal yang terisi. Jadilah yang pertama memesan!
      </div>
      
      <div v-else class="grid gap-4 md:grid-cols-2">
        <div v-for="book in approvedBookings" :key="book.id" class="border border-gray-200 p-4 rounded-lg flex flex-col gap-2 bg-gray-50">
          <div class="flex justify-between items-center">
            <span class="font-bold text-gray-800">{{ book.customer_name }}</span>
            <span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">APPROVED</span>
          </div>
          <p class="text-sm text-gray-600"><span class="font-semibold">Acara:</span> {{ book.description }}</p>
          <p class="text-sm text-gray-600"><span class="font-semibold">Peserta:</span> {{ book.member_count }} Orang</p>
          <div class="mt-2 text-sm">
            <p class="font-semibold text-orange-600">
              Mulai: {{ new Date(book.booking_date).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) }}
            </p>
            <p class="font-semibold text-red-600">
              Selesai: {{ new Date(book.booking_end_date).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' }) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- MODAL BOOKING (Dengan Field Baru)          -->
    <!-- ========================================== -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div class="bg-white p-6 md:p-8 rounded-xl w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto">
        <h2 class="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Formulir Pemesanan Lengkap</h2>
        <form @submit.prevent="submitBooking">
          
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
              <input v-model="form.customer_name" type="text" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">No. WhatsApp</label>
              <input v-model="form.phone" type="tel" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Jumlah Orang (Pax)</label>
              <input v-model="form.member_count" type="number" min="1" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Jenis Kegiatan</label>
              <input v-model="form.description" type="text" placeholder="Cth: Ulang Tahun, Rapat" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>
          
          <div class="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">Waktu MULAI</label>
              <input v-model="form.booking_date" type="datetime-local" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
            <div>
              <label class="block text-gray-700 text-sm font-bold mb-2">Waktu SELESAI</label>
              <input v-model="form.booking_end_date" type="datetime-local" required class="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500" />
            </div>
          </div>
          
          <div class="flex gap-4">
            <button type="button" @click="showModal = false" class="w-1/3 bg-gray-200 hover:bg-gray-300 py-3 rounded-lg font-bold text-gray-700 transition">Batal</button>
            <button type="submit" :disabled="isSubmitting" class="w-2/3 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold transition disabled:opacity-50">
              {{ isSubmitting ? 'Mengecek Jadwal...' : 'Ajukan Pesanan' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

const route = useRoute();
const baseURL = "https://kecilung-resto.vercel.app/api";

// Fetch data katering utama
const { data: res, pending } = useFetch(`${baseURL}/catering/packages/${route.params.id}`, {
  lazy: import.meta.client
});
const catering = computed(() => res.value?.data);

// Fetch data booking yang sudah APPROVED
const { data: approvedRes, refresh: refreshBookings } = useFetch(`${baseURL}/catering/packages/${route.params.id}/bookings`, {
  lazy: import.meta.client
});
const approvedBookings = computed(() => approvedRes.value?.data || []);

const activeImage = ref('');
watchEffect(() => {
  if (catering.value?.images && catering.value.images.length > 0) {
    activeImage.value = catering.value.images[0].image_url;
  }
});

const showModal = ref(false);
const isSubmitting = ref(false);
const openBookingModal = () => showModal.value = true;

const form = ref({ 
  customer_name: "", phone: "", description: "", member_count: 1, 
  booking_date: "", booking_end_date: "", catering_id: parseInt(route.params.id) 
});

const submitBooking = async () => {
  isSubmitting.value = true;
  try {
    const payload = { 
      ...form.value, 
      booking_date: new Date(form.value.booking_date).toISOString(),
      booking_end_date: new Date(form.value.booking_end_date).toISOString()
    };
    
    // Request POST ke Backend. Jika tabrakan, Backend otomatis kirim Error (Catch)
    await $fetch(`${baseURL}/catering/bookings`, { method: 'POST', body: payload });
    
    showModal.value = false;
    Swal.fire('Berhasil!', 'Pesanan berhasil diajukan tanpa tabrakan jadwal. Tunggu konfirmasi WA dari Admin.', 'success');
    refreshBookings(); // Update list jadwal terisi
  } catch (err) {
    // Pesan tabrakan dari Golang akan muncul di sini
    Swal.fire('Jadwal Tidak Tersedia', err.response?._data?.error || 'Gagal melakukan pemesanan.', 'error');
  } finally {
    isSubmitting.value = false;
  }
};
</script>