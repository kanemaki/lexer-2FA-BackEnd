const { faker } = require("@faker-js/faker");

module.exports = () => {
    const data = { contratos: [], usuarios: []};
    for (let i = 1; i <= 100; i++) {
        data.usuarios.push({
           id: i,
           nome: faker.name.firstName(),
           cpf: faker.address.zipCode() 
        });       
    };

    for (let i = 1; i <= 5; i++) {
        data.contratos.push({
            id: i,
            cnpj: faker.address.zipCode(),
            razaoSocial: faker.company.name(),
            licencasTotais: 10,
            licencasUso: 5,
            licensasDisponiveis: 5
         })
    }

    return data;
}