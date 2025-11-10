let nombre = "Paula Casas";

// Longitud 
console.log(nombre.length); // saber cuentos caracteres tiene el string

// Mayúsculas y minúsculas
console.log(nombre.toUpperCase()); // convierte a mayúsculas
console.log(nombre.toLowerCase()); // convierte a minúsculas

// Ver si una cadena incluye un texto
console.log(nombre.includes("Paula")); // true

// Reemplazar parte de una cadena
console.log(nombre.replace("Casas", "Gómez")); // Paula Gómez

console.log(`Hola ${nombre}`); // Concatenación