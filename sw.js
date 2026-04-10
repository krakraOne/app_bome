const C='bf-v6-p2';
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>fetch(self.location.href).then(r=>c.put(self.location.href,r)).catch(()=>{})));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>{const n=fetch(e.request).then(r=>{if(r&&r.status===200){const cl=r.clone();caches.open(C).then(ca=>ca.put(e.request,cl));}return r;}).catch(()=>c);return c||n;}));});
