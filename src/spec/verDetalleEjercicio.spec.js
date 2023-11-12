import { Ejercicio } from "../Ejercicio";
describe("Ver detalle de ejercicio", () => {
    it("Devuelve el detalle completo de un ejercicio", () => {
      let ejercicio = new Ejercicio();
      expect(ejercicio.getDetalle()).toEqual('detalle1');
    });
  }
);