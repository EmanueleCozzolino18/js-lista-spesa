/* STRICT MODE */
"use strict";

console.log("Lo script funziona correttamente")

const listaSpesa = [
    'Curry',
    'Limoni',
    'Acqua',
    'Biscotti',
    'Latte',
    'Frutta',
    'Cereali',
    'Salumi',
    'Carne'];

let counter = 0;

const ul = document.getElementById('list');

while (counter < listaSpesa.length) {

    const li = document.createElement('li');

    const i = document.createElement('i');

    const h5 = document.createElement('h5');

    h5.innerText = listaSpesa[counter];

    li.append(i, h5)

    ul.append(li);

    counter++;
}