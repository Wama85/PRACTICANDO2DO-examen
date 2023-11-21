import "jest-localstorage-mock";
import { ejerciciosPruebas } from "../constantes";
import { Catalogo } from "../models/Catalogo";

describe("Buscar ejercicios por dificultad", () => {
    it("Devuelve la lista vacia sin coincidencias de dificultad", () => {
      let catalogo=new Catalogo();
      expect(catalogo.buscarEjerciosPorDificultad()).toEqual([]);
    });
    
    
  }
);

