describe("Buscar ejecicio por nombre", () => {
    it("Encuentra los titulos de las coincidencias del ejercicio buscado", () => {
      cy.visit("/");
      cy.get("#menubuscarejer").click();
      cy.get("#txtbuscar").type("Numeros Primos");
      cy.get("#txtbuscar").type("{enter}");
      cy.get("#contenidodetallecatalogo h3").should("contain","Numeros Primos");
      
    });
  });
  