describe("Ver catalogo de ejercicio", () => {
    it("Devuelve el titulo del ejericicio ATDD",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click()
        cy.get("#ejercicio-1").should("contain","Numeros Primos")
    })
  });
  