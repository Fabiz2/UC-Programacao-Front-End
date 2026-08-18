let btnGato = document.getElementById('btn-gato')
let btnCao = document.getElementById('btn-cao')
let imagemPet = document.getElementById('imagem-pet')
let btnImg = document.getElementById('btn-background')

btnGato.addEventListener("click", function () {
    let fotoGato = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nCy-82QzHxMKl_BnCdLl8EndFM3237QnbeFCL7l0GXDG2QUBTgwUPiM&s=10"
    imagemPet.src = fotoGato;
});

btnCao.addEventListener("click", function () {
    let fotoCao = "https://i.pinimg.com/736x/b0/f3/ce/b0f3ce5ad5f82cafa7a2e05041ae3189.jpg"
    imagemPet.src = fotoCao
})

let cores = ['#06F874', '#8706f8', '#f806a7', '#f80606', '#f8e806'];
let count = 0
let body = document.querySelector('body')
-
btnImg.addEventListener("click", function () {

    body.style.backgroundColor = cores[count];
    count++

    if(count > cores.length){
        count = 0;
    }
})