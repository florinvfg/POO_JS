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
class Moto extends Vehiculo{

    cilindrada;
    posturaConduccion;

    constructor(marca,modelo,color,potencia,cilindrada,posturaConduccion) {
        super(marca,modelo,color,potencia);
        this.cilindrada=cilindrada;
        this.posturaConduccion=posturaConduccion;
    }
    mostrar() {
        console.log("Datos de la moto");
        super.mostrar();
        console.log(`tiene una Cilindrada de ${this.cilindrada} y tiene ${this.posturaConduccion}Postura conduccion`)
    }


}
// Creación de una nueva instancia de la clase Vehiculo
let miCoche = new Vehiculo("Ford", "Kuga", "Gris", "110CV");
miCoche.mostrar();
// Creación de otra instancia de la clase Vehiculo

let miCoche2 = new Vehiculo("Opel", "Vectra", "Rojo", "13CV");
miCoche2.mostrar();

let miMoto=new Moto("BMV","Gospeld","Rojo","120Cv","Continental")
// Llamada al método mostrar para la primera instancia
// Llamada al método mostrar para la segunda instancia
miMoto.mostrar();


//recorrer un objeto
for (dato in miCoche){
    console.log(`${dato} : ${miCoche[dato]}`);
}
for(dato of Object.getOwnPropertyNames(miCoche)){
    console.log(dato);

}
//console.log(miCoche.marca);
//console.log(miCoche.potencia);





