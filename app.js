//let numeroSecreto =generarNumeroSecreto();
let numeroSecreto =0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

console.log('num.Secreto Inicial: ', numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    //muestro l cantidad de intentos del usuario   
//console.log('Intento: ',intentos);

    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez..' : 'veces..' } `);
        intentos = 1;
        //aqui remuevo el atributo de la caja "nuevo juego" que se encontraba apagada(disable)
        document.getElementById('reiniciar').removeAttribute('disabled');

    }  else {
        //cuando el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor..');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor..');
        }
        intentos++;
        //aqui limpio el valor de la caja de introduccion del numero
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value ="";
}

function generarNumeroSecreto() {
  //  return Math.floor(Math.random()*10)+1;
  let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log('numero Generado: ',numeroGenerado);
console.log('lista Num Sorteados: ', listaNumerosSorteados);

//si ya sorteamos todos los numeros
if (listaNumerosSorteados.length==numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
}else{
 //si el numeroGenerado esta incluido en la lista hacer lo sgte.
  if (listaNumerosSorteados.includes(numeroGenerado)) {
    return generarNumeroSecreto();
    
  } else {
    listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
  }
}
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);

    numeroSecreto = generarNumeroSecreto();
    console.log('numero Secreto 2: ',numeroSecreto);
    
    intentos = 1;
}

function reiniciarJuego() {
    //se necesitamos reiniciar el juego, por lo que se debe hacer los sgtes pasos
    //limpiar caja
    limpiarCaja();
    //volver a indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();

    //deshabiliatr el boton del nuevo juego
      //aqui agrego nuevamente el atributo de la caja "nuevo juego" que se encontraba encendida a apagada(disable)
           document.querySelector('#reiniciar').setAttribute('disabled','true');

     

}

reiniciarJuego();