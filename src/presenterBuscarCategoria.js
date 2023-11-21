import { CERO } from "./constantes";
import { crearHTMLejercicios,catalogo } from "./presenterCatalogo";
const cbxbuscar=document.getElementById("seleccionarcategoria");

const detalleCatalogo = document.getElementById("contenido");
detalleCatalogo.innerHTML="";
// let catalogo= new Catalogo(ejercicios);

cbxbuscar.addEventListener("change",(env)=>{
    
    env.preventDefault();
    console.log(catalogo);
    buscarEjercicioPorCategoria();

 
  });
function buscarEjercicioPorCategoria(){
    let categoriaBuscado=cbxbuscar.value;
    let listaCoincidencias=catalogo.buscarEjerciosPorCategoria(categoriaBuscado);
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