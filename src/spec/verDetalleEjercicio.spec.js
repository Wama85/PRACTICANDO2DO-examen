import { Ejercicio } from "../Ejercicio";
import { ejerciciosPruebas } from "../constantes";
describe("Ver detalle de ejercicio", () => {
    it("Devuelve el detalle completo de un ejercicio", () => {
      let ejercicio = ejerciciosPruebas[0];
      expect(ejercicio.getDetalle()).toEqual('detalle1');
    });
    it("Devuelve el detalle completo de otro ejercicio", () => {
      let ejercicio = ejerciciosPruebas[1];
      expect(ejercicio.getDetalle()).toEqual('detalle2');
    });
  }
);
