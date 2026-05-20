console.log("JS externo ok");

//EXE 01
function mostraMsg(){
    let nomeEx01 = document.getElementById("txtExeo1");
    let paragrafoEx01 = document.getElementById("ElementoID");

    if(nomeEx01.value != ""){
        paragrafoEx01.innerText = "Olá, " + nomeEx01.value + "!";
    }
    else{
        paragrafoEx01.innerHTML = "<span style='color:red'>Digite seu nome!</span>";
    }
}



//EXE02
function trocaEstilo(){
    let btnEx02 = document.getElementById("btnEx02");
    let paragrafoEx02 = document.getElementById("textoEx02");

    if(btnEx02.innerText == "Troca Estilo"){
        paragrafoEx02.style.color = 'blue';
        paragrafoEx02.style.fontSize = '30px';
        btnEx02.innerText = 'Retorna Estilo';
    }
    else{
        paragrafoEx02.style.color = '';
        paragrafoEx02.style.fontSize = '';
        btnEx02.innerText = 'Troca Estilo';
    }
}



//EX03

function trocaCor(novaCor){
    document.body.style.background = novaCor;
}



//EX04

function adicionaParagrafo(){
    let div = document.getElementById("conteudo");

    let novoParagrafo = document.createElement("p");
    novoParagrafo.innerText = "Parágrafo adicionado";

    div.appendChild(novoParagrafo);
}

function removeParagrafo(){
    let div = document.getElementById("conteudo");
    let ultimoParagrafo = div.lastElementChild;

    if(ultimoParagrafo){
        div.removeChild(ultimoParagrafo);
    }
}

//EX05
function mostraImg(){
    document.getElementById("imgEx05").style.display = 'block';
}

function escondeImg(){
    document.getElementById("imgEx05").style.display = 'none';
}



//EX06

function trocaImg(){
    let img = document.getElementById("imagem");

    switch(document.getElementById("imgEx06").value){
        case "peixe1":
            img.src = "img/imagem2.png";
            break;

        case "peixe2":
            img.src = "img/imagem3.png";
            break;
    }
}


//EX07
function mudaArea(){
    let areaDiv07 = document.getElementById("areaEx07");

    areaDiv07.style.background = 'green';
}

function voltaArea(){
    let areaDiv07 = document.getElementById("areaEx07");

    areaDiv07.style.background = 'blue';
}



//EX08
function mostraTxt(status){
    let paragrafoEx08;
    
    paragrafoEx08 = document.getElementById("pEx08");

    if(status){
        paragrafoEx08.innerHTML =
        " <b> tecnologias frontend fundamentais</b>"
         paragrafoEx08.style.opacity = "1";
    }
    else{
       paragrafoEx08.style.opacity = "0";
    }
}



//EX09
function criarLista(){
    let numItens = document.getElementById("numItensEx09").value;
    let lista = document.getElementById("listaEx09");

    lista.innerHTML = "";

    for(let i = 0; i < numItens; i++){
        let txtItem = prompt("Digite o item " + (i + 1));

        let novoItem = document.createElement("li");
        novoItem.innerText = txtItem;

        lista.appendChild(novoItem);
    }
}