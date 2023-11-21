import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";

describe("Buscar ejecicio por categoria", () => {

    it("Devuelve el titulo del encabezado buscar por categoria", () => {
    cy.visit("/");
    cy.get("#menubuscarejerPorCategoria").click();
    cy.get("#titulocatalogo").should("contain", "Buscar Ejercicios por Categoria")

    });
    it("Devuelve el titulo del ejercicio buscado por categoria", () => {
      cy.visit("/");
      cy.get("#menubuscarejerPorCategoria").click();
      cy.get("#seleccionarcategoria").select("Numeros")
      cy.get("#contenidodetallecatalogo h3").should("contain", "Numeros Primos")
      
      });
      it("Devuelve el titulo del ejercicio buscado por categoria cadena", () => {
        cy.visit("/");
        cy.get("#menubuscarejerPorCategoria").click();
        cy.get("#seleccionarcategoria").select("Cadenas")
        cy.get("#contenidodetallecatalogo h3").first().should("contain", "Inversión de cadena")
        
        });

  });

