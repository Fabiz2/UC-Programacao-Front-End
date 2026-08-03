function ex2() {
    let senha = "Fabricio123";
    let senhaUser;

    senhaUser = prompt("digite uma senha")

    if (senhaUser == senha) {
        alert("Parabéns a senha está correta !")
    } else {
        alert("A senha está incorreta")
    }
}

function ex3() {
    let idade = Number(prompt("Digite a sua idade"))

    if (Number.isNaN(idade)) {
        alert("Digite uma idade válida")
        idade = Number(prompt("Digite a sua idade"))
    }

    let rendaMensal = Number(prompt("Digite a sua renda mensal"))

    if (Number.isNaN(rendaMensal)) {
        alert("Digite um número válido")
        rendaMensal = Number(prompt("Digite a sua renda mensal"))
    }

    let doisSalariosMinimos = 3242.00

    if (idade >= 18 && rendaMensal >= doisSalariosMinimos) {
        alert("Aprovado")
    } else {
        alert("Reprovado")
    }
}

function ex4() {
    let pontos = 0;

    let anosDeExperiencia = Number(prompt("Digite quantos anos de experiência você tem "))

    if (anosDeExperiencia < 5) {
        pontos += 10
    } else {
        pontos += 20
    }

    let formacao = prompt("Digite a sua formação (graduação, especialização, mestrado, doutorado) ")

    if (formacao == "graduação") {
        pontos += 10
    } else if (formacao == "especialização") {
        pontos += 20
    } else if (formacao == "mestrado") {
        pontos += 30
    } else if (formacao == "doutorado") {
        pontos += 40
    }

    alert(`A sua pontuação é: ${pontos} pontos`)
}

function ex5() {
    let valor = Number(prompt("digite um número"))

    if (valor > 7 && valor < 10) {
        alert("O valor está entre 7 e 10")
    } else {
        alert("O valor NÃO está entre 7 e 10")
    }
}

function ex6() {
    let letra = prompt("digite uma letra").toLocaleLowerCase

    if (("a", "e", "i", "o", "u").includes(letra)) {
        alert("Vogal")
    } else {
        alert("Consoante")
    }
}

function ex7() {
    let valor = Number(prompt("digite um valor"))


    if (valor % 2 == 0) {
        if (valor >= 0) {
            alert("Valor par e positivo")
        }
        else {
            alert("Valor par e negativo")
        }
    } else {
        if (valor >= 0) {
            alert("Valor impar e positivo")
        }
        else {
            alert("Valor impar e negativo")
        }
    }
}

window.ex2() = ex2;
window.ex3() = ex3;
window.ex4() = ex4;
window.ex5() = ex5;
window.ex6() = ex6;
window.ex7() = ex7;