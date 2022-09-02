//porém queremos diminuir o codigo
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento /*tirei != null */&& elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido!');  
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idAudio);  
}

tecla.onkeydown = function(evento){
    if(evento.code == 'Space' || evento.code == 'Enter'){
        tecla.classList.add('ativa');
    }
}

tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
}

//let contador = 0;
/*daria para fazer com while: while(contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;
    
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }  

    contador = contador + 1;

    //console.log(contador);
}*/

//daria para fazer assim tbem com lista pra automatizar: listaDeTeclas[0].onclick = tocaSomPom;

/*daria para fazer assim, selecionando o som de cada tecla e criando uma funcao para cada tecla
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/

}
