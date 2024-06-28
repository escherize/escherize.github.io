// service-worker.js
                          self.addEventListener('install', function(event) {
                            self.skipWaiting();
                          });

                          self.addEventListener('activate', function(event) {
                            event.waitUntil(self.clients.claim());
                          });

                          self.addEventListener('fetch', function(event) {
                            event.respondWith(
                              fetch(event.request).then(function(response) {
                                const newHeaders = new Headers(response.headers);
                                newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
                                newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');

                                return new Response(response.body, {
                                  status: response.status,
                                  statusText: response.statusText,
                                  headers: newHeaders
                                });
                              })
                            );
                          });