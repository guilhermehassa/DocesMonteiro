var listaProduto = document.querySelectorAll('.produtos__ul');
var qtdListaProdutos = document.querySelectorAll('.produtos__ul');

var mostraProduto = document.querySelector('.mostra-produto');
var mostraProdutoImg = document.querySelector('.mostra-produto__img');
var mostraProdutoTitulo = document.querySelector('.mostra-produto__titulo');
var mostraProdutoTexto = document.querySelector('.mostra-produto__texto');

qtdListaProdutos.forEach(lista => {
    lista.addEventListener("click",function(event){
        
        var clicado = event.target.className;
        console.log(clicado);
        
        if(clicado!='produtos__contato' && clicado!='produtos__ul' && clicado!='produtos__texto'){

            var li = event.target;
            var bgLi = getComputedStyle(li).backgroundImage;

            var tituloProduto = li.querySelector('.produtos__titulo').textContent;
            var textoProduto = li.querySelector('.produtos__texto').textContent;

            
            mostraProdutoTitulo.textContent = tituloProduto;
            mostraProdutoTexto.textContent = textoProduto;
            mostraProdutoImg.style.backgroundImage = bgLi;
            mostraProduto.classList.remove('mostra-produto--off');
        }

    });

    var listaProdutoOff = document.querySelector('.mostra-produto--off');

    listaProdutoOff.addEventListener("click",function(event){

        mostraProduto.classList.add('mostra-produto--off');
        
    });
});


// listaProduto.addEventListener("click",function(event){
    
//     var clicado = event.target.className;
    
//     if(clicado!='produtos__contato' && clicado!='produtos__ul'){

//         var li = event.target;
//         var bgLi = getComputedStyle(li).backgroundImage;

//         var textoProduto = li.querySelector('.produtos__texto').textContent;

        
//         mostraProdutoTexto.textContent = textoProduto;
//         mostraProdutoImg.style.backgroundImage = bgLi;
//         mostraProduto.classList.remove('mostra-produto--off');
//     }

// });

// var listaProdutoOff = document.querySelector('.mostra-produto--off');

// listaProdutoOff.addEventListener("click",function(event){

//     mostraProduto.classList.add('mostra-produto--off');
    
// });