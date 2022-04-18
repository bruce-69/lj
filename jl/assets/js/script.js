let elemento_H2 = document.querySelector('h2');
let elemento_Img = document.querySelector('#img');
let conta = 0 
function botao (){
if(conta == 0 ){  
elemento_H2.innerText="batman um dos menbros fundadores liga "
elemento_Img.setAttribute("src",'jl/assets/img/184-1846309_batman-v-superman-render-by-maydaypayday-on-deviantart.png')
conta = 1
}else if ( conta == 1 ){ 
    elemento_H2.innerText="superman um dos menbros mais fortes da liga"
    elemento_Img.setAttribute( "src","jl/assets/img/61439724-8517-46CC-8036-1008347AD443.webp.webp")
conta = 2 
}else if (conta == 2  ){ 
    elemento_H2.innerText="mulher maravilha a mais poderosa "
    elemento_Img.setAttribute( "src","jl/assets/img/Wonder-Woman-Justice-League-Background-PNG-Image.png")
conta = 0
}
}






