import { ejerciciosPruebas } from "../constantes";
import {Ejercicio} from "../models/Ejercicio";

describe("Editar Ejercicio", () => {

    it("Permitir modificar el titulo", () => {
      let ejercicio=ejerciciosPruebas[1];
      ejercicio.setTitulo('Numeros Romanos X');
      expect(ejercicio.getTitulo()).toEqual('Numeros Romanos X');
    });

   
  }
);





