import { ejercicios } from "../../src/dataCatalogo";
import { URLIMAGENES, IMAGENPREDETERMINADA } from "../../src/constantes";

describe("Buscar ejecicio por categoria", () => {

    it("Devuelve el titulo del encabezado buscar por categoria", () => {
    cy.visit("/");
    cy.get("#menubuscarejerPorCategoria").click();
    cy.get("#titulocatalogo").should("contain", "Buscar Ejercicios por Categoria")
    });

  });

