const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

pilotos.pop(); // massa quebrou o carro! (remove último)
console.log(pilotos);

pilotos.push("Verstappen"); // Adiciona no final
console.log(pilotos);

pilotos.shift(); // remove primeiro
console.log(pilotos);

pilotos.unshift("Hamilton"); // adiciona no início
console.log(pilotos);

// splice pode adicionar e remover elementos

//  adicionar
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

// remover
pilotos.splice(3, 1); // Massa quebrou de novo :(
console.log(pilotos);

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2);
