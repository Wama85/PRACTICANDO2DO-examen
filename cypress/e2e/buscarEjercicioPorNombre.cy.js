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
        cy.get("#contenidodetallecatalogo p").should("contain","Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.Ver mas");
  
      });

      it("Verifica que la imagen sea visible de las coincidencias del ejercicio buscado", () => {
        cy.visit("/");
        cy.get("#menubuscarejer").click();
        cy.get("#txtbuscar").type("Numeros Primos");
        cy.get("#txtbuscar").type("{enter}");
        cy.get("#marcoimagen img").should('be.visible');
  
      });
  });

