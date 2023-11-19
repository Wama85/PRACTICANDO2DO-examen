import "jest-localstorage-mock";
import { ejerciciosPruebas } from "../constantes";
let ejercicio = ejerciciosPruebas[0];
describe("Ver detalle de ejercicio", () => {
    it("Devuelve el detalle completo de un ejercicio", () => {
      expect(ejercicio.getDetalle()).toEqual('detalle1');
    });
    it("Devuelve el detalle completo de otro ejercicio", () => {
      let ejercicio = ejerciciosPruebas[1];
      expect(ejercicio.getDetalle()).toEqual('detalle2');
    });
  }
);
describe("Ver titulo de ejercicio", () => {
  it("Devuelve el titulo de un ejercicio", () => {
    expect(ejercicio.getTitulo()).toEqual('Numeros Primos');
  });
});
describe("Ver categoria de ejercicio", () => {
  it("Devuelve la categoria de un ejercicio", () => {
    expect(ejercicio.getCategoria()).toEqual('Numeros');
  });
}); 
describe("Ver imagen de ejercicio", () => {
  it("Devuelve la imagen de un ejercicio", () => {
    expect(ejercicio.getImagen()).toEqual("1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph");
  });
});
