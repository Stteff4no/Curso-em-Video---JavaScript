var carrinho = new Array();
	carrinho[0] = ["Livro", 100.0, 2];
	carrinho[1] = ["Caderno", 50, 3];
var totalItemCarrinho = 0;
var totalCompra = 0;
for ( let i = 0; i < carrinho.length; i++){
	//calcular o valor total de cada item do carrinho
    totalItemCarrinho = carrinho[i][1] * carrinho[i][2];
    console.log("Nome do produto: " + carrinho[i][0] +  "/ Valor unitário " + carrinho[i][1].toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + "/ Quantidade: " + carrinho[i][2] + " / Valor total do item: " + totalItemCarrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + ".");
    totalCompra += totalItemCarrinho;
}
console.log("O valor total da compra é de " + totalCompra.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); 


// saída:
/*
Nome do produto: Livro/ Valor unitário R$ 100.00/ Quantidade: 2 / Valor total do item: R$ 200.00.
Nome do produto: Caderno/ Valor unitário R$ 50.00/ Quantidade: 3 / Valor total do item: R$ 150.00.
O valor total da compra é de R$ 350.00
*/

  
  



  