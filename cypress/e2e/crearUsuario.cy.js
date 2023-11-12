describe("Crear usuario", () => {

    it("Registrar nombre de usuario", () => {
      cy.visit("/");
      cy.get("#menucrearusuario").click();
      cy.get("#txtusername").type("Perro salchicha"); 
      cy.get("#txtusername").should('have.value','Perro salchicha'); 
    });
});
