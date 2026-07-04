const selectDimension = document.getElementById('select-dimension-arreglo')
const btnCargarVector = document.getElementById('btn-cargar-vector')
const btnVaciarVector = document.getElementById('btn-vaciar-vector')
const btnPresentarVector = document.getElementById('btn-presentar-vector')
const tableTbody = document.querySelector('#id-table-vector-numerico > tbody')
const txtRespuesta = document.getElementById('id-txt-respuesta')

const btnModa = document.getElementById('id-btn-calcular-moda')

const NUM_MAXIMO_RANDOM = 10
let vector = []

btnCargarVector.addEventListener('click', function (e) {
  const dimension = selectDimension.value
  vector = []
  cargarVector(dimension)
  console.log(vector)
})

btnPresentarVector.addEventListener('click', function (e) {
  presentarVector()
})

btnVaciarVector.addEventListener('click', function (e) {
  vector = []
  tableTbody.innerHTML = ''
  txtRespuesta.value = ''
})

btnModa.addEventListener('click',function(e){
  let moda = fnCalcularModa()
  txtRespuesta.value = fnCalcularModa()
  if(moda == 0){
   txtRespuesta.value = "No hay moda"
  }
})

function cargarVector(dimension) {
  for (let i = 0; i < dimension; i++) {
    const numero = Math.ceil(Math.random() * NUM_MAXIMO_RANDOM)
    vector[i] = numero
  }
}

function presentarVector() {
  let contador = 0
  let str = ''
  while (contador < 2) { // Ciclo principal
    str += '<tr>'
    // Ciclo secundario
    for (let i = 0; i < vector.length; i++) {
      if (contador == 0) {
        // Presentar el índice del vector
        str += `<td>${i}</td>`
      } else {
        // Presentar el valor del vector
        str += `<td bgcolor="#00FF00">${vector[i]}</td>`
      }
    }
    str += '</tr>'
    contador++
  }
  // Presentar el vector en la tabla
  tableTbody.innerHTML = str
}

function fnCalcularModa(){
  let  moda = 0
  let valorrepetido = 0 

  for(let i = 0 ; i < vector.length ; i++){
    const numero = vector [i]
    let contarNrepetido = 0
    for( let j = 0 ; j < vector.length ; j++){
      if(numero === vector[j]){
        contarNrepetido ++
    }
    if(contarNrepetido > 1 && contarNrepetido > valorrepetido ){
      valorrepetido = contarNrepetido
      moda = numero
    }
  }
}
 return moda
}