const animal={
    nombre:"Felix",
    tipo:"gato",
    edad:"4",
    comer(){
        //console.log("El gato está comiendo")
        //acceder a las propiedades de un objeto
        console.log(`${animal.nombre} está comiendo`);
        //con la palabra reservada this
        console.log(`${this.nombre} está comiendo`);
    }
}

animal.comer()

//DOM: modelo de documento de objetos, hay que ubicar el enlace del js antes de cerrar el body
//element representacion grafica de una etiqueta
//document.querySelector("selector") -> usa # o . para distinguir si es id o clase
//para acceder o cambiar un atributo: getAttribute y setAttribute
