Feature: cadastrar Produtos

    Scenario: validar o cadastro de um produto com sucesso
        Given que faço o cadastro de um  produto
        When envio a requisição
        Then é retornado a mensagem Cadastro realizado com sucesso


    Scenario: validar o cadastro de um produto já existente
        Given que faço o cadastro de um  produto já existente
        When envio a requisição via api
        Then é retornado a mensagem Já existe produto com esse nome

