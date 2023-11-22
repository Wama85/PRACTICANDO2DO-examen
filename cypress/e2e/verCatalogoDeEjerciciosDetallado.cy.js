import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES,IMAGENPREDETERMINADA } from "../../src/constantes";
describe("Ver catalogo de ejercicio detallado", () => {
    it("Se previsualiza la categoria del Ejercicio de Numeros primos",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click();
        cy.get("#ejercicio-1 + p")
        .next("div").get("#categoria").should("contain", "Numeros");
      
    });
  });