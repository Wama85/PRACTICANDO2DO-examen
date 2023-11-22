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
    it("Permitir modificar la categoría", () => {
        let ejercicio=ejerciciosPruebas[0];
        ejercicio.setCategoria('Numeros');
        expect(ejercicio.getCategoria()).toEqual('Numeros');
      });
      it("Permitir modificar cualquier categoría", () => {
        let ejercicio=ejerciciosPruebas[2];
        ejercicio.setCategoria('Arboles');
        expect(ejercicio.getCategoria()).toEqual('Arboles');
      });

  }
);





