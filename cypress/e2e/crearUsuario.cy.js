describe("Crear usuario", () => {

    it("Registrar nombre de usuario", () => {
      cy.visit("/");
      cy.get("#menucrearusuario").click();
      cy.get("#txtusername").type("Perro salchicha"); 
      cy.get("#txtusername").should('have.value','Perro salchicha'); 
    });
    it("Registrar password de usuario", () => {
        cy.visit("/");
        cy.get("#menucrearusuario").click();
        cy.get("#txtpassword").type("Perro salchicha"); 
        cy.get("#txtpassword").should('have.value','Perro salchicha'); 
      });
});
