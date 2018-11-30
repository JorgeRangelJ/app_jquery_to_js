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
  })
