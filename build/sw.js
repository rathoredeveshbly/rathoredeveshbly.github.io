let cacheData = "Mint";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/bootstrap.min.css',
                '/index.html',
                '/',
                "/users"
            ])
        })
    )
})
this.addEventListener("fetch", (event) => {
  event.waitUntil(
    this.registration.showNotification("Notiication",{
      body:'Hello from Investwell'
    })
  )
    if (!navigator.onLine) {
        // if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
        //     event.waitUntil(
        //         this.registration.showNotification("Internet", {
        //             body: "internet not working",
        //         })
        //     )
        // }
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
                let requestUrl = event.request.clone();
                fetch(requestUrl)
            })
        )
    }
}) 
