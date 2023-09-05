var listaNumerosEjemplo = [2, 4, 6, -1, 5, -4, 0];

/**
 * Invierte una lista de números.
 */
function invertirLista(listaDeNumeros) {
    return listaDeNumeros.reverse();
}

console.log("invertirLista([2,3,4]): ", invertirLista([2, 3, 4])); // Respuesta: [4, 3, 2]

/**
 * Calcula el promedio de una lista de números.
 */
function calcularPromedio(listaDeNumeros) {
    if (listaDeNumeros.length === 0) {
        return 0;
    }

    const suma = listaDeNumeros.reduce((total, numero) => total + numero, 0);
    const promedio = suma / listaDeNumeros.length;
    return promedio;
}

console.log("calcularPromedio([2,3,4]): ", calcularPromedio([2, 3, 4])); // Respuesta: 3
console.log("calcularPromedio(listaNumerosEjemplo): ", calcularPromedio(listaNumerosEjemplo)); // Respuesta: 1.4285714285714286

/**
 * Crea una lista de números en secuencia desde `inicio` hasta `fin`.
 */
function crearListaDeNumeros(inicio, fin) {
    if (inicio > fin) {
        return [];
    }

    const lista = [];
    for (let i = inicio; i <= fin; i++) {
        lista.push(i);
    }
    return lista;
}

console.log("crearListaDeNumeros(2,5): ", crearListaDeNumeros(2, 5)); // Respuesta: [2, 3, 4, 5]

/**
 * Ordena una lista de números de mayor a menor.
 */
function ordenarDeMayorAMenor(listaDeNumeros) {
    return listaDeNumeros.sort((a, b) => b - a);
}

console.log("ordenarDeMayorAMenor([2,3,4]): ", ordenarDeMayorAMenor([2, 3, 4])); // Respuesta: [4, 3, 2]

/**
 * Encuentra el número más grande en una lista.
 */
function encontrarNumeroMayor(listaDeNumeros) {
    if (listaDeNumeros.length === 0) {
        return undefined;
    }

    return Math.max(...listaDeNumeros);
}

console.log("encontrarNumeroMayor([2,3,4]): ", encontrarNumeroMayor([2, 3, 4])); // Respuesta: 4

/**
 * Ordena una lista de palabras por longitud.
 */
function ordenarPalabrasPorLongitud(listaDePalabras) {
    return listaDePalabras.sort((a, b) => a.length - b.length);
}

console.log("ordenarPalabrasPorLongitud(['abc', 'a', 'ab']): ", ordenarPalabrasPorLongitud(['abc', 'a', 'ab'])); // Respuesta: ['a', 'ab', 'abc']

/**
 * Encuentra la palabra más corta en una lista.
 */
function encontrarPalabraMasCorta(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return undefined;
    }

    return listaDePalabras.reduce((minPalabra, palabra) => (palabra.length < minPalabra.length ? palabra : minPalabra), listaDePalabras[0]);
}

console.log("encontrarPalabraMasCorta(['abc', 'a', 'ab']): ", encontrarPalabraMasCorta(['abc', 'a', 'ab'])); // Respuesta: 'a'

/**
 * Filtra números positivos en una lista.
 */
function filtrarSoloPositivos(listaDeNumeros) {
    return listaDeNumeros.filter(numero => numero > 0);
}

console.log("filtrarSoloPositivos([1, -1, 0]): ", filtrarSoloPositivos([1, -1, 0])); // Respuesta: [1]

/**
 * Cuenta las notas aprobadas en una lista.
 */
function contarAprobados(listaDeNotas) {
    return listaDeNotas.filter(nota => nota >= 5).length;
}

console.log("contarAprobados([10, 4, 6, 7, 1, 9]): ", contarAprobados([10, 4, 6, 7, 1, 9])); // Respuesta: 4

/**
 * Filtra valores 'truthy' en una lista.
 */
function filtrarSoloTruthy(listaDeValores) {
    return listaDeValores.filter(valor => Boolean(valor));
}

console.log("filtrarSoloTruthy(): ", filtrarSoloTruthy(["Hola", "", null, 1, 0, -1, undefined, [], {}])); // Respuesta: ["Hola", 1]

/**
 * Enumera una lista de palabras.
 */
function enumerarLista(listaDePalabras) {
    if (listaDePalabras.length === 0) {
        return "";
    }

    if (listaDePalabras.length === 1) {
        return listaDePalabras[0] + ".";
    }

    const ultimaPalabra = listaDePalabras.pop();
    const listaEnumerada = listaDePalabras.join(", ") + " y " + ultimaPalabra + ".";
    return listaEnumerada;
}

console.log("enumerarLista(['Han', 'Leia', 'Luke', 'Yoda']): ", enumerarLista(['Han', 'Leia', 'Luke', 'Yoda'])); // Respuesta: "Han, Leia, Luke y Yoda."
