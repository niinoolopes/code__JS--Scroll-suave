 
console.log('Teste');
/* SCROLL */
// identificando os itens do menu
    var itensMenu = document.querySelectorAll('.link');
// adicionando evento com uso do 'addEventListener' para cada item do menu
    itensMenu.forEach( item => {
        item.addEventListener('click', scrollToId);
    })
// função do efeito
    function scrollToId(e){
    // anulando evento nomral da tag a
        e.preventDefault(); 
    // obetendo valor do href do item clicado usando 'THIS'
        var id = this.getAttribute('href');
    // identificando o valor da autura da sessao com o valor do href obtido
        var alturaMenuFixo = document.querySelector(".menu").offsetHeight ;
    // calculando o quando ira mover o sroll da pagina
        var section = document.querySelector(id).offsetTop - alturaMenuFixo;
    // ativando a função 'SCROLL' nativa no elemendo windows
        window.scroll(
            {
                // altura que vai ser definida
                top: section,
                // efeito que será usado
                behavior: "smooth" 
            }
        ); 
    }
/* FIM SCROLL */