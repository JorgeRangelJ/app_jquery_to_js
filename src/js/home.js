console.log('hola mundo!');

// ES5 var
// ES6 let y const

const noCambia = "Jorge Rangel";
let cambia = "@JorgeRangel"

// Crear funcion en Js
function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}





// Crear una promesa en Js
const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo 3');
  }, 3000)
})

// getUser
//   .then(function() {
//     console.log('todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

// Promesa para muchas peticiones muchas promesas
Promise.all([
  getUser,
  getUserAll
])

.then(function(message){
  console.log(message)
})
.catch(function(message){
  console.log(message)
})

// Carrera de promesas
Promise.race([
  getUser,
  getUserAll,
])
.then(function(message) {
  console.log(message);
})
.catch(function(message) {
  console.log(message)
})






// jquery  javascript solicitar datos de un servidor ajax = XHLHttpRequest
$.ajax('https://randomuser.me/api/', {
  method:'get',
  success: function(data){
    console.log(data)
  },
  error: function(error){
    console.log(error)
  }
})

// javascript solicitar datos de un servidor

//retorna una promesa
fetch('https://randomuser.me/api/') // fectch Se usa para pedir datos de un servidor 
  .then(function(response){
    // console.log(response)
    return response.json() // Respuest viene en json y una promesa puede devolver una promesa
  }) 
  .then(function(user){
    console.log('user', user.results[0].name.first) 
  })
  .catch(function(){
    console.log('algo fallo')
  });



  // Funciones asincronas
  (async function load() { // async se usa para crear funciones asincronas
      // await  Para esperar las peticiones del API

     async function getData(url) {
      const response = await fetch(url)
      const data = await response.json()
      return data;
    }

    const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
    console.log(actionList, dramaList, animationList)

    // templates
    function videoItemTemplate(movie) {
      return (
        `<div class="primaryPlaylistItem">
          <div class="primaryPlaylistItem-image">
            <img src="${movie.medium_cover_image}">
          </div>
          <h4 class="primaryPlaylistItem-title">
            ${movie.title}
          </h4>
        </div>`
      )
    }

    function createTemplate(HTMLString) {
      const html = document.implementation.createHTMLDocument();
      html.body.innerHTML = HTMLString;
      return html.body.children[0];
    }
    
    function renderMovieList(list, $container) {
      // actionList.data.movies
      $container.children[0].remove();
      list.forEach((movie) => {
        const HTMLString = videoItemTemplate(movie);
        const movieElement = createTemplate(HTMLString)
        $container.append(movieElement)
      });
    }



    const $actionContainer = document.querySelector('#action')
    renderMovieList(actionList.data.movies, $actionContainer)
    
    const $dramaContainer = document.getElementById('drama')
    renderMovieList(dramaList.data.movies, $dramaContainer)

    const $animationContainer = document.getElementById('animation')
    renderMovieList(animationList.data.movies, $animationContainer)



    // Selector para los featuring
    const $featuringContainer = document.getElementById('#featuring')

    // Selector para el formulario
    const $form = document.getElementById('#form')

    // Selector para el home
    const $home = document.getElementById('#home')

    // Selectores para el modal
    const $modal = document.getElementById('modal');
    const $overlay = document.getElementById('overlay');
    const $hideModal = document.getElementById('hide-modal');

    const $modalTitle = $modal.querySelector('h1')
    const $modalImage = $modal.querySelector('img')
    const $modalDescription = $modal.querySelector('p')


  })()

