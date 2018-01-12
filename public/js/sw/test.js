self.addEventListener('install', function(){
  
})


self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).then(function(response){
      if (response.status == 404){
        // return new Response('Whoops, not found');
        return  fetch('/imgs/dr-evil.gif')
      }
      return response;
    }).catch(function(){
      return new Response("Our site is broken, sorry");
    })
  )
});