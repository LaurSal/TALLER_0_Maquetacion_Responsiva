//declarar la funcion
/*invocar la funcion

function pocima(ingrediente1, ingrediente2){
    //sentencias o instrucciones de la funcion
    return pocima
}*/

/*invocar

pocima(pelo, uñas)*/

//--------------------------------------------------------------------

//declaracion
/*function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1)
    return moneda;
}
//invocar funcion por declaracion
let lanzamiento = lanzarmoneda();
console.log(`El lanzamiento fue ${lanzamiento}`);

//declaracion con parametros 
function ganar(saldo, apuesta){
    saldo = saldo + apuesta*2;
    return saldo;
}

function perder(saldo, apuesta){
    saldo = saldo - apuesta
    return saldo;
}*/

//invocar la funcion y enviar argumentos segun corresponda

/*console.log(`gano, saldo actual: ${ganar(1000, 100)}`)
console.log(`perdio, saldo actual: ${perder(1000, 100)}`)*/

//--------------------------------------------------------------------

//expresion

/*let lanzar = function lanzarmoneda(){
    let moneda = Math.floor((Math.random()*2)+1)
    return moneda;
}

let lanzamiento = lanzar()

let ganar = function ganar(saldo, apuesta){
    saldo = saldo + apuesta*2;
    return saldo;
}

let gana = ganar(saldo,apuesta)

//--------------------------------------------------------------------

//flecha (arrow)
let perder=(saldo,apuesta)=>{
    saldo = saldo - apuesta
    return saldo;
}*/

//--------------------------------------------------------------------

//anonima
/*let ganar = function (saldo, apuesta){
    saldo = saldo + apuesta*2;
    return saldo;
}*/

//--------------------------------------------------------------------

//ejercicio cara y sello

//funciones

function lanzarMoneda(){
    let moneda = Math.floor((Math.random()*2)+1)
    return moneda;
}

function ingresarJugador(){
    let jugador = parseInt(prompt('Digite 1 para elegir cara o 2 para elegir sello, si digita otro número volverá a aparecer esta ventana'));
    switch(jugador){
        case 1:
            return 1;
        case 2:
            return 2;
        default:
            ingresarJugador();
    }
}

function ganar(saldo, apuesta){
    saldo = saldo + apuesta*2;
    return saldo;
}

function perder(saldo, apuesta){
    saldo = saldo - apuesta
    return saldo;
}

//ejecucion

let saldo = 0;
let jugar = 1;

while (jugar == 1){
    let jugador = ingresarJugador();
    let apuesta = parseInt(prompt('Ingrese el valor de su apuesta'));
    let lanzamiento = lanzarMoneda();

    switch(lanzamiento){
        case 1:
            console.log(`El lanzamiento fue cara`);
            break;
        case 2:
            console.log(`El lanzamiento fue sello`)
            break;
        default:
            console.log(``);
    }

    if (lanzamiento == jugador){
        saldo = ganar(saldo, apuesta);
    } else {
        saldo = perder(saldo, apuesta);
    }

    console.log(`Su saldo actual es de ${saldo}`);
    jugar = parseInt(prompt('Digite 1 para seguir jugando, o digite 0 para dejar de jugar'));
}

window.alert('Gracias por jugar :D')
