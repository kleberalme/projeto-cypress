import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiLogin = require('../support/controller/api_login/api_login')


Given("acesse a api", () => {
    cy.api_login('fulano@qa.com', 'teste')
        .then((response) => {
            
            cy.wrap(response).as('apiResponse')
        })
})

When("quando passo email e senha", () => {
    cy.get('@apiResponse').then(response).should('eq', 200)
})

Then("deve retornar a mensagem Login realizado com sucesso", () => {
   apiLogin.validarResposta()
})

