


/*  
- Necesito que el usuario verifique su nombre y edad
- Necesito mostrar los productos con sus nombres y precios
- Necesito que se sume el iba automaticamente
- Necesito que se vayan acumulando los productos a un carrito
- Necestio que si la compra supera los $500 pesos le diga que tiene envio gratis sino que le avise que le cuesta $100 pesos mas
*/

const usuario = {
    nombre: prompt("ingrese su nombre"),
    apellido: prompt("ingrese su apellido")
}

const edad = prompt("ingrese su edad")

do {
    console.log("1. Alfajor $150 \n 2. Caramelos $5 \n 3. Tita $60 \n 4. Chupetin $30 \n 5. Chicle $100\n 0. Ninguno");
    producto = parseFloat(prompt("Seleccione el producto"));
    break;
} while (producto !== "0");

const listaProductos = [
    {
        name: "Alfajor Jorgelin",
        class: "Negro",
        price: 150,
    },
    {
        name: "Sugus",
        class: "Verdes",
        price: 5,
    },
    {
        name: "Tita",
        class: "Doble",
        price: 60,
    },
    {
        name: "Chupetin Evolution",
        class: "Azul",
        price: 30,
    },
    {
        name: "Beldent",
        class: "Menta",
        price: 100,
    }
]

const envio = (listaProductos.price >= 100) ? true : false

envio ? alert("El envio es gratis") : alert("el envio tiene un valor de $20")

const validarEdad = edad >= 18 && new Date ()

console.log(validarEdad);

console.log(edad || "la edad es valida");

const {nombre, apellido} = usuario

console.log(nombre);
console.log(apellido);


const desestructurar = (item) => {
    const {name, class} = item
    console.log(name, class);
}

desestructurar(listaProductos)

console.log(...usuario.nombre);
