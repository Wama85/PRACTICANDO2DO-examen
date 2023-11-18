import { Ejercicio } from "./Ejercicio";
import { ejerciciosPruebas } from "../constantes";
import "jest-localstorage-mock";
class Catalogo{
    constructor(lista=[]){
        this.lista=lista;
        const objetoJSON = JSON.stringify(lista);
        localStorage.setItem("listaEjercicios", objetoJSON);
    }
    verificarListaVacia(){
        let mensaje="No se tiene ejercicios disponibles"
        if(this.lista.length!=0) mensaje="La lista tiene ejercicios";
        return mensaje;
    }
    getNPrimerosEjercicios(cantidad){
        return this.lista.slice(0,cantidad);
    }
    getEjercicios(){
        return this.lista;
    }
    agregarEjercicio(ejercicio){
        this.lista.push(ejercicio);
    }

    buscarPorNombre(tituloEjercicio){
        let coincidencias=[];

        if(tituloEjercicio==""){
            coincidencias= this.lista;
        }
        else{
         coincidencias=this.lista.filter(ejercicio=>ejercicio.getTitulo()==tituloEjercicio);
        }
        
        return coincidencias;
    }

    buscarEjerciosPorCategoria(categoria){
        let listaCoincidencias=[]
        this.lista.forEach((ejer) =>{
         if(ejer.getCategoria()==categoria){
            listaCoincidencias.push(ejer);
            }
        }
        );
        return listaCoincidencias;
    }


    getEjerciciosDelNavegador(){
        return  JSON.parse(localStorage.getItem("listaEjercicios"));
    }


};
export {Catalogo};