// Ejecuta la función cuando la página se ha cargado completamente.
window.onload = function () {
    // Define un objeto USUARIO con propiedades y un método.
    const USUARIO = {
        nombre: "Antonia Garcia", // Nombre completo del usuario
        nombreUsuario: "agar007", // Nombre de usuario
        password: "agar007_pass", // Contraseña del usuario
        // Método login para verificar las credenciales del usuario
        login: function (nombreUsuario, password) {
            // Compara las credenciales ingresadas con las almacenadas
            if (nombreUsuario == this.nombreUsuario && password == this.password) {
                // Muestra una alerta si las credenciales son correctas
                alert("Usuario Correcto");
            } else {
                // Muestra una alerta si las credenciales son incorrectas
                alert("Usuario Incorrecto");
            }
        },
        bienvenida:function (){
            alert("Bienvenido al Sistema"+this.nombre)
        }
    }

    // Solicita al usuario que ingrese su nombre de usuario mediante un cuadro de diálogo prompt
    let nombreUsuario = prompt("Indique el nombre de Usuario");
    // Solicita al usuario que ingrese su contraseña mediante un cuadro de diálogo prompt
    let passUsuario = prompt("Indique el password del Usuario");
    // Llama al método login del objeto USUARIO con las credenciales ingresadas
    USUARIO.login(nombreUsuario, passUsuario);
    USUARIO.bienvenida();
    // Cambia las propiedades del objeto USUARIO
    USUARIO.nombreUsuario = "Irene";
    USUARIO.password = "lechuza";
    USUARIO.nombre = "Irina Medina";

    // Llama al método login del objeto USUARIO con las credenciales originales
    USUARIO.login(nombreUsuario, passUsuario);
    // Llama al método bienvenida del objeto USUARIO después de cambiar sus propiedades
    USUARIO.bienvenida();
}
