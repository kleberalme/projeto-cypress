import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiLogin = require('../support/controller/api_login/api_login')

let body
let id

beforeEach(() => {
    cy.construirBodyProduto()
        .then(construido => {
            body = construido
        })
});

Given("que faço a exclusão de um produto cadastrado", () => {
    cy.readFile('cypress/fixtures/token.json').then((tokenExistente) => {
        const token = tokenExistente.authorization
        cy.POST_cadastrarProdutos(body, token)
            .then(response => {
                id = response.body._id
            }).then(() => {
                cy.DELETE_excluirProduto(id, token)
                    .then(response => {
                        cy.wrap(response).as('apiResponse')

                    })
            })
    })
})
When('envio a requisição para exclusão', () => {
    cy.get('@apiResponse').its('status').should('eq', 200)
})
Then("é retornado a mensagem Registro excluído com sucesso", () => {

})