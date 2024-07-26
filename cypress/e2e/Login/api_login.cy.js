/// <reference types='cypress' />
describe('API-Teste funcional', () => {

    it('Efetuar login com sucesso', () => {
        cy.api_login('fulano@qa.com', 'teste')
            .then((response) => {
                expect(response.status).to.equal(200)
                expect(response.body.message).to.equal('Login realizado com sucesso')
            })
    });


    it('Validar e-mail não cadastrado', () => {
        cy.api_login('fulano@qainexistente.com', 'teste')
            .then((response) => {
                expect(response.status).to.equal(401)
                expect(response.body.message).to.equal('Email e/ou senha inválidos')
            })
    });

    it('Validar senha incorreta', () => {
        cy.api_login('fulano@qa.com', 'testettt')
            .then((response) => {
                expect(response.status).to.equal(401)
                expect(response.body.message).to.equal('Email e/ou senha inválidos')
            })
    });

    it('Validar e-mail inválido', () => {
        cy.api_login('fula.com', 'teste')
            .then((response) => {
                expect(response.status).to.equal(400)
                expect(response.body.email).to.equal('email deve ser um email válido')
            })
    });

    it('Validar senha em branco', () => {
        cy.api_login('fulano@qa.com', '')
            .then((response) => { 
        expect(response.status).to.equal(400)
        expect(response.body.password).to.equal('password não pode ficar em branco')
    })

})
})







