import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";
function buscarEjercicio(titulo){
 return ejercicios.filter(ejercicio=>ejercicio.getTitulo()==titulo)[0];
}
function mostrarImagen(){
  return URLIMAGENES+IMAGENPREDETERMINADA;
}
describe("Buscar ejecicio por nombre", () => {
    it("Encuentra los titulos de las coincidencias del ejercicio buscado", () => {
      cy.visit("/");
      cy.get("#menubuscarejer").click();
      cy.get("#txtbuscar").type("Numeros Primos");
      cy.get("#txtbuscar").type("{enter}");
      cy.get("#contenidodetallecatalogo h3").should("contain","Numeros Primos");

    });
    it("Encuentra los resumenes de las coincidencias del ejercicio buscado", () => {
        cy.visit("/");
        cy.get("#menubuscarejer").click();
        cy.get("#txtbuscar").type("Numeros Primos");
        cy.get("#txtbuscar").type("{enter}");
        cy.get("#contenidodetallecatalogo p").should("contain",buscarEjercicio("Numeros Primos").getResumen());
  
      });

      it("Verifica que la imagen sea visible de las coincidencias del ejercicio buscado", () => {
        cy.visit("/");
        cy.get("#menubuscarejer").click();
        cy.get("#txtbuscar").type("Numeros Primos");
        cy.get("#txtbuscar").type("{enter}");
        cy.get("#marcoimagen img").should('be.visible');
  
      });
      it("Encuentra los links de las imagenes de las coincidencias del ejercicio buscado", () => {
        cy.visit("/");
        cy.get("#menubuscarejer").click();
        cy.get("#txtbuscar").type("Numeros Primos");
        cy.get("#txtbuscar").type("{enter}");
        cy.get("#marcoimagen img").should('have.attr','src',mostrarImagen());
  
      });
  });

