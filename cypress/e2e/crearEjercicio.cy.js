describe("Crear Ejercicio", () => {

    it("Registrar un nuevo ejercicio", () => {
      cy.visit("/");
      cy.get("#menuacregarejer").click();
      cy.get("#txtNombre").type("Romanos II"); 
      cy.get("#txtNombre").should('have.value','Romanos II'); 
      cy.get("#selecCategoria").select("Geometría"); 
      cy.get("#txtDetalle").type("Perro salchicha"); 
      cy.get("#txtDetalle").invoke('val').should('contain','Perro salchicha'); 
      cy.get("#crearregistro").click();

      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Datos subidos correctamente`)
      })

      
    });
    it("Verificar que los campos tengan información", () => {
      cy.visit("/");
      cy.get("#menuacregarejer").click();
      cy.get("#crearregistro").click();
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Todos los campos son obligatorios`)
      })

      
    });
});
