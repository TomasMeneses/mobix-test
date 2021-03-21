describe('Table Ui', ()=> {
    it('should return true when title was correct', () => {
        cy.visit('/');

        cy.contains('Tabela de Permissões').should('to.have.length', 1);
    })

    it('Should have a table structure', () =>{
        cy.visit('/');

        cy.get('[data-cy=my-table]')
    })

    it('Should check all see list checkbox', () =>{
        cy.visit('/');

        cy.get('[data-cy=can-see-list-all-checkbox]').click();
        
        
    });

    it('Should open all sections', () => {
        
        cy.get('[data-cy=open-section]').click({ multiple: true });
        cy.get('[data-cy=can-see-checkbox-subsection]');
    })
})