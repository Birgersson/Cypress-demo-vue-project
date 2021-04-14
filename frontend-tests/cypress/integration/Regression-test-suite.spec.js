/// <reference types="cypress" /> 

//test suite
describe('Regression test suite',function(){
    //test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
        cy.contains('Login')
        cy.title().should('include','Hotel')
        cy.get(':nth-child(1) > input').type('tester01')  //Samma fält: div.field:nth-child(1) > input:nth-child(2) 
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click()
        cy.contains('Tester Hotel Overview')
        cy.get('.user > .btn').click()
        cy.contains('Login')
    })
})