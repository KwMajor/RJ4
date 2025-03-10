import { Cliente, Telefone, Endereco, Empresa } from "./modulo.js";

const minhaEmpresa = new Empresa("Atlanta Solutions", "42.931.442/0001-00");
minhaEmpresa.adicionarEndereco(new Endereco("Av. São Luis", 456, "Taubaté"));
minhaEmpresa.adicionarTelefone(new Telefone("(12)95544-2211"));
minhaEmpresa.adicionarTelefone(new Telefone("(12)97755-2243"));

const cliente1 = new Cliente("Paulo", "018.971.290-25");
cliente1.adicionarTelefone(new Telefone("(12)97755-4463"));
cliente1.adicionarTelefone(new Telefone("(12)94455-1122"));
cliente1.endereco = new Endereco("Rua das nuvens", 69, "Taubaté");

const cliente2 = new Cliente("Gabriel", "447.496.800-01");
cliente2.adicionarTelefone(new Telefone("(12)96655-4422"));
cliente2.adicionarTelefone(new Telefone("(12)97755-1122"));
cliente2.endereco = new Endereco("Rua das Empresas", 33, "São José Dos Campos");

minhaEmpresa.adicionarCliente(cliente1);
minhaEmpresa.adicionarCliente(cliente2);

console.log("Empresa: ", minhaEmpresa.nome);
console.log("CNPJ: ", minhaEmpresa.getCnpj());
console.log("Endereço da empresa: ", minhaEmpresa.endereco);
console.log("Telefone Da Empresa: ", minhaEmpresa.telefones);
console.log("\nClientes: ");
minhaEmpresa.clientes.forEach(cliente => {
    console.log(`Nome: ${cliente.nome}`);
    console.log(`CPF: ${cliente.getCpf()}`);
    console.log(`Endereço: ${cliente.endereco.rua}, ${cliente.endereco.numero} - ${cliente.endereco.cidade}`);
    console.log(`Telefones: `, cliente.telefones);
    console.log(`-------------------------------------------`);
});