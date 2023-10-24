//declaração/criando tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
//chamano/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

//referência  constante listaDeTeclas, buscando todos os botões
const litaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
litaDeTeclas[0].onclick = tocaSom;

let contador= 0;
while(contador < litaDeTeclas.length){
    const efeito = litaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    litaDeTeclas[contador].onclick = function();{
tocaSom(Audio);
    };
    contador = contador +1;
    console.log(contador);
}