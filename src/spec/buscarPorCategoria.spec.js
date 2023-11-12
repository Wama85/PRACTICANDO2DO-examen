import { ejerciciosPruebas } from "../constantes";
import { Catalogo } from "../models/Catalogo";

describe("Buscar ejercicios por categoria", () => {
    it("Devuelve la lista vacia sin coincidencias", () => {
      let catalogo=new Catalogo();
      expect(catalogo.buscarEjerciosPorCategoria()).toEqual([]);
    });
    it("Devuelve una coincidencia de ejercicio para una categoria", () => {
        let catalogo=new Catalogo([ejerciciosPruebas[0]]);
        expect(catalogo.buscarEjerciosPorCategoria("Numeros")).toEqual([ejerciciosPruebas[0]]);
    });

    it("Devuelve las coincidencias del ejercicio para la categoria Numeros", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarEjerciosPorCategoria("Numeros")).toEqual(ejerciciosPruebas.filter(ejer=>ejer.getCategoria()=="Numeros"));
    });  
    
    it("Devuelve las coincidencias del ejercicio para la categoria Arboles", () => {
        let catalogo=new Catalogo(ejerciciosPruebas);
        expect(catalogo.buscarEjerciosPorCategoria("Arboles")).toEqual(ejerciciosPruebas.filter(ejer=>ejer.getCategoria()=="Arboles"));
    });


   
  }
);

