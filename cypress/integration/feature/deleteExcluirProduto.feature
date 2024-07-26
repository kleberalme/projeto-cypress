Feature: deletar um Produto cadastrado

    Scenario: validar a exclusão de um produtos com sucesso
        Given que faço a exclusão de um produto cadastrado
        When envio a requisição para exclusão
        Then é retornado a mensagem Registro excluído com sucesso