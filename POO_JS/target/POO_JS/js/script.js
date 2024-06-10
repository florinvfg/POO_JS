// Cuando la página se ha cargado completamente, se ejecuta esta función.
window.onload = function () {
    // Selecciona el primer elemento del DOM con la clase "parrafo".
    let parrafo = document.querySelector(".parrafo");
    // Llama a la función leerParrafo y le pasa el elemento seleccionado.
    leerParrafo(parrafo);
    objetos();
    viaje();
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
function objetos() {
    // Crea un nuevo objeto utilizando el constructor Object.
    let notas = new Object(); // object del lenguaje

    // Agrega un array de valores al objeto notas.
    notas.valores = [7, 8, 6, 5, 4, 10, 8];

    // Calcula la cantidad de elementos en el array y lo asigna a una propiedad del objeto.
    notas.cantidad = notas.valores.length;

    notas.materia="Matematicas";//al aobjeto se le puede crear metodos y atributos ...como en java
    /**
     * !!!Esto como ejemplo!!!
     * alumno=new Alumno (nombre,apellido,dni)
     * alumno.getNombre-->y te devuelve el nombre
     *
     * */

    // Imprime la cantidad de elementos en el array.
    console.log(notas.cantidad);

    // Imprime el array de valores.
    console.log(notas.valores);

    // Inicializa la propiedad media en el objeto notas con valor 0.
    notas.media = 0;

    // Recorre el array de valores sumando cada valor a la propiedad media.
    for (let i = 0; i < notas.valores.length; i++) {
        notas.media += notas.valores[i];
    }

    // Calcula la media dividiendo la suma total de los valores entre la cantidad de elementos.
    notas.media /= notas.valores.length;

    // Imprime la media de los valores.
    console.log(notas.media);

    // Imprime la media de los valores con dos decimales.
    console.log(notas.media.toFixed(2));
    console.log(notas.materia);
}

/**
 * Declaramos un objeto Viaje...en una función Viaje
 **/

function viaje() {
    // Creación de un objeto llamado viajeN con propiedades y métodos.
    let viajeN = {
        origen: "Granada", // Origen del viaje
        destino: "El Cairo", // Destino del viaje
        dias: 8, // Duración del viaje en días
        precio: 1000, // Precio del viaje en euros
        // Método que muestra la información del viaje en la consola
        mostrar: function () {
            // Imprime el origen y el destino del viaje en una sola línea
            console.log(`${viajeN.origen} / ${viajeN.destino}`);
            // Imprime la duración del viaje y el precio en una sola línea
            console.log(`Durante ${viajeN.dias} días, con un precio de ${viajeN.precio} euros`);
        }
    };
    // Llama al método mostrar del objeto viajeN para mostrar la información del viaje
    viajeN.mostrar();
}