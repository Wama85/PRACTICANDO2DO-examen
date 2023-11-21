import "jest-localstorage-mock";
import { ejerciciosPruebas } from "../constantes";
import { Catalogo } from "../models/Catalogo";
import { Ejercicio } from "../models/Ejercicio";
function getDificultad(ejercicio){
    return ejercicio.getDificultad();
}

describe("Dificultad de ejercicios", () => {
  it("Devuelve la dificultad BAJA del ejercicio", () => {
    expect(getDificultad(ejerciciosPruebas[1])).toEqual("BAJA");
  });   
  it("Devuelve la dificultad ALTA del ejercicio", () => {
    expect(getDificultad(ejerciciosPruebas[0])).toEqual("ALTA");
  });    
}
);

function buscarEjerciosPorDificultad(ejercicios,dificultad){
  let catalogo=new Catalogo(ejercicios);
  return catalogo.buscarEjerciosPorDificultad(dificultad);
}

describe("Buscar ejercicios por dificultad", () => {
    it("Devuelve la lista vacia sin coincidencias de dificultad", () => {
      expect(buscarEjerciosPorDificultad()).toEqual([]);
    }); 

    it("Devuelve una coincidencia de ejercicio por dificultad ALTA", () => {
      expect(buscarEjerciosPorDificultad([ejerciciosPruebas[0]],"ALTA")).toEqual([ejerciciosPruebas[0]]);
    });

    it("Devuelve una coincidencia de ejercicio por dificultad MEDIA", () => {
    expect(buscarEjerciosPorDificultad(ejerciciosPruebas,"MEDIA")).toEqual(ejerciciosPruebas.filter(ejer=>ejer.getDificultad()=="MEDIA"));
  });
 
  }
);

