describe("Ver catalogo de ejercicio", () => {
    it("Devuelve el titulo del ejericicio ATDD",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click()
        cy.get("#ejercicio-1").should("contain","Numeros Primos")
    });
    it("Devuelve el resumen del ejericicio ATDD",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click()
        cy.get("#ejercicio-1 + p").should("contain","Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.")
    });
    it("Verifica que la iamgen sea visible el del ejericicio ATDD",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click()
        cy.get("#imagen-ejer1").should("be.visible")
    });
    it("Devuelve el link  del ejericicio ATDD",()=>{
        cy.visit("/");
        cy.get("#menucatalogo").click()
        cy.get("#imagen-ejer1").should("have.attr","src","https://drive.google.com/uc?export=download&id=1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph")
    });
  });
