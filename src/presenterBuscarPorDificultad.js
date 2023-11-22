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
    let dificultadBuscada=cbxbuscar.value.trim();
    console.log(dificultadBuscada)
    console.log(detalleCatalogo)

    let listaCoincidencias=catalogo.buscarEjerciosPorDificultad(dificultadBuscada);
    console.log(listaCoincidencias)

    crearHTMLejercicios(listaCoincidencias,detalleCatalogo);
}