import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho, produtos } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho [] =[];
  Total= 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho=this.carrinhoService.obterCarrinho();
    this.calcularTotal();
    
  }
  calcularTotal(){
    this.Total = this.itensCarrinho.reduce((prev,curr)=> prev + (curr.preco * curr.quantidade),0 );
  }

  removerProdutoCarrinho(produtoId:number){
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !==produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }
  finalizarCompra(){
    alert ("Parabêns! sua compra foi finalizada, logo seu pedido estará a caminho  ");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
 
}
