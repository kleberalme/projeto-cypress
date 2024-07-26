import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiLogin = require('../support/controller/api_login/api_login')

let body
let id

beforeEach(() => {
    cy.construirBodyProduto()
        .then(construido => {
            body = construido
        })
})

Given('que faço a edição de um produto', () => {
    cy.readFile('cypress/fixtures/token.json').then((tokenExistente) => {
        const token = tokenExistente.authorization
        cy.POST_cadastrarProdutos(body, token)
            .then(response => {
                id = response.body._id
            }).then(() => {
                cy.construirBodyProduto((newbody) => {
                    body = newbody
                }).then(() => {
                    cy.PUT_editarProduto(id, body, token)
                        .then(response => {
                            cy.wrap(response).as('apiResponse')
                        })
                })
            })
    })
})

Given("que faço a edição de um produto com ID já inexistente", () => {
    cy.readFile('cypress/fixtures/token.json').then((tokenExistente) => {
        const token = tokenExistente.authorization
        id = Math.floor(Math.random() * 10000),
            cy.PUT_editarProduto(id, body, token)
                .then(response => {
                    cy.wrap(response).as('apiResponse')


                })
    })
})


When("envio a requisição para editar", () => {
    cy.get('@apiResponse').its('status').should('eq', 200)
})

When("envio a requisição com id", () => {
    cy.get('@apiResponse').its('status').should('eq', 201)
})

Then("é retornado a mensagem Registro alterado com sucesso", () => {
    apiLogin.validarEdição
})
Then("é retornado a mensagem Cadastro realizado com sucesso", () => {
    apiLogin.validarcadastro
})
