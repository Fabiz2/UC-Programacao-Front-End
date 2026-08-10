/* 2. **Validação números**: crie uma função que recebe um array e percorre-o (`for` ou `for...of`), verificando se os valores armazenados são números. Armazene os valores que são números em um novo array e retorne-o na função. */

let lista = ["a", 1, "b", 2, "c", 3]

function verificarNumeros(lista) {

    let numeros = [];

    for (let i = 0; i < lista.length; i++) {
        let variavel = typeof (lista[i]);

        if (variavel === "number") {
            numeros.push(lista[i])
        }

    }

    return numeros;
}

console.log(verificarNumeros(lista))