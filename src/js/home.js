console.log('hola mundo!');
const noCambia = "Leonidas";

let cambia = "@LeonidasEsteban"

function cambiarNombre(nuevoNombre) {
  cambia = nuevoNombre
}

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


// ajax = XHLHttpRequest

$.ajax('https://randomuser.me/apiKKK/', {
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
fetch('https://randomuser.men/api/')
  .then(function(response){
    console.log(response)
    return response.json()
  }) 
  .then(function(user){
    console.log('user', user.results[0].name.first)
  })
  .catch(function(){
    console.log('algo fallo')
  })
