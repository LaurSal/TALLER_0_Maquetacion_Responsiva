let num1=parseInt(prompt('Digite el primer número'));
let num2=parseInt(prompt('Digite el segundo número'));

function sumar(num1, num2){
    return num1 + num2;
}

function restar(num1, num2){
    return num1 - num2;
}

function multiplicar(num1, num2){
    return num1 * num2;
}

function dividir(num1, num2){
    return num1 / num2;
}

console.log(`La suma de los dos números es ${sumar(num1,num2)}`)
console.log(`La resta de los dos números es ${restar(num1,num2)}`)
console.log(`La multiplicación entre los dos números es ${multiplicar(num1,num2)}`)
console.log(`La división entre los dos números es ${dividir(num1,num2)}`)