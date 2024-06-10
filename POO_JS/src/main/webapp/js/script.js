// Cuando la página se ha cargado completamente, se ejecuta esta función.
window.onload = function () {
    // Selecciona el primer elemento del DOM con la clase "parrafo".
    let parrafo = document.querySelector(".parrafo");
    // Llama a la función leerParrafo y le pasa el elemento seleccionado.
    leerParrafo(parrafo);
}

// Función que realiza varias operaciones sobre el párrafo y arrays.
function leerParrafo(parrafo) {
    // Cambia el contenido HTML del párrafo a "Es una prueba".
    parrafo.innerHTML = "Es una prueba";

    // Declara un array con varios números.
    let matriz = [4, 32, 3, 4, 5, 3];

    // Declara un array vacío con capacidad para 5 elementos.
    let miArray = new Array(5);

    // Imprime el array recién creado (tendrá 5 posiciones vacías).
    console.log(miArray);

    // Añade "Juan" al final del array.
    miArray.push("Juan");

    // Añade "Pedro" al principio del array.
    miArray.unshift("Pedro");

    // Imprime el array después de las modificaciones (["Pedro", , , , , , "Juan"]).
    console.log(miArray);

    // Imprime la longitud del array (7, incluyendo posiciones vacías).
    console.log(miArray.length);

    // Imprime el tipo del objeto miArray (debería ser "object").
    console.log(typeof (miArray));

    // Imprime el tipo del objeto console (debería ser "object").
    console.log(typeof (console));

    // Selecciona y muestra en consola el primer elemento del DOM con el id "imagen".
    console.log(document.querySelector("#imagen"));

    // Verifica si miArray es una instancia de Array y lo imprime (debería ser true).
    console.log(miArray instanceof Array);

    // Verifica si miArray es una instancia de Map y lo imprime (debería ser false).
    console.log(miArray instanceof Map);
}
function Objetos(){
    //Objeto Object
    
}