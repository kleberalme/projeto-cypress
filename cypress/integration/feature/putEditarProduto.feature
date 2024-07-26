Feature: editar Produto

    Scenario: validar a edição de um produto com sucesso
        Given que faço a edição de um produto
        When envio a requisição para editar
        Then é retornado a mensagem Registro alterado com sucesso

    Scenario: validar a edição de um produto com ID inexistente
        Given que faço a edição de um produto com ID já inexistente
        When envio a requisição com id
        Then é retornado a mensagem Cadastro realizado com sucesso