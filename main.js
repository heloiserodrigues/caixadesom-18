//declaração/criando tocaSomPom
function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play();
}
//chamano/invocando a função tocaSomPom pelo clique do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

//referência  constante listaDeTeclas, buscando todos os botões
const litaDeTeclas = document.querySelectorAll('.tecla');

//chamando a função tocaSomPom pela item "0" da listaDeTecla
litaDeTeclas[0].onclick = TocaSomClap;