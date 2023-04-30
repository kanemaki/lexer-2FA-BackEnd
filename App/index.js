const axios = require('axios').default;

function retContratos() {
    axios.get("http://localhost:3000/contratos")
        .then(function (response) {
            console.log("contratos", response);
        })
        .catch(function(error){
            console.log("erro", error);
        })
};

function retUsuarios() {
    axios.get("http://localhost:3000/usuarios")
        .then(function (response) {
            console.log("usuarios", response);
        })
        .catch(function(error){
            console.log("erro", error);
        })
};

function addUsuario(){
    const _nome = document.querySelector(".nome").value;
    const _cpf = document.querySelector(".cpf").value;

    axios.post("http://localhost:3000/usuarios",{id: null, nome: _nome, cpf: _cpf})
    .then(function (response) {
        console.log("usuarios", response);
    })
    .catch(function(error){
        console.log("erro", error);
    })

};

window.onload = () => {
    document.querySelector(".buscaContratos").addEventListener("click", retContratos);
    document.querySelector(".buscaUsuarios").addEventListener("click", retUsuarios);
    document.querySelector(".inserirUsuario").addEventListener("click", addUsuario);    
}