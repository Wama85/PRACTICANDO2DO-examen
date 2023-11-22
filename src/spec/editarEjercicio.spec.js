import { ejerciciosPruebas } from "../constantes";
import {Ejercicio} from "../models/Ejercicio";

describe("Editar Ejercicio", () => {

    it("Permitir modificar el título", () => {
      let ejercicio=ejerciciosPruebas[1];
      ejercicio.setTitulo('Numeros Romanos X');
      expect(ejercicio.getTitulo()).toEqual('Numeros Romanos X');
    });
    it("Permitir modificar cualquier título", () => {
        let ejercicio=ejerciciosPruebas[1];
        ejercicio.setTitulo('Numeros Romanos 10');
        expect(ejercicio.getTitulo()).toEqual('Numeros Romanos 10');
      });


   
  }
);





