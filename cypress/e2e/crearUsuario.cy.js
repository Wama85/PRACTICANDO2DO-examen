describe("Crear usuario", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#menucrearusuario").click();
  });
    it("Registrar nombre de usuario", () => {
      cy.get("#txtusername").type("Perro salchicha"); 
      cy.get("#txtusername").should('have.value','Perro salchicha'); 
    });
    it("Registrar password de usuario", () => {
        cy.get("#txtpassword").type("Perro salchicha"); 
        cy.get("#txtpassword").should('have.value','Perro salchicha'); 
      });
    it("Registrar repetir password de usuario", () => {
        cy.get("#txtreppass").type("Perro salchicha"); 
        cy.get("#txtreppass").should('have.value','Perro salchicha'); 
    });
});
