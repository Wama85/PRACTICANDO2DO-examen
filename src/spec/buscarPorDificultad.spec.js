import "jest-localstorage-mock";
import { ejerciciosPruebas } from "../constantes";
import { Catalogo } from "../models/Catalogo";
import { Ejercicio } from "../models/Ejercicio";

describe("Dificultad de ejercicios", () => {
  it("Devuelve la dificultad BAJA del ejercicio", () => {
    let ejercicio=ejerciciosPruebas[1];
    expect(ejercicio.getDificultad()).toEqual("BAJA");
  });   
  it("Devuelve la dificultad ALTA del ejercicio", () => {
    let ejercicio=ejerciciosPruebas[0];
    expect(ejercicio.getDificultad()).toEqual("ALTA");
  });    
}
);

describe("Buscar ejercicios por dificultad", () => {
    it("Devuelve la lista vacia sin coincidencias de dificultad", () => {
      let catalogo=new Catalogo();
      expect(catalogo.buscarEjerciosPorDificultad()).toEqual([]);
    });    
  }
);

