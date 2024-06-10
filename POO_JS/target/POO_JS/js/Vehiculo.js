// Definición de la clase Vehiculo
class Vehiculo {
    // Declaración de las propiedades de la clase
    marca;
    modelo;
    color;
    potencia;

    // Constructor que inicializa las propiedades de un objeto Vehiculo
    constructor(marca, modelo, color, potencia) {
        // Asignación de los parámetros a las propiedades de la clase
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.potencia = potencia;
    }

    // Método para mostrar los detalles del vehículo
    mostrar() {
        /**
         *  los template literals permiten incluir las propiedades del objeto
         *  directamente en la cadena de texto, mejorando la legibilidad y
         *  facilitando la construcción de la cadena.
         *  */
        // Imprime en consola los detalles del vehículo utilizando template literals
        console.log(`Coche Marca ${this.marca} con modelo ${this.modelo} y es de color ${this.color} con la potencia ${this.potencia}`);
    }
}

// Creación de una nueva instancia de la clase Vehiculo
let miCoche = new Vehiculo("Ford", "Kuga", "Gris", "110CV");
// Creación de otra instancia de la clase Vehiculo
let miCoche2 = new Vehiculo("Opel", "Vectra", "Rojo", "13CV");

// Llamada al método mostrar para la primera instancia
miCoche.mostrar();
// Llamada al método mostrar para la segunda instancia
miCoche2.mostrar();
