import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";

describe("Buscar ejecicio por dificultad", () => {
it("Devuelve el titulo del encabezado buscar por dificultad", () => {
    cy.visit("/");
    cy.get("#menubuscarejerPorDificultad").click();
    cy.get("#titulocatalogo").should("contain", "Buscar Ejercicios por Dificultad")

    });
    
it("Devuelve el titulo del ejercicio al buscar dificultad BAJA", () => {
    cy.visit("/");
    cy.get("#menubuscarejerPorDificultad").click();
    cy.get("#seleccionarDificultad").select("BAJA")
    cy.get("#contenidodetallecatalogo h3").should("contain", "Cálculo del factorial")
    
    });
});

