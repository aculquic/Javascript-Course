// 1. Creación de Resultado : "Hello World"
let formatter = {
    prefix: "Hello",
    append(cadena) {
        //cadena = "World";
        console.log("Result: " + formatter.prefix + " " + cadena);
    },
};

formatter.append("World");

// 2. Cadena en minuscula: "i’m lucas"

function Formatter(valor) {
    this.valor = valor;
}

let name = new Formatter("I’m Lucas");


Formatter.prototype.toLowerString = function() {
    console.log("Result: " + this.valor.toLowerCase());

}

name.toLowerString();