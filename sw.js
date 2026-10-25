// Service worker بسيط: بدون كاش للملفات (عشان التحديثات تظهر فورًا)، فقط يخلي الموقع قابل للتثبيت
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, {cache: 'no-store'}).catch(() => new Response(
      '<meta charset="utf-8"><body style="font-family:sans-serif;background:#08070a;color:#fff;text-align:center;padding:60px 20px">لا يوجد اتصال بالإنترنت، حاول مرة تانية</body>',
      {status: 503, headers: {'Content-Type': 'text/html; charset=utf-8'}})));
  }
});
