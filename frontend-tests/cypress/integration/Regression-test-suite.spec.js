/// <reference types="cypress" /> 

//test suite
describe('Regression test suite',function(){
    //test case
    it('Perform valid login', function(){
        cy.visit('http://localhost:3000')
    })
})