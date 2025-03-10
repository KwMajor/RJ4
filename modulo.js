class Cliente {
    #cpf
    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
        this.telefones = []
    }

    getCpf() {
        return this.#cpf;
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }
}

class Telefone {
    constructor(numero) {
        this.numero = numero;
    }
}

class Endereco {
    constructor(rua, numero, cidade) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
    }
}

class Empresa {
    #cnpj;
    constructor(nome, cnpj) {
        this.nome = nome;
        this.#cnpj = cnpj;
        this.endereco = null;
        this.telefones = [];
        this.clientes = [];
    }

    getCnpj() {
        return this.#cnpj;
    }

    adicionarTelefone(telefone) {
        this.telefones.push(telefone);
    }

    adicionarEndereco(endereco) {
        this.endereco = endereco;
    }

    adicionarCliente(cliente) {
        this.clientes.push(cliente);
    }

}

export {Cliente, Telefone, Endereco, Empresa};