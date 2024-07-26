class apiLogin {
    validarResposta() {
        cy.get("@apiResponse").then(response => {
            //expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    }

    validarLista() {
        cy.get("@apiResponse").then(response => {
            expect(response.status).to.equal(200)
        })
    }

    validarcadastro() {
        cy.get("@apiResponse").then(response => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal("Cadastro realizado com sucesso")
        })

    }


    validarcadastroExistente() {
        cy.get("@apiResponse").then(response => {
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal("Já existe produto com esse nome")
        })
    }
    validarEdição() {
        cy.get("@apiResponse").then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Registro alterado com sucesso")
        })
    }

    validarExclusão() {
        cy.get("@apiResponse").then(response => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal("Registro excluído com sucesso")
        })
    }
}

module.exports = new apiLogin
