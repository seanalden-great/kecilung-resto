// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    // Middleware ini dijalankan di sisi klien saja
    if (import.meta.client) {
        const token = localStorage.getItem('admin_token');

        // Jika tidak ada token dan sedang mencoba masuk ke halaman admin (kecuali halaman login)
        if (!token && to.path.startsWith('/admin') && to.path !== '/admin/auth/login_page') {
            return navigateTo('/admin/auth/login_page');
        }
    }
});