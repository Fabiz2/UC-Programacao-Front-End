/* 3. **Histórico de pedidos**: crie uma função que recebe um array de pedidos, e um código de pedido de 4 dígitos (exemplo: `0001`, `0002`, `0003`). Armazene o novo código do pedido ao final do array apenas se o array tiver menos de 10 elementos. Caso ele tenha 10 elementos, remova o pedido do início e então armazene-o.
    - **Opcional**: resolver este exercício utilizando _recursividade_ */

let codigos = ['0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009', '0010'];

let codigos1 = ['0001', '0002', '0003', '0004', '0005', '0006', '0007', '0008', '0009'];



function verficarCodigos(codigos, num) {

    if (codigos.length < 10) {
        codigos.push(num);
    } else {
        codigos.shift();
        codigos.push(num)
    }

    return codigos;
}

console.log(verficarCodigos(codigos1, '0011'))