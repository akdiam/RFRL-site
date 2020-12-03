describe('My First Test', () => {
    it('Does not do much!', () => {
        cy.visit('http://localhost:3000/survey/jimmy');
        cy.get('input[id="referrer"]').type('hi');
        cy.get('input[id="first_name"]').type('billy bob');
        cy.get('input[id="first_name"]').clear();
        cy.contains('Submit').click();
        cy.contains('First Name').type('nope');
    })
});
