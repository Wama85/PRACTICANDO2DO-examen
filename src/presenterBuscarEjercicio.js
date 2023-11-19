import { CERO } from "./constantes";
import { crearHTMLejercicios,catalogo } from "./presenterCatalogo";
const txtbuscar=document.getElementById("txtbuscar");
const txtBuscarNombreEjer=document.getElementById("txtbuscar");
const detalleCatalogo = document.getElementById("contenido");
detalleCatalogo.innerHTML="";
// let catalogo= new Catalogo(ejercicios);

txtbuscar.addEventListener("keypress",(env)=>{
    if(env.key=="Enter"){
      env.preventDefault();
    console.log(catalogo);
      buscarEjercicioPorNombre();

    }
     
  });
function buscarEjercicioPorNombre(){
    let nombreBuscado=txtBuscarNombreEjer.value;
    let listaCoincidencias=catalogo.buscarPorNombre(nombreBuscado);
    if(listaCoincidencias.length==CERO){
        mostrarMensajeDeAlerta("No se encontro el/los ejercicios");
        detalleCatalogo.innerHTML="";
    }
    else
      crearHTMLejercicios(listaCoincidencias,detalleCatalogo);
}
function mostrarMensajeDeAlerta(mensaje){
    alert(mensaje);
  }