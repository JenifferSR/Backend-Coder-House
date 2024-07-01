const objetos = [
    { macas: 3, peras: 2, carne: 1, frango: 5, doces: 2},
    {macas: 1, cafes: 1, ovos: 6, frango: 1, paes: 4}
];

const tiposProdutos = [];

for (const objetos of objetos) {
    const chaves= Object.keys(objeto);
    for(const chave of chaves){
        if (!tiposProdutos.includes(chave)){
            tiposProdutos.push(chave);

        }
    }
}

console.log(tiposProdutos);

let totalVendido = 0;

for (const objeto of objetos){
    const valores = Object.values(objeto);
    for (const valor of valores) {
        totalVendido += valor;

    }
}

console.log(totalVendido);
