Feature: listar Produtos

    Scenario: listar todos produtos
        Given que faço a requisição da listagem de produtos
        When envio a requisição para listagem
        Then é retornado todos produtos
