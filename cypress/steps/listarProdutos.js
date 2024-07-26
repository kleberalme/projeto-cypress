import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiLogin = require('../support/controller/api_login/api_login')

Given("que faço a requisição da listagem de produtos", () => {
    cy.request({
        method: 'GET',
        url: 'http://localhost:3000/produtos',
    }).then(response => {
        cy.wrap(response).as('apiResponse')

    })

    When('envio a requisição para listagem', (response) => {
        cy.get('@apiResponse').its('status').should('eq', 200)
        cy.get('@apiResponse').its('body').should('property', 'produtos')
    })

    Then('é retornado todos produtos', () => {
        apiLogin.validarLista()


    })
})







