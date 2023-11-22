import { CERO } from "./constantes";
import { crearHTMLejercicios,catalogo } from "./presenterCatalogo";
const cbxbuscar=document.getElementById("seleccionarDificultad");

const detalleCatalogo = document.getElementById("contenido");
detalleCatalogo.innerHTML="";

cbxbuscar.addEventListener("change",(env)=>{
    
    env.preventDefault();
    console.log(catalogo);
    buscarEjerciosPorDificultad();

 
  });
function buscarEjerciosPorDificultad(){
    let dificultadBuscada=cbxbuscar.value;
    let listaCoincidencias=catalogo.buscarEjerciosPorDificultad(dificultadBuscada);
    crearHTMLejercicios(listaCoincidencias,detalleCatalogo);
}