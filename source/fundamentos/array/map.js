const nuns = [1, 2, 3, 4, 5];

// "For" com propósito 
let resultado = nuns.map(function(e){
    return e*2;
});

console.log(resultado, nuns);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace(".", ",")}`;

resultado = nuns.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);
