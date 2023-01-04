function tocaSom(idTagAudio){
   const elemento = document.querySelector(idTagAudio);
    if(elemento != null && elemento.localName === 'audio'){
            elemento.play();
    }
    else{
        alert('Elemento não encontrado ou seletor inválido :(');
    }
}
const listaDeTeclas = document.querySelectorAll('.tecla');

//para
for(let contador = 0;contador<listaDeTeclas.length; contador++){
    const tecla  = listaDeTeclas[contador];
    const audio = tecla.classList[1];

    const idAudio = `#som_${audio}`; //template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){//tecla apertada 
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}





//enquanto -> poderia ter sido utilizado no lugar do for
/*while(contador < listaDeTeclas.length){
    const tecla  = listaDeTeclas[contador];
    const audio = tecla.classList[1];

    const idAudio = `#som_${audio}`; //template string
    //console.log(idAudio);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    //console.log(contador);
} */