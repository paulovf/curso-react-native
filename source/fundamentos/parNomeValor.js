// par nome/valor
const saudacao = "Opa"; // contexto léxico 1

function exec() {
    const saudacao = "Falaaaa";  // contexto léxico 2
    return saudacao;
}

// Objeto são grupos aninhaods de pares nome/valor
const cliente = {
    nome: "Paulo",
    idade: 31,
    peso: 58,
    endereco: {
        logradouro: "av dona primitiva vianco",
        numero: 123
    }
};

console.log(saudacao);
console.log(exec());
console.log(cliente);
