const aprovados = ["Aghata", "Aldo", "Daniel", "Raquel"];

aprovados.forEach(function(nome, indice, array, x) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
    console.log(x);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);
