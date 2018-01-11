self.addEventListener('fetch', function(event) {
  // event.respondWith(
  //   new Response(event, {
  //     headers: {'Content-Type': 'text/html'}
  //   })
  // );

  // if (event.request.destination == 'image'){
  //   event.respondWith(
  //    fetch('/imgs/dr-evil.gif')
  //    );
  // }
  // event.respondWith(
  //   fetch('/imgs/dr-evil.gif')
  // );
  // console.log(event.request.destination);
  // console.log(event.request)
  // var length = event.request.url.length
  // var urlEnding = event.request.url.substring(length-4, length);
  // console.log(urlEnding)

  //   if (urlEnding == '.jpg'){
  //   event.respondWith(
  //    fetch('/imgs/dr-evil.gif')
  //    );
  // }

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