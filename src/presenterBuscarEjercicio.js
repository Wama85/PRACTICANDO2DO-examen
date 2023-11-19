import {Catalogo} from "./models/Catalogo.js";
import {crearHTMLejercicios} from "./cargarVistas.js"
import { CERO } from "./constantes";
catalogo= new Catalogo();
const txtbuscar=document.getElementById("txtbuscar");
const txtBuscarNombreEjer=document.getElementById("txtbuscar");
const detalleCatalogo = document.getElementById("contenido");
detalleCatalogo.innerHTML="";

txtbuscar.addEventListener("keypress",(env)=>{
    if(env.key=="Enter"){
      env.preventDefault();
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