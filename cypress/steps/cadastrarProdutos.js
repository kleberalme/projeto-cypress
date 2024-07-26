import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
const apiLogin = require('../support/controller/api_login/api_login')

let body

beforeEach(() => {
    cy.construirBodyProduto()
        .then(construido => {
            body = construido
        })
})

Given("que faço o cadastro de um  produto", () => {
    cy.api_login('fulano@qa.com', 'teste')
        .then((response) => {
            cy.wrap(response).as('apiResponse')
            cy.readFile('cypress/fixtures/token.json').then((tokenExistente) => {
                const token = tokenExistente.authorization

                cy.POST_cadastrarProdutos(body, token)
                    .then(response => {
                        cy.wrap(response).as('apiResponse')
                    })
            })
        })
    })

    Given('que faço o cadastro de um  produto já existente', () => {
        cy.readFile('cypress/fixtures/token.json').then((tokenExistente) => {
            const token = tokenExistente.authorization
            cy.POST_cadastrarProdutos(body, token)
                .then(() => {
                    cy.POST_cadastrarProdutos(body, token)
                }).then(response => {
                    cy.wrap(response).as('apiResponse')
                })
        })
    })



    When("envio a requisição", () => {
        cy.get('@apiResponse').its('status').should('eq', 201)
    })

    When("envio a requisição via api", () => {
        cy.get('@apiResponse').its('status').should('eq', 400)
    })

    Then("é retornado a mensagem Cadastro realizado com sucesso", () => {
        apiLogin.validarcadastro
    })

    Then("é retornado a mensagem Já existe produto com esse nome", () => {
        apiLogin.validarcadastroExistente

    })

