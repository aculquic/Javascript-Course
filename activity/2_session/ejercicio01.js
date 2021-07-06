//Ejercicio 01 Propiedades de array
let person = {
    name: "Lucas",
    age: 27,
    profession: "Developer",

};

function lista(person) {
    let resultado = Object.keys(person);
    return resultado;

};
console.log('Propiedades', lista(person))


//Ejercicio 03 Cadena Invertidad

let cadena = "Hola Andrea Culqui"

let resultado = (cadena) => {
    return cadena.split('').reverse().join('');
};

console.log('Cadena:', resultado(cadena));

//Ejercicio 04 Creación de Clases

class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    login() {
        console.log("Starting ....");

        if (this.username === "admin" && this.password === "passwd") {
            alert("User logged in");
        } else {
            alert("User or passwd incorrect");
        }

    }
}

let login = new Login("admin", "passwd");
login.login();
let logbad = new Login("pepe", "bad");
logbad.login();