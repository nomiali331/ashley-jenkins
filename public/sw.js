let cacheDate="appV1";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheDate).then((cache)=>{
            cache.addAll([
                "/static/js/bundle.js",
                "/index.html",
                "/"
            ])
        })
    )
})
this.addEventListener("fetch", (event)=>{
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result
            }
        })
    )
})