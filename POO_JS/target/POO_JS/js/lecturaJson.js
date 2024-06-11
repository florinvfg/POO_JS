//crear una solicitud XHttpsRecuest=solicitud al protocolo https del navegador

const xmlhttp=new XMLHttpRequest();
//definir una funcion que se va ejecutar cuando se cumple la solicitud que hemos definido
xmlhttp.onload=function (){
    //para ler un Json y convertirlo en un objeto se utiliza la exprecion JSON.parse(archivo,variable)
    const myObj=JSON.parse(this.responseText);
    //inicializando las variables que se van a mostrar en HTML
    let texto="";
    let pet="";

    //interar con los datos del objeto sobre las propiedades JSON
    for (const  elem in myObj){
        if (elem==="pets"){
            //si la propiedad es pets interamos con el array mascotas
            for (const p of myObj[elem]){
                pet+=`Animal: ${p.animal} - Nombre: ${p.name} <br>`;
        }

    } else {
        texto+=`${elem.toUpperCase()}: ${myObj[elem]} <br>`
    }

}
document.querySelector(".salida").innerHTML=texto+pet;

}

xmlhttp.open("GET","files/archivo.json");

//enviar solicitud
xmlhttp.send();

