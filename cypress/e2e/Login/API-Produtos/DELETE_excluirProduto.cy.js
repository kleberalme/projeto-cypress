/// <reference types='cypress' />

describe('Validar exclusão de produto', () => {
    let token
    let body
    let id
    before(() => {
        cy.api_login('fulano@qa.com', 'teste')
            .then(response => {
                token = response.body.authorization
            })
    })
    beforeEach(() => {
        cy.construirBodyProduto()
            .then(construido => {
                body = construido
            })
    });
    it('Deve excluir produto cadastrado', () => {
        cy.POST_cadastrarProdutos(body, token)
            .then(response => {
                id = response.body._id
            }).then(() => {
                cy.DELETE_excluirProduto(id, token)
                    .then(response => {
                        expect(response.status).to.equal(200)
                        expect(response.body.message).to.equal('Registro excluído com sucesso')
                    })
            })
    })
})



